import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Field } from 'react-final-form'

import DefinitionDiagrams from "./DefinitionDiagrams";
import MapButton from "./MapButton";
import DropdownNode from './DropdownNode'
import * as constants from './WizardConstants';
import TestCompont from "./TestCompont";

export default class DefinitionMappingTable extends Component {
  constructor (props) {
    super(props);
    this.state = {
                  sourceNodeStr: '',
                  targetNodeStr: '',
                  sourceDiagramshown: false,
                  targetDiagramshown: false
                };
    this.handleSourceDropdownChange = this.handleSourceDropdownChange.bind(this);
    this.handleTargetDropdownChange = this.handleTargetDropdownChange.bind(this);
    this.handleSourceDiagramButtonClick = this.handleSourceDiagramButtonClick.bind(this);
    this.handleTargetDiagramButtonClick = this.handleTargetDiagramButtonClick.bind(this);
    this.handleMapButtonClick = this.handleMapButtonClick.bind(this);

    console.log("this.props.sourceInfo.nodesForDropdown " + this.props.sourceInfo.nodesForDropdown);
    console.log("this.props.targetInfo.nodesForDropdown " + this.props.targetInfo.nodesForDropdown);

  }


  handleSourceDiagramButtonClick(){
    console.log('handleSourceDiagramButtonClick sourceDiagramshown ' + this.state.sourceDiagramshown)
    this.setState({
			sourceDiagramshown: !this.state.sourceDiagramshown
		});
  }

  handleTargetDiagramButtonClick(){
    console.log('handleTargetDiagramButtonClick targetDiagramshown ' + this.state.targetDiagramshown)
    this.setState({
			targetDiagramshown: !this.state.targetDiagramshown
		});
  }

  handleSourceDropdownChange(option){
    let tmpPreviousSelector = this.state.sourceCurrentSelector;
    //let tmpCurrentSelector = "#"  + option.value + "undefined";
    let tmpCurrentSelector = "#"  + option.value + "_shapeType_BACKGROUND";
    this.setState({
      sourceNodeStr: option.value,
      sourcePreviousSelector: tmpPreviousSelector,
      sourceCurrentSelector: tmpCurrentSelector,
      sourceDiagramshown: true,
      targetDiagramshown: false
    });

  }



  handleTargetDropdownChange(option){
    let tmpPreviousSelector = this.state.targetCurrentSelector;
    let tmpCurrentSelector = "#"  + option.value + "_shapeType_BACKGROUND";
    //let tmpCurrentSelector = "#"  + option.value;

    //let tmpCurrentSelector = "[bpmn2nodeid=" + option.value + "]";
    //console.log('TargetDropdown selected ', tmpCurrentSelector);

    this.setState({
      targetNodeStr: option.value,
      targetPreviousSelector: tmpPreviousSelector,
      targetCurrentSelector: tmpCurrentSelector,
      sourceDiagramshown: false,
      targetDiagramshown: true
    });

  }

  handleMapButtonClick(){

      if (this.state.sourceNodeStr.length >0 && this.state.targetNodeStr.length >0 )
      {
          var currentNodeMapping = this.state.sourceNodeStr + ":" + this.state.targetNodeStr;
          console.log("handleMapButtonClick currentNodeMapping ", currentNodeMapping);

          var input = document.getElementById("nodeMappingHiddenField");
          var currentInputValue = input.value;
          //remove {} before add new node mapping values
          currentInputValue = currentInputValue.replace(/{/g, '');
          currentInputValue = currentInputValue.replace(/}/g, '');
          if (currentInputValue.length > 0)
          {
            currentInputValue = currentInputValue + "," + currentNodeMapping;
          }else{
            currentInputValue = currentNodeMapping;
          }

          currentInputValue = '{' + currentInputValue + '}';

          var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value").set;
          nativeInputValueSetter.call(input, currentInputValue);

          //once fired the event, this currentInputValue will be saved in the wizard form's values
          var ev2 = new Event('input', { bubbles: true});
          input.dispatchEvent(ev2);

      }



  }



