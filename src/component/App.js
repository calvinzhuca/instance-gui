import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'react-dropdown/style.css'

import DropdownNode from './DropdownNode'
import SvgTag1 from './SvgTag1'
import SvgTag2 from './SvgTag2'
import SearchBar from "./SearchBar";
import MapButton from "./MapButton";

export default class App extends React.Component {

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
    this.setState({
      sourceNodeStr: option.value
    });

     console.log('SourceDropdown selected ', this.state.sourceNodeStr);

  }

  handleTargetDropdownChange(option){
    this.setState({
      targetNodeStr: option.value
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



const sourceDiagram = () => (
  <div>
    <SvgTag1 selectorId={this.state.sourceNodeStr}/>
  </div>
);

const targetDiagram = () => (
  <div>
    <SvgTag2 selectorId={this.state.targetNodeStr}/>
  </div>
);

   return (


<div>
  <Router>
    <div>
      <SearchBar />
      <table>
        <tbody>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>
              <Link to="/sourceDiagram">sourceDiagram</Link>
            </td>
            <td>
              <Link to="/targetDiagram">targetDiagram</Link>
            </td>
            <td>&nbsp;</td>
          </tr>
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
      <div className='result'>
          Node Mapping result:
              <strong> {this.state.allNodeMapping} </strong>
      </div>
      <Route path="/sourceDiagram" component={sourceDiagram} />
      <Route path="/targetDiagram" component={targetDiagram} />


    </div>
  </Router>
</div>


    );
  }
}
