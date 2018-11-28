import React, { Component } from 'react';
import { Field } from 'react-final-form';
import axios from 'axios';

import SearchInputTable from "./SearchInputTable";

export default class PageDefinitionTables extends Component {
    constructor (props) {
      super(props);

      this.state = {
          sourceProcessId: 'evaluation',
          sourceGroupId: 'evaluation',
          sourceArtifactId: 'evaluation',
          sourceVersion: '2.0.0-SNAPSHOT',
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
      this.retriveBothInfo = this.retriveBothInfo.bind(this);
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

    retriveBothInfo(){
        console.log('this.state.sourceProcessId ' + this.state.sourceProcessId);
        console.log('this.state.targetProcessId ' + this.state.targetProcessId);
        axios.get('http://localhost:8080/backend/both', {
            params: {
                sourceProcessId: this.state.sourceProcessId,
                sourceGroupId: this.state.sourceGroupId,
                sourceArtifactId: this.state.sourceArtifactId,
                sourceVersion: this.state.sourceVersion,
                targetProcessId: this.state.targetProcessId,
                targetGroupId: this.state.targetGroupId,
                targetArtifactId: this.state.targetArtifactId,
                targetVersion: this.state.targetVersion
            }
        }).then (res => {

            this.props.setInfo(res.data.sourceInfo,res.data.targetInfo);

            var input = document.getElementById("hiddenField_source_container_id");
            var containerId = this.state.sourceProcessId + "_" + this.state.sourceVersion;
            var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
            nativeInputValueSetter.call(input, containerId);
            //once fired the event, this currentInputValue will be saved in the wizard form's values
            var ev = new Event('input', { bubbles: true});
            input.dispatchEvent(ev);

            var input = document.getElementById("hiddenField_target_container_id");
            var containerId = this.state.targetProcessId + "_" + this.state.targetVersion;
            var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
            nativeInputValueSetter.call(input, containerId);
            //once fired the event, this currentInputValue will be saved in the wizard form's values
            var ev = new Event('input', { bubbles: true});
            input.dispatchEvent(ev);


            input = document.getElementById("hiddenField_target_process_id");
            var processId = this.state.targetProcessId;
            var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
            nativeInputValueSetter.call(input, processId);
            //once fired the event, this currentInputValue will be saved in the wizard form's values
            var ev = new Event('input', { bubbles: true});
            input.dispatchEvent(ev);


        });


    }


  render() {

    return (
      <div className="form-horizontal">


                    <SearchInputTable tableHeader="Source "
                        processId={this.state.sourceProcessId}
                        groupId={this.state.sourceGroupId}
                        artifactId={this.state.sourceArtifactId}
                        version={this.state.sourceVersion}

                        handleProcessIdChange={this.handleSourceProcessIdChange}
                        handleGroupIdChange={this.handleSourceGroupIdChange}
                        handleArtifactIdChange={this.handleSourceArtifactIdChange}
                        handleVersionChange={this.handleSourceVersionChange}
                    />

                    <button type="button" onClick={(e) => this.copySourceToTarget(e)}> COPY Source TO Target</button>

                    <SearchInputTable tableHeader="Target "
                        processId={this.state.targetProcessId}
                        groupId={this.state.targetGroupId}
                        artifactId={this.state.targetArtifactId}
                        version={this.state.targetVersion}

                        handleProcessIdChange={this.handleTargetProcessIdChange}
                        handleGroupIdChange={this.handleTargetGroupIdChange}
                        handleArtifactIdChange={this.handleTargetArtifactIdChange}
                        handleVersionChange={this.handleTargetVersionChange}
                    />


                    <button type="button" onClick={() => this.retriveBothInfo()}>
                      retrive both info from backend
                    </button>

                    <div className="form-group">
                        <label className="col-sm-2 control-label">{this.props.sourceInfo.containerId}</label>
                        <label className="col-sm-2 control-label">{this.props.targetInfo.containerId}</label>
                    </div>
                    <div style={{display: 'none'}}>
                        <input type="text" className="form-control" name="source_container_id" id="hiddenField_source_container_id" />
                        <input type="text" className="form-control" name="target_container_id" id="hiddenField_target_container_id" />
                        <input type="text" className="form-control" name="target_process_id" id="hiddenField_target_process_id" />
                    </div>


      </div>
    );
  }
}
