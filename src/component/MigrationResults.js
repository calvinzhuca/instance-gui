import React, { Component } from 'react';
import { Button } from "patternfly-react";
import { Table } from 'patternfly-react';
import { actionHeaderCellFormatter } from "patternfly-react";
import axios from 'axios';

import { MockupData_Migration_Results } from './MockupData';
import {BACKEND_URL} from './PimConstants';

export default class MigrationResults extends Component {
    constructor(props) {
      super(props);
      this.state = {
          migrationResults:[],
          useMockData:false
      };
    }

    retriveMigrationResults = () =>{
        const input = document.getElementById("id_MigrationResults_input1");
        console.log('retriveMigrationResults: ' +  input.value);

        if (this.state.useMockData){
            console.log('retriveMigrationResults useMockData: ');
            const migrationResults = MockupData_Migration_Results;
            this.setState({
                migrationResults
             });

        }else{
                const serviceUrl = BACKEND_URL + '/migrations/' + input.value;
                axios.get(serviceUrl, {
                }).then (res => {
                    var migrationResults = res.data;
                    if (migrationResults != null){
                        const tmpStr = JSON.stringify(migrationResults);
                        if (tmpStr != '' && tmpStr.charAt(0) !='['){
                            //this is single element json, need to change to json array, otherwise the table won't display
                            migrationResults = [migrationResults];
                        }
                    }
                    console.log('retriveMigrationResults: ' + JSON.stringify(migrationResults));
                    this.setState({
                        migrationResults
                     });
              });
        }


    }


  render() {

      const headerFormat = value => <Table.Heading>{value}</Table.Heading>;
      const cellFormat = value => <Table.Cell>{value}</Table.Cell>;

      const resultBootstrapColumns = [
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
            label: 'Status',
            formatters: [headerFormat]
          },
          cell: {
            formatters: [cellFormat]
          },
          property: 'status'
        },
        {
          header: {
            label: 'Created At',
            formatters: [headerFormat]
          },
          cell: {
            formatters: [cellFormat]
          },
          property: 'createdAt'
        },
        {
          header: {
            label: 'Started At',
            formatters: [headerFormat]
          },
          cell: {
            formatters: [cellFormat]
          },
          property: 'startedAt'
        },
        {
          header: {
            label: 'Finished At',
            formatters: [headerFormat]
          },
          cell: {
            formatters: [cellFormat]
          },
          property: 'finishedAt'
        },
        {
          header: {
            label: 'Cancelled At',
            formatters: [headerFormat]
          },
          cell: {
            formatters: [cellFormat]
          },
          property: 'cancelledAt'
        },
        {
          header: {
            label: 'Error Message',
            formatters: [headerFormat]
          },
          cell: {
            formatters: [cellFormat]
          },
          property: 'errorMessage'
        },
    ];

    return (
        <div>
          <input id="id_MigrationResults_input1" type="search" placeholder="Search By Migration ID"/>
          <button type="button" onClick={this.retriveMigrationResults}><span className="fa fa-search"></span></button>

          <Table.PfProvider striped columns={resultBootstrapColumns}>
            <Table.Header />
            <Table.Body rows={this.state.migrationResults} rowKey="id" />
          </Table.PfProvider>
        </div>



    );
  }
}