  render() {


   const values = this.props.sourceInfo.values;
   const labels = this.props.sourceInfo.labels;
   const sourceNode = [];
   for (var i = 0; i < values.length; i++){
       sourceNode.push({value:values[i],label:labels[i]});
   }

   //const sourceNode = [{value:'_D3E17247-1D94-47D8-93AD-D645E317B736',label:'Self Evaluation:_D3E17247-1D94-47D8-93AD-D645E317B736'},{value:'_E35438DF-03AF-4D7B-9DCB-30BC70E7E92E',label:'PM Evaluation:_E35438DF-03AF-4D7B-9DCB-30BC70E7E92E'},{value:'_AB431E82-86BC-460F-9D8B-7A7617565B36',label:'HR Evaluation:_AB431E82-86BC-460F-9D8B-7A7617565B36'},{value:'_B8E4DA1E-A62B-49C2-9A94-FEE5F5FD2B4E',label:'Input:_B8E4DA1E-A62B-49C2-9A94-FEE5F5FD2B4E'}];
   //const targetNode = [{value:'_D3E17247-1D94-47D8-93AD-D645E317B736',label:'Self Evaluation:_D3E17247-1D94-47D8-93AD-D645E317B736'},{value:'_E35438DF-03AF-4D7B-9DCB-30BC70E7E92E',label:'PM Evaluation:_E35438DF-03AF-4D7B-9DCB-30BC70E7E92E'},{value:'_AB431E82-86BC-460F-9D8B-7A7617565B36',label:'HR Evaluation:_AB431E82-86BC-460F-9D8B-7A7617565B36'},{value:'_B8E4DA1E-A62B-49C2-9A94-FEE5F5FD2B4E',label:'Input:_B8E4DA1E-A62B-49C2-9A94-FEE5F5FD2B4E'}];
   const targetValues = this.props.targetInfo.values;
   const targetLabels = this.props.targetInfo.labels;
   const targetNode = [];
   for (var i = 0; i < values.length; i++){
       targetNode.push({value:targetValues[i],label:targetLabels[i]});
   }


    return (



<div>
  <table border="0">
    <tbody>
      <tr>
        <td>
          <table>
          <thead>
            <tr>
              <th>Source Nodes</th>
              <th>Target Nodes</th>
            </tr>
          </thead>
            <tbody>
              <tr>
                <td>
                  <DropdownNode
                    options={sourceNode}
                    onDropdownChange={this.handleSourceDropdownChange}
                  />
                </td>
                <td>
                  <DropdownNode
                    options={targetNode}
                    onDropdownChange={this.handleTargetDropdownChange}
                  />
                </td>
                <td>
                  <MapButton onMapButtonClick={this.handleMapButtonClick} />
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr />
      <tr>
        <td >
            Mappings:
                <Field
                  name="mappings"
                  component="textarea"
                  id="nodeMappingHiddenField"
                />
        </td>
      </tr>
      <tr>
        <td>
          <DefinitionDiagrams
            sourceCurrentSelector={this.state.sourceCurrentSelector}
            sourcePreviousSelector={this.state.sourcePreviousSelector}

            targetCurrentSelector={this.state.targetCurrentSelector}
            targetPreviousSelector={this.state.targetPreviousSelector}

            sourceDiagramButtonClick={this.handleSourceDiagramButtonClick}
            targetDiagramButtonClick={this.handleTargetDiagramButtonClick}

            sourceDiagramshown={this.state.sourceDiagramshown}
            targetDiagramshown={this.state.targetDiagramshown}

            sourceInfo={this.props.sourceInfo} targetInfo={this.props.targetInfo}
          />
        </td>
      </tr>
    </tbody>
  </table>
</div>

    );
  }
}
