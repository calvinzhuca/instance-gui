import React from "react";
import classNames from 'classnames';
import axios from 'axios';

import { Table } from 'patternfly-react';
import { Button } from "patternfly-react";
import { Icon } from "patternfly-react";
import { Wizard } from "patternfly-react";
import { actionHeaderCellFormatter, MenuItem, MessageDialog } from 'patternfly-react';


import MigrationPlansBase from './MigrationPlansBase';

import MigrationPlansEditPopup from './MigrationPlansEditPopup';
import MigrationPlanListFilter from './MigrationPlanListFilter'

import WizardAddPlan from './WizardAddPlan';
import WizardExecuteMigration from './WizardExecuteMigration';

import { AddPlanItems } from './WizardItems';
import { ExecuteMigrationItems } from './WizardItems';

export default class MigrationPlans extends MigrationPlansBase {







    resetAllStates = ()=> {
        //clean all states before open add plan wizard, otherwise the wizard-form might have last add-plan's values and steps
      this.setState({
          showDeleteConfirmation:false,
          showMigrationWizard:false,
          showPlanWizard: false,
          deletePlanId:'',
          runningInstances:[]
      });
    };

    openMigrationWizard = (containerId) =>{
          console.log("openMigrationWizard containerId " + containerId)

          axios.get('http://localhost:8080/backend/instances', {
              params: {
                  containerId: containerId,
              }
          }).then (res => {
              const instances = res.data;
              //console.log('running instances: ' + JSON.stringify(instances));

            this.setState({
                runningInstances: instances,
                showMigrationWizard: true
            });

        });
    }

    closeMigrationWizard = () => {
      this.setState({ showMigrationWizard: false });
      //TODO: this.retriveAllPlans();
    };



    openAddPlanWizard = () => {
      this.resetAllStates();
      this.setState({showPlanWizard: true});
    }



    closeAddPlanWizard = () => {
      this.setState({ showPlanWizard: false });
      this.retriveAllPlans();
    };

    onFilterChange = (planFilter) =>{
        console.log('onFilterChange: ' + planFilter);

        let filteredPlans = this.state.plans
        filteredPlans = filteredPlans.filter((plan) => {
          let sourceContainterId = plan.source_container_id.toLowerCase()
          return sourceContainterId.indexOf(
            planFilter.toLowerCase()) !== -1
        })
        this.setState({
          filteredPlans
        })
    }



  render() {
      const { showPlanWizard, showMigrationWizard, runningInstances } = this.state;
      const headerFormat = value => <Table.Heading>{value}</Table.Heading>;
      const cellFormat = value => <Table.Cell>{value}</Table.Cell>;
      const headerFormatRightAlign = value => <Table.Heading align="right">{value}</Table.Heading>;
      const cellFormatRightAlign = value => <Table.Cell align="right">{value}</Table.Cell>;

      //for MessageDialogDeleteConfirmation
      const primaryContent = <p className="lead">Please confirm you will delete this migration plan {this.state.deletePlanId}</p>;
      const secondaryContent = <p></p>;
      const icon = <Icon type="pf" name="error-circle-o" />;

      const planBootstrapColumns = [
        {
          header: {
            label: 'ID',
            formatters: [headerFormat]
          },
          cell: {
            formatters: [cellFormat]
          },
          property: 'id'
        },
        {
          header: {
            label: 'Plan Name',
            formatters: [headerFormat]
          },
          cell: {
            formatters: [cellFormat]
          },
          property: 'name'
        },
        {
          header: {
            label: 'Description',
            formatters: [headerFormat]
          },
          cell: {
            formatters: [cellFormat]
          },
          property: 'description'
        },
        {
          header: {
            label: 'Source Container ID',
            formatters: [headerFormat]
          },
          cell: {
            formatters: [cellFormat]
          },
          property: 'source_container_id'
        },
        {
          header: {
            label: 'Target Container ID',
            formatters: [headerFormat]
          },
          cell: {
            formatters: [cellFormat]
          },
          property: 'target_container_id'
        },
        {
          header: {
            label: 'Target Process ID',
            formatters: [headerFormat]
          },
          cell: {
            formatters: [cellFormat]
          },
          property: 'target_process_id'
        },
        {
          header: {
            label: 'Actions',
            props: {
              rowSpan: 1,
              colSpan: 3
            },
            formatters: [actionHeaderCellFormatter]
          },
          cell: {
              formatters: [
                (value, { rowData }) => [
                  <Table.Actions key="0">
                        <Table.Button bsStyle="default" onClick={() => this.openMigrationWizard(rowData.source_container_id)}>Execute</Table.Button>
                  </Table.Actions>,
                  <Table.Actions key="1">
                        <MigrationPlansEditPopup
                          title="Edit Migration Plan"
                          actionName="Edit"
                          content={JSON.stringify(rowData)}
                          retrieveAllPlans={this.retrieveAllPlans}
                          updatePlan={this.editPlan}
                          planId={rowData.id}
                        />
                  </Table.Actions>,
                  <Table.Actions key="2">
                        <Table.Button bsStyle="default" onClick={() => this.showDeleteDialog(rowData.id)}>Delete</Table.Button>
                  </Table.Actions>
                ]
              ]
          },
          property: 'action'
        }
      ];

    return (
        <div>

              <MessageDialog
                show={this.state.showDeleteConfirmation}
                onHide={this.hideDeleteDialog}
                primaryAction={this.deletePlan}
                secondaryAction={this.hideDeleteDialog}
                primaryActionButtonContent="Delete"
                secondaryActionButtonContent="Cancel"
                primaryActionButtonBsStyle="danger"
                title="Delete Migration Plan"
                icon={icon}
                primaryContent={primaryContent}
                secondaryContent={secondaryContent}
                accessibleName="deleteConfirmationDialog"
                accessibleDescription="deleteConfirmationDialogContent"
              />


            <table border="0" width="100%">
            <tbody>
              <tr>
                <td>
                  <MigrationPlanListFilter onChange={this.onFilterChange} />
                </td>
                <td  align="right">
                  <MigrationPlansEditPopup
                    title="Import Migration Plan"
                    actionName="Import Plan"
                    retrieveAllPlans={this.retrieveAllPlans}
                    updatePlan={this.addPlan}
                  />
                </td>
                <td  align="left">
                  <Button bsStyle="primary" onClick={this.openAddPlanWizard}>
                    Add Plan
                  </Button>
                </td>
              </tr>
             </tbody>
            </table>


            <Table.PfProvider striped bordered hover columns={planBootstrapColumns}>
              <Table.Header />
              <Table.Body rows={this.state.filteredPlans} rowKey="id" />
            </Table.PfProvider>


            <WizardAddPlan
                showPlanWizard={showPlanWizard}
                closeAddPlanWizard={this.closeAddPlanWizard}
                addPlan={this.addPlan}
                steps={AddPlanItems}

            />


          <WizardExecuteMigration
            showMigrationWizard={showMigrationWizard}
            closeMigrationWizard={this.closeMigrationWizard}
            runningInstances={runningInstances}
            steps={ExecuteMigrationItems}
          />

    </div>

    );
  }
}
