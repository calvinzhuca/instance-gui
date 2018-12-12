import React from "react";
import classNames from 'classnames';

import { Table } from 'patternfly-react';
import { Button } from "patternfly-react";
import { Icon } from "patternfly-react";
import { Wizard } from "patternfly-react";
import { actionHeaderCellFormatter, MenuItem, MessageDialog } from 'patternfly-react';

import { PfWizardCreatePlanItems } from './PfWizardCreatePlanItems';
import MigrationPlansBase from './MigrationPlansBase';
import { renderWizardSteps, renderWizardContents } from './PfWizardRenderers';
import MigrationPlansEditPopup from './MigrationPlansEditPopup';
import MigrationPlanListFilter from './MigrationPlanListFilter'

export default class MigrationPlans extends MigrationPlansBase {


    handleFormChange = (e) => {

        if (e.target.name == 'name'){
            this.setState({name: e.target.value});
        }else if (e.target.name == 'description'){
            this.setState({description: e.target.value});
        }else if (e.target.name == 'source_container_id'){
            this.setState({source_container_id: e.target.value});
        }else if (e.target.name == 'target_container_id'){
            this.setState({target_container_id: e.target.value});
        }else if (e.target.name == 'target_process_id'){
            this.setState({target_process_id: e.target.value});
        }else if (e.target.name == 'mappings'){
            this.setState({mappings: e.target.value});
        }
    }



      convertFormDataToJson(){
          const formData = {
              name: this.state.name,
              description: this.state.description,
              source_container_id: this.state.source_container_id,
              target_container_id: this.state.target_container_id,
              target_process_id: this.state.target_process_id
          };

          if (this.state.mappings !== null && this.state.mappings !==''){
              formData.mappings = this.state.mappings;
          }

          const jsonStr = JSON.stringify(formData, null, 2);

          this.setState({migrationPlanJsonStr: jsonStr});

          //console.log("!!!!!!!!!!!!! dataContainer" + dataContainer.textContent);
      }



    openAddPlanWizard = () => {
        //clean all states before open add plan wizard, otherwise the wizard-form might have last add-plan's values and steps
      this.setState({
          activeStepIndex: 0,
          activeSubStepIndex: 0,
          showPlanWizard: true,
          sourceInfo: '',
          targetInfo: '',
          name:'',
          description:'',
          source_container_id:'',
          target_container_id:'',
          target_process_id:'',
          mappings:'',
          migrationPlanJsonStr:'',
          showDeleteConfirmation:false,
          deletePlanId:''
      });
    };


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
      const { showPlanWizard, activeStepIndex, activeSubStepIndex } = this.state;
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
                        <Table.Button bsStyle="default" onClick={() => alert(`Execute ${rowData.name}`)}>Execute</Table.Button>
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
            </table>


            <Table.PfProvider striped bordered hover columns={planBootstrapColumns}>

              <Table.Header />
              <Table.Body rows={this.state.filteredPlans} rowKey="id" />
            </Table.PfProvider>


            <form className="form-horizontal" name="form_migration_plan" onChange={this.handleFormChange}>
              <Wizard show={showPlanWizard} onHide={this.closeAddPlanWizard}>
                <Wizard.Header onClose={this.closeAddPlanWizard} title="Create Migration Plan Wizard" />
                <Wizard.Body>
                  <Wizard.Steps
                    steps={renderWizardSteps(PfWizardCreatePlanItems, activeStepIndex, activeSubStepIndex, this.onStepClick)}
                  />
                  <Wizard.Row>
                    <Wizard.Main>{renderWizardContents(PfWizardCreatePlanItems, this.state, this.setInfo)}</Wizard.Main>
                  </Wizard.Row>
                </Wizard.Body>
                <Wizard.Footer>
                  <Button bsStyle="default" className="btn-cancel" onClick={this.closeAddPlanWizard}>
                    Cancel
                  </Button>
                  <Button
                    bsStyle="default"
                    disabled={activeStepIndex === 0 && activeSubStepIndex === 0}
                    onClick={this.onBackButtonClick}
                  >
                    <Icon type="fa" name="angle-left" />
                    Back
                  </Button>
                  {(activeStepIndex === 0 || activeStepIndex === 1 || activeStepIndex === 2) && (
                    <Button bsStyle="primary" onClick={this.onNextButtonClick}>
                      Next
                      <Icon type="fa" name="angle-right" />
                    </Button>
                  )}
                  {activeStepIndex === 3 &&
                    activeSubStepIndex === 0 && (
                      <Button bsStyle="primary" onClick={this.onSubmit}>
                        Submit Plan
                        <Icon type="fa" name="angle-right" />
                      </Button>
                    )}
                  {activeStepIndex === 3 &&
                    activeSubStepIndex === 1 && (
                      <Button bsStyle="primary" onClick={this.closeAddPlanWizard}>
                        Close
                        <Icon type="fa" name="angle-right" />
                      </Button>
                    )}
                </Wizard.Footer>
              </Wizard>
          </form>


        </div>

    );
  }
}
