import React, { Component } from 'react';
import { Button } from "patternfly-react";
import { Table } from 'patternfly-react';
import { actionHeaderCellFormatter } from "patternfly-react";
import axios from 'axios';

import { Icon } from "patternfly-react";
import { MessageDialog } from 'patternfly-react';
import { MockupData_Migration_Results } from '../MockupData';
import {BACKEND_URL, USE_MOCK_DATA} from '../PimConstants';
import PageViewMigrationLogs from './PageViewMigrationLogs';


export default class MigrationDefinitions extends Component {
    constructor(props) {
      super(props);
      this.state = {
          migrationResults:[],
          migrationLogs:[],
          showLogDialog: false,
          showDeleteConfirmation: false,
          deleteMigrationId:''
      };
    }

    componentDidMount(){
        //this.retriveMigrationResults();
    }

    hideDetailDialog = () => {
        this.setState({
            showLogDialog: false
         });
    };


    retriveMigrationLogs = (rowData) =>{
        this.setState({
            showLogDialog:true
        });
        if (USE_MOCK_DATA){
            console.log('retriveMigrationLogs useMockData: ');
            //TODO

        }else{

            const servicesUrl = BACKEND_URL + "/migrations/" + rowData.id + "/results";
            //console.log('retriveMigrationLogs url: ' + servicesUrl);
            axios.get(servicesUrl, {
            }).then (res => {
                const results = res.data;
                console.log('retriveMigrationLogs ' + JSON.stringify(results));
                this.setState({
                    migrationLogs: results
                 });
                console.log('retriveMigrationLogs is done ');
          });
        }
    }



        showDeleteDialog = (id) =>{
            this.setState({
                showDeleteConfirmation: true,
                deleteMigrationId: id
            });
        }

        hideDeleteDialog = () =>{
            this.setState({
                showDeleteConfirmation: false
            });
        }

    deleteMigration = () =>{
        if (USE_MOCK_DATA){
            console.log('deleteMigration useMockData: ');
            //TODO

        }else{
            //need to create a temp variable "self" to store this, so I can invoke this inside axios call
            const self = this;
            const servicesUrl = BACKEND_URL + "/migrations/" + this.state.deleteMigrationId;
            console.log('deleteMigration url: ' + servicesUrl);
            axios.delete(servicesUrl, {
            }).then (res => {
                const results = res.data;
                console.log('deleteMigration ' + JSON.stringify(results));
                self.hideDeleteDialog();
                self.retriveMigrationResults();
          });
        }
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
            formatters:  [
              (value, { rowData }) => [
                  <Table.Actions key="0">
                        <a href="#" onClick={() => this.retriveMigrationLogs(rowData)}>{value}</a>
                  </Table.Actions>

              ]
            ]
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
            label: 'Error Message',
            formatters: [headerFormat]
          },
          cell: {
            formatters: [cellFormat]
          },
          property: 'errorMessage'
        },
        {
          header: {
            label: 'Actions',
            props: {
              rowSpan: 1,
              colSpan: 1
            },
            formatters: [actionHeaderCellFormatter]
          },
          cell: {
              formatters: [
                (value, { rowData }) => [
                        <Table.Actions key="0">
                              <Table.Button bsStyle="default" onClick={() => this.retriveMigrationLogs(rowData.id)}>Edit</Table.Button>
                        </Table.Actions>,
                          <Table.Actions key="1">
                                <Table.Button bsStyle="default" onClick={() => this.showDeleteDialog(rowData.id)}>Delete</Table.Button>
                          </Table.Actions>
                ]
              ]
          },
          property: 'action'
        }
    ];

    //for MessageDialogInfo
    const primaryContent = <PageViewMigrationLogs migrationLogs={this.state.migrationLogs} />;
    const secondaryContent = <p></p>;
    const icon = <Icon type="pf" name="info" />;

    //for MessageDialogDeleteConfirmation
    const primaryDeleteContent = <p className="lead">Please confirm you will delete this migration: {this.state.deleteMigrationId}</p>;
    const deleteIcon = <Icon type="pf" name="error-circle-o" />;



    return (
        <div>

        {/* MIgration Result Detail pop-up */}
        <MessageDialog
            show={this.state.showLogDialog}
            onHide={this.hideDetailDialog}
            primaryAction={this.hideDetailDialog}
            primaryActionButtonContent="Close"
            title="Migration Result Details"
            icon={icon}
            primaryContent={primaryContent}
            secondaryContent={secondaryContent}
            accessibleName="migrationDetailDialog"
            accessibleDescription="migrationDetailDialogContent"
        />

        {/* Delete Migration pop-up */}
        <MessageDialog
          show={this.state.showDeleteConfirmation}
          onHide={this.hideDeleteDialog}
          primaryAction={this.deleteMigration}
          secondaryAction={this.hideDeleteDialog}
          primaryActionButtonContent="Delete"
          secondaryActionButtonContent="Cancel"
          primaryActionButtonBsStyle="danger"
          title="Delete Migration"
          icon={deleteIcon}
          primaryContent={primaryDeleteContent}
          accessibleName="deleteConfirmationDialog"
          accessibleDescription="deleteConfirmationDialogContent"
        />


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
