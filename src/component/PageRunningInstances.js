import React, { Component } from 'react';

import { actionHeaderCellFormatter } from 'patternfly-react';
import { Table } from 'patternfly-react';

export default class PageRunningInstances extends Component {
    constructor(props) {
      super(props)
      this.state = {
        runningInstances: this.props.runningInstances
      }
    }
  render() {
      const headerFormat = value => <Table.Heading>{value}</Table.Heading>;
      const cellFormat = value => <Table.Cell>{value}</Table.Cell>;


      const runningInstancesColumns = [
        {
          header: {
            label: 'ID',
            formatters: [headerFormat]
          },
          cell: {
            formatters: [cellFormat]
          },
          property: 'processInstanceId'
        },
        {
          header: {
            label: 'Name',
            formatters: [headerFormat]
          },
          cell: {
            formatters: [cellFormat]
          },
          property: 'processName'
        },
        {
          header: {
            label: 'Description',
            formatters: [headerFormat]
          },
          cell: {
            formatters: [cellFormat]
          },
          property: 'processInstanceDesc'
        }
      ];


    return (
        <div className="form-horizontal">
            <Table.PfProvider striped bordered hover columns={runningInstancesColumns}>

              <Table.Header />
              <Table.Body rows={this.state.runningInstances} rowKey="processInstanceId" />
            </Table.PfProvider>

        </div>



    );
  }
}
