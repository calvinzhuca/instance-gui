import React, { Component } from 'react';
import { Field } from 'react-final-form';

import * as constants from './WizardConstants';
import SearchInputTable from "./SearchInputTable";

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
      this.handleSourceProcessIdChange = this.handleSourceProcessIdChange.bind(this);
      this.handleSourceGroupIdChange = this.handleSourceGroupIdChange.bind(this);
      this.handleSourceArtifactIdChange = this.handleSourceArtifactIdChange.bind(this);
      this.handleSourceVersionChange = this.handleSourceVersionChange.bind(this);
      this.handleTargetProcessIdChange = this.handleTargetProcessIdChange.bind(this);
      this.handleTargetGroupIdChange = this.handleTargetGroupIdChange.bind(this);
      this.handleTargetArtifactIdChange = this.handleTargetArtifactIdChange.bind(this);
      this.handleTargetVersionChange = this.handleTargetVersionChange.bind(this);
    }


    copySourceToTarget(){
        this.setState({
            targetProcessId:  this.state.sourceProcessId,
            targetGroupId: this.state.sourceGroupId,
            targetArtifactId: this.state.sourceArtifactId,
            targetVersion: this.state.sourceVersion
        });
    }

    handleSourceProcessIdChange(value){
        this.setState({sourceProcessId: value});
    }

    handleSourceGroupIdChange(value){
        this.setState({sourceGroupId: value});
    }

    handleSourceArtifactIdChange(value){
        this.setState({sourceArtifactId: value});
    }

    handleSourceVersionChange(value){
        this.setState({sourceVersion: value});
    }

    handleTargetProcessIdChange(value){
        this.setState({targetProcessId: value});
    }

    handleTargetGroupIdChange(value){
        this.setState({targetGroupId: value});
    }

    handleTargetArtifactIdChange(value){
        this.setState({targetArtifactId: value});
    }

    handleTargetVersionChange(value){
        this.setState({targetVersion: value});
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
                        processId={this.state.sourceProcessId}
                        groupId={this.state.sourceGroupId}
                        artifactId={this.state.sourceArtifactId}
                        version={this.state.sourceVersion}

                        handleProcessIdChange={this.handleSourceProcessIdChange}
                        handleGroupIdChange={this.handleSourceGroupIdChange}
                        handleArtifactIdChange={this.handleSourceArtifactIdChange}
                        handleVersionChange={this.handleSourceVersionChange}
                        retriveInfo={this.props.retriveSourceInfo}
                    />
              </td>
              <td>
                    <button type="button" onClick={(e) => this.copySourceToTarget(e)}> >>>> </button>
              </td>
              <td>
                    <SearchInputTable tableHeader="Target Process Definition"
                        processId={this.state.targetProcessId}
                        groupId={this.state.targetGroupId}
                        artifactId={this.state.targetArtifactId}
                        version={this.state.targetVersion}

                        handleProcessIdChange={this.handleTargetProcessIdChange}
                        handleGroupIdChange={this.handleTargetGroupIdChange}
                        handleArtifactIdChange={this.handleTargetArtifactIdChange}
                        handleVersionChange={this.handleTargetVersionChange}
                        retriveInfo={this.props.retriveTargetInfo}
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
