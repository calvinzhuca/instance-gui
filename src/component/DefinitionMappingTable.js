import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import DiagramLink from "./DiagramLink";
import DefinitionDiagrams from "./DefinitionDiagrams";
import MapButton from "./MapButton";
import DropdownNode from './DropdownNode'


export default class DefinitionMappingTable extends Component {
  constructor (props) {
    super(props);
    this.state = {allNodeMapping: '',
                  sourceNodeStr: '',
                  targetNodeStr: ''};
    this.handleSourceDropdownChange = this.handleSourceDropdownChange.bind(this);
    this.handleTargetDropdownChange = this.handleTargetDropdownChange.bind(this);
    this.handleMapButtonClick = this.handleMapButtonClick.bind(this);
  }


  handleSourceDropdownChange(option){
    let tmpPreviousSelector = this.state.sourceCurrentSelector;
    let tmpCurrentSelector = "#"  + option.value + "undefined";
    this.setState({
      sourceNodeStr: option.value,
      sourcePreviousSelector: tmpPreviousSelector,
      sourceCurrentSelector: tmpCurrentSelector
    });

  }

  handleTargetDropdownChange(option){
    let tmpPreviousSelector = this.state.targetCurrentSelector;
    let tmpCurrentSelector = "#"  + option.value + "undefined";
    this.setState({
      targetNodeStr: option.value,
      targetPreviousSelector: tmpPreviousSelector,
      targetCurrentSelector: tmpCurrentSelector
    });
    console.log('TargetDropdown selected ', this.state.targetNodeStr);
  }

  handleMapButtonClick(){
    var currentNodeMapping = this.state.sourceNodeStr + ":" + this.state.targetNodeStr;
    console.log('handleMapButtonClick currentNodeMapping ', currentNodeMapping);
    if (this.state.allNodeMapping.length > 0)
    {
      var allMappingStr = this.state.allNodeMapping + "," + currentNodeMapping;
    }else{
      var allMappingStr = currentNodeMapping;
    }

    this.setState({
      allNodeMapping: allMappingStr
    });
    console.log('handleMapButtonClick nodeMapping' + this.state.allNodeMapping)

  }



  render() {

    const sourceProcessDefinitions = [
      { name: 'Name', value: 'Evaluation' },
      { name: 'Version', value: '1' },
      { name: 'Project/Container ID', value: 'evaluation_1.0.0-SNAPSHOT' },
    ];

    const targetProcessDefinitions = [
      { name: 'Name', value: 'Evaluation' },
      { name: 'Version', value: '2' },
      { name: 'Project/Container ID', value: 'evaluation_2.0.0-SNAPSHOT' },
    ];


    const sourceNode = [
      { value: '_D3E17247-1D94-47D8-93AD-D645E317B736', label: 'Self Evaluation:_D3E17247-1D94-47D8-93AD-D645E317B736' },
      { value: '_E35438DF-03AF-4D7B-9DCB-30BC70E7E92E', label: 'PM Evaluation:_E35438DF-03AF-4D7B-9DCB-30BC70E7E92E' },
      { value: '_AB431E82-86BC-460F-9D8B-7A7617565B36', label: 'HR Evaluation:_AB431E82-86BC-460F-9D8B-7A7617565B36'}

    ];

    const targetNode = [
      { value: '_D3E17247-1D94-47D8-93AD-D645E317B736', label: 'Self Evaluation:_D3E17247-1D94-47D8-93AD-D645E317B736' },
      { value: '_E35438DF-03AF-4D7B-9DCB-30BC70E7E92E', label: 'PM Evaluation:_E35438DF-03AF-4D7B-9DCB-30BC70E7E92E' },
      { value: '_AB431E82-86BC-460F-9D8B-7A7617565B36', label: 'HR Evaluation:_AB431E82-86BC-460F-9D8B-7A7617565B36'},
      { value: '_B8E4DA1E-A62B-49C2-9A94-FEE5F5FD2B4E', label: 'Input:_B8E4DA1E-A62B-49C2-9A94-FEE5F5FD2B4E'}
    ];

    return (



<div>
  <table border="0">
    <tbody>
      <tr>
        <td>
          <table>
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
        <td>
          <div className="result">
            Node Mapping result:
            <strong> {this.state.allNodeMapping} </strong>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <DefinitionDiagrams
            sourceCurrentSelector={this.state.sourceCurrentSelector}
            sourcePreviousSelector={this.state.sourcePreviousSelector}
            
            targetCurrentSelector={this.state.targetCurrentSelector}
            targetPreviousSelector={this.state.targetPreviousSelector}

          />
        </td>
      </tr>
    </tbody>
  </table>
</div>

    );
  }
}
