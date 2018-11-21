"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactFinalForm = require("react-final-form");

var _DefinitionDiagrams = _interopRequireDefault(require("./DefinitionDiagrams"));

var _MapButton = _interopRequireDefault(require("./MapButton"));

var _DropdownNode = _interopRequireDefault(require("./DropdownNode"));

var constants = _interopRequireWildcard(require("./WizardConstants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

class PageMapping extends _react.Component {
  constructor(props) {
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

  handleSourceDiagramButtonClick() {
    console.log('handleSourceDiagramButtonClick sourceDiagramshown ' + this.state.sourceDiagramshown);
    this.setState({
      sourceDiagramshown: !this.state.sourceDiagramshown
    });
  }

  handleTargetDiagramButtonClick() {
    console.log('handleTargetDiagramButtonClick targetDiagramshown ' + this.state.targetDiagramshown);
    this.setState({
      targetDiagramshown: !this.state.targetDiagramshown
    });
  }

  handleSourceDropdownChange(option) {
    let tmpPreviousSelector = this.state.sourceCurrentSelector; //let tmpCurrentSelector = "#"  + option.value + "undefined";

    let tmpCurrentSelector = "#" + option.value + "_shapeType_BACKGROUND";
    this.setState({
      sourceNodeStr: option.value,
      sourcePreviousSelector: tmpPreviousSelector,
      sourceCurrentSelector: tmpCurrentSelector,
      sourceDiagramshown: true,
      targetDiagramshown: false
    });
  }

  handleTargetDropdownChange(option) {
    let tmpPreviousSelector = this.state.targetCurrentSelector;
    let tmpCurrentSelector = "#" + option.value + "_shapeType_BACKGROUND"; //let tmpCurrentSelector = "#"  + option.value;
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

  handleMapButtonClick() {
    if (this.state.sourceNodeStr.length > 0 && this.state.targetNodeStr.length > 0) {
      var currentNodeMapping = '"' + this.state.sourceNodeStr + '"' + ":" + '"' + this.state.targetNodeStr + '"';
      console.log("handleMapButtonClick currentNodeMapping1 ", currentNodeMapping);
      var input = document.getElementById("nodeMappingField");
      var currentInputValue = input.value; //remove {} before add new node mapping values

      currentInputValue = currentInputValue.replace(/{/g, '');
      currentInputValue = currentInputValue.replace(/}/g, '');

      if (currentInputValue.length > 0) {
        currentInputValue = currentInputValue + "," + currentNodeMapping;
      } else {
        currentInputValue = currentNodeMapping;
      }

      currentInputValue = '{' + currentInputValue + '}';
      var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value").set;
      nativeInputValueSetter.call(input, currentInputValue); //once fired the event, this currentInputValue will be saved in the wizard form's values

      var ev2 = new Event('input', {
        bubbles: true
      });
      input.dispatchEvent(ev2);
    }
  }

  render() {
    const sourceValues = this.props.sourceInfo.values;
    const sourceLabels = this.props.sourceInfo.labels;
    const sourceNode = [];

    for (var i = 0; i < sourceValues.length; i++) {
      sourceNode.push({
        value: sourceValues[i],
        label: sourceLabels[i]
      });
    } //const sourceNode = [{value:'_D3E17247-1D94-47D8-93AD-D645E317B736',label:'Self Evaluation:_D3E17247-1D94-47D8-93AD-D645E317B736'},{value:'_E35438DF-03AF-4D7B-9DCB-30BC70E7E92E',label:'PM Evaluation:_E35438DF-03AF-4D7B-9DCB-30BC70E7E92E'},{value:'_AB431E82-86BC-460F-9D8B-7A7617565B36',label:'HR Evaluation:_AB431E82-86BC-460F-9D8B-7A7617565B36'},{value:'_B8E4DA1E-A62B-49C2-9A94-FEE5F5FD2B4E',label:'Input:_B8E4DA1E-A62B-49C2-9A94-FEE5F5FD2B4E'}];
    //const targetNode = [{value:'_D3E17247-1D94-47D8-93AD-D645E317B736',label:'Self Evaluation:_D3E17247-1D94-47D8-93AD-D645E317B736'},{value:'_E35438DF-03AF-4D7B-9DCB-30BC70E7E92E',label:'PM Evaluation:_E35438DF-03AF-4D7B-9DCB-30BC70E7E92E'},{value:'_AB431E82-86BC-460F-9D8B-7A7617565B36',label:'HR Evaluation:_AB431E82-86BC-460F-9D8B-7A7617565B36'},{value:'_B8E4DA1E-A62B-49C2-9A94-FEE5F5FD2B4E',label:'Input:_B8E4DA1E-A62B-49C2-9A94-FEE5F5FD2B4E'}];


    const targetValues = this.props.targetInfo.values;
    const targetLabels = this.props.targetInfo.labels;
    const targetNode = [];

    for (var i = 0; i < targetValues.length; i++) {
      targetNode.push({
        value: targetValues[i],
        label: targetLabels[i]
      });
    }

    return _react.default.createElement("div", null, _react.default.createElement("table", {
      border: "0"
    }, _react.default.createElement("tbody", null, _react.default.createElement("tr", null, _react.default.createElement("td", null, _react.default.createElement("table", null, _react.default.createElement("thead", null, _react.default.createElement("tr", null, _react.default.createElement("th", null, "Source Nodes"), _react.default.createElement("th", null, "Target Nodes"))), _react.default.createElement("tbody", null, _react.default.createElement("tr", null, _react.default.createElement("td", null, _react.default.createElement(_DropdownNode.default, {
      options: sourceNode,
      onDropdownChange: this.handleSourceDropdownChange
    })), _react.default.createElement("td", null, _react.default.createElement(_DropdownNode.default, {
      options: targetNode,
      onDropdownChange: this.handleTargetDropdownChange
    })), _react.default.createElement("td", null, _react.default.createElement(_MapButton.default, {
      onMapButtonClick: this.handleMapButtonClick
    }))))))), _react.default.createElement("tr", null), _react.default.createElement("tr", null, _react.default.createElement("td", null, _react.default.createElement(_DefinitionDiagrams.default, {
      sourceCurrentSelector: this.state.sourceCurrentSelector,
      sourcePreviousSelector: this.state.sourcePreviousSelector,
      targetCurrentSelector: this.state.targetCurrentSelector,
      targetPreviousSelector: this.state.targetPreviousSelector,
      sourceDiagramButtonClick: this.handleSourceDiagramButtonClick,
      targetDiagramButtonClick: this.handleTargetDiagramButtonClick,
      sourceDiagramshown: this.state.sourceDiagramshown,
      targetDiagramshown: this.state.targetDiagramshown,
      sourceInfo: this.props.sourceInfo,
      targetInfo: this.props.targetInfo
    }))), _react.default.createElement("tr", null, _react.default.createElement("td", null, "Use below text field to update mappings directly, like delete a wrong mapping:")), _react.default.createElement("tr", null, _react.default.createElement("td", null, _react.default.createElement(_reactFinalForm.Field, {
      name: "mappings",
      component: "textarea",
      id: "nodeMappingField"
    }))))));
  }

}

exports.default = PageMapping;