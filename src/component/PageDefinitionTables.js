import React, { Component } from 'react';
import { Field } from 'react-final-form';


import * as constants from './WizardConstants';
import SearchInputTable from "./SearchInputTable";
import SearchInputTable2 from "./SearchInputTable2";

export default class PageDefinitionTables extends Component {
    constructor (props) {
      super(props);

      this.state = {
          sourceProcessId: 'evaluation',
          sourceGroupId: 'evaluation',
          sourceArtifactId: 'evaluation',
          sourceVersion: '1.0.0-SNAPSHOT',
          targetProcessId: 'Mortgage_Process.MortgageApprovalProcess',
          targetGroupId: 'mortgage-process',
          targetArtifactId: 'mortgage-process',
          targetVersion: '1.0.0-SNAPSHOT'
      };
      this.copySourceToTarget = this.copySourceToTarget.bind(this);
    }


    copySourceToTarget(){
        this.setState({
            targetProcessId:  this.state.sourceProcessId,
            targetGroupId: this.state.sourceGroupId,
            targetArtifactId: this.state.sourceArtifactId,
            targetVersion: this.state.sourceVersion
        });
    }

  render() {



    return (
      <div>
        <table border="0" cellPadding="1">
          <tbody>
            <tr>
              <td colSpan="2">
                  <div>
                    <label>Plan Name: </label>
                    <Field
                      name="name"
                      component="input"
                      type="text"
                      placeholder="no more than 20 characters"
                      validate={constants.required}
                    />
                    <constants.Error name="name"/>
                  </div>
                  <div>
                    <label>Description: </label>
                    <Field
                      name="description"
                      component="input"
                      type="text"
                      placeholder="no more than 1000 characters"
                      validate={constants.required}
                    />
                    <constants.Error name="description"/>
                  </div>


              </td>
            </tr>


            <tr>
              <td>
                    <SearchInputTable tableHeader="Source Process Definition"
                        onClick={this.props.retriveSourceInfo}
                        processId={this.state.sourceProcessId}
                        groupId={this.state.sourceGroupId}
                        artifactId={this.state.sourceArtifactId}
                        version={this.state.sourceVersion}
                    />
              </td>

              <td>
                    <SearchInputTable2 tableHeader="Target Process Definition"
                        onClick={this.props.retriveTargetInfo}
                        sourceProcessId={this.state.sourceProcessId}
                        sourceGroupId={this.state.sourceGroupId}
                        sourceArtifactId={this.state.sourceArtifactId}
                        sourceVersion={this.state.sourceVersion}
                        processId={this.state.targetProcessId}
                        groupId={this.state.targetGroupId}
                        artifactId={this.state.targetArtifactId}
                        version={this.state.targetVersion}
                        copySourceToTarget={this.copySourceToTarget}
                    />
              </td>
            </tr>
            <tr>
              <td>Retrived Source Process info: </td>
              <td colSpan="2">{this.props.sourceInfo.containerId}</td>
            </tr>

            <tr>
              <td>Retrived Target Process info: </td>
              <td colSpan="2">{this.props.targetInfo.containerId}</td>
            </tr>

            <tr>
                <td>
                <Field
                  name="source_container_id"
                  component="input"
                  id="hiddenField_source_container_id"
                />
                <Field
                  name="target_container_id"
                  component="input"
                  id="hiddenField_target_container_id"
                />
                <Field
                  name="target_process_id"
                  component="input"
                  id="hiddenField_target_process_id"
                />
                </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
