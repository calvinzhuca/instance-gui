import React, { Component } from 'react';
import { Button } from "patternfly-react";
import { Table } from 'patternfly-react';
import { actionHeaderCellFormatter } from "patternfly-react";

import MigrationPlansEditPopup from './MigrationPlansEditPopup';

export default class MigrationPlansTable extends Component {


  render() {
      const headerFormat = value => <Table.Heading>{value}</Table.Heading>;
      const cellFormat = value => <Table.Cell>{value}</Table.Cell>;
      const headerFormatRightAlign = value => <Table.Heading align="right">{value}</Table.Heading>;
      const cellFormatRightAlign = value => <Table.Cell align="right">{value}</Table.Cell>;


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
          property: 'sourceContainerId'
        },
        {
          header: {
            label: 'Target Container ID',
            formatters: [headerFormat]
          },
          cell: {
            formatters: [cellFormat]
          },
          property: 'targetContainerId'
        },
        {
          header: {
            label: 'Target Process ID',
            formatters: [headerFormat]
          },
          cell: {
            formatters: [cellFormat]
          },
          property: 'targetProcessId'
        },
        {
          header: {
            label: 'Actions',
            props: {
              rowSpan: 1,
              colSpan: 4
            },
            formatters: [actionHeaderCellFormatter]
          },
          cell: {
              formatters: [
                (value, { rowData }) => [
                  <Table.Actions key="0">
                        <Table.Button bsStyle="default" onClick={() => this.props.openMigrationWizard(rowData)}>Execute</Table.Button>
                  </Table.Actions>,
                  <Table.Actions key="1">
                        <MigrationPlansEditPopup
                          title="Edit Migration Plan"
                          actionName="Edit"
                          content={JSON.stringify(rowData)}
                          retrieveAllPlans={this.props.retrieveAllPlans}
                          updatePlan={this.props.updatePlan}
                          planId={rowData.id}
                        />
                  </Table.Actions>,
                  <Table.Actions key="2">
                        <Table.Button bsStyle="default" onClick={() => this.props.showDeleteDialog(rowData.id)}>Delete</Table.Button>
                  </Table.Actions>,
                  <Table.Actions key="3">
                        <Table.Button bsStyle="default" onClick={() => this.props.openAddPlanWizardwithInitialData(rowData)}>Edit with Wizard</Table.Button>
                  </Table.Actions>,
                ]
              ]
          },
          property: 'action'
        }
      ];

    return (
        <div>
            <Table.PfProvider striped bordered hover columns={planBootstrapColumns}>
              <Table.Header />
              <Table.Body rows={this.props.filteredPlans} rowKey="id" />
            </Table.PfProvider>
        </div>



    );
  }
}
