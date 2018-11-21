"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactFinalForm = require("react-final-form");

var _axios = _interopRequireDefault(require("axios"));

var constants = _interopRequireWildcard(require("./WizardConstants"));

var _SearchInputTable = _interopRequireDefault(require("./SearchInputTable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

class PageDefinitionTables extends _react.Component {
  constructor(props) {
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
    this.retriveBothInfo = this.retriveBothInfo.bind(this);
  }

  copySourceToTarget() {
    this.setState({
      targetProcessId: this.state.sourceProcessId,
      targetGroupId: this.state.sourceGroupId,
      targetArtifactId: this.state.sourceArtifactId,
      targetVersion: this.state.sourceVersion
    });
  }

  handleSourceProcessIdChange(value) {
    this.setState({
      sourceProcessId: value
    });
  }

  handleSourceGroupIdChange(value) {
    this.setState({
      sourceGroupId: value
    });
  }

  handleSourceArtifactIdChange(value) {
    this.setState({
      sourceArtifactId: value
    });
  }

  handleSourceVersionChange(value) {
    this.setState({
      sourceVersion: value
    });
  }

  handleTargetProcessIdChange(value) {
    this.setState({
      targetProcessId: value
    });
  }

  handleTargetGroupIdChange(value) {
    this.setState({
      targetGroupId: value
    });
  }

  handleTargetArtifactIdChange(value) {
    this.setState({
      targetArtifactId: value
    });
  }

  handleTargetVersionChange(value) {
    this.setState({
      targetVersion: value
    });
  }

  retriveBothInfo() {
    console.log('this.state.sourceProcessId ' + this.state.sourceProcessId);
    console.log('this.state.targetProcessId ' + this.state.targetProcessId);

    _axios.default.get('http://localhost:8080/backend/both', {
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
    }).then(res => {
      this.props.setInfo(res.data.sourceInfo, res.data.targetInfo);
      var input = document.getElementById("hiddenField_source_container_id");
      var containerId = this.state.sourceProcessId + "_" + this.state.sourceVersion;
      var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
      nativeInputValueSetter.call(input, containerId); //once fired the event, this currentInputValue will be saved in the wizard form's values

      var ev = new Event('input', {
        bubbles: true
      });
      input.dispatchEvent(ev);
      var input = document.getElementById("hiddenField_target_container_id");
      var containerId = this.state.targetProcessId + "_" + this.state.targetVersion;
      var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
      nativeInputValueSetter.call(input, containerId); //once fired the event, this currentInputValue will be saved in the wizard form's values

      var ev = new Event('input', {
        bubbles: true
      });
      input.dispatchEvent(ev);
      input = document.getElementById("hiddenField_target_process_id");
      var processId = this.state.targetProcessId;
      var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
      nativeInputValueSetter.call(input, processId); //once fired the event, this currentInputValue will be saved in the wizard form's values

      var ev = new Event('input', {
        bubbles: true
      });
      input.dispatchEvent(ev);
    });
  }

  render() {
    return _react.default.createElement("div", null, _react.default.createElement("table", {
      border: "0",
      cellPadding: "1"
    }, _react.default.createElement("tbody", null, _react.default.createElement("tr", null, _react.default.createElement("td", null, _react.default.createElement(_SearchInputTable.default, {
      tableHeader: "Source Process Definition",
      processId: this.state.sourceProcessId,
      groupId: this.state.sourceGroupId,
      artifactId: this.state.sourceArtifactId,
      version: this.state.sourceVersion,
      handleProcessIdChange: this.handleSourceProcessIdChange,
      handleGroupIdChange: this.handleSourceGroupIdChange,
      handleArtifactIdChange: this.handleSourceArtifactIdChange,
      handleVersionChange: this.handleSourceVersionChange
    })), _react.default.createElement("td", null, _react.default.createElement("button", {
      type: "button",
      onClick: e => this.copySourceToTarget(e)
    }, " >>>> ")), _react.default.createElement("td", null, _react.default.createElement(_SearchInputTable.default, {
      tableHeader: "Target Process Definition",
      processId: this.state.targetProcessId,
      groupId: this.state.targetGroupId,
      artifactId: this.state.targetArtifactId,
      version: this.state.targetVersion,
      handleProcessIdChange: this.handleTargetProcessIdChange,
      handleGroupIdChange: this.handleTargetGroupIdChange,
      handleArtifactIdChange: this.handleTargetArtifactIdChange,
      handleVersionChange: this.handleTargetVersionChange
    }))), _react.default.createElement("tr", null, _react.default.createElement("td", null), _react.default.createElement("td", null), _react.default.createElement("td", null, _react.default.createElement("button", {
      type: "button",
      onClick: () => this.retriveBothInfo()
    }, "retrive both info from backend"))), _react.default.createElement("tr", null, _react.default.createElement("td", null, "Retrived Source Process info: "), _react.default.createElement("td", {
      colSpan: "2"
    }, this.props.sourceInfo.containerId)), _react.default.createElement("tr", null, _react.default.createElement("td", null, "Retrived Target Process info: "), _react.default.createElement("td", {
      colSpan: "2"
    }, this.props.targetInfo.containerId)), _react.default.createElement("tr", {
      style: {
        display: 'none'
      }
    }, _react.default.createElement("td", null, _react.default.createElement(_reactFinalForm.Field, {
      name: "source_container_id",
      component: "input",
      id: "hiddenField_source_container_id",
      validate: constants.required
    }), _react.default.createElement(_reactFinalForm.Field, {
      name: "target_container_id",
      component: "input",
      id: "hiddenField_target_container_id",
      validate: constants.required
    }), _react.default.createElement(_reactFinalForm.Field, {
      name: "target_process_id",
      component: "input",
      id: "hiddenField_target_process_id",
      validate: constants.required
    }))))));
  }

}

exports.default = PageDefinitionTables;