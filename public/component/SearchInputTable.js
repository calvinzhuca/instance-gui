"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

class SearchInputTable extends _react.Component {
  handleProcessIdChange(event) {
    this.props.handleProcessIdChange(event.target.value);
  }

  handleGroupIdChange(event) {
    this.props.handleGroupIdChange(event.target.value);
  }

  handleArtifactIdChange(event) {
    this.props.handleArtifactIdChange(event.target.value);
  }

  handleVersionChange(event) {
    this.props.handleVersionChange(event.target.value);
  }

  render() {
    return _react.default.createElement("div", null, _react.default.createElement("table", {
      border: "0",
      cellPadding: "1"
    }, _react.default.createElement("thead", null, _react.default.createElement("tr", null, _react.default.createElement("th", {
      colSpan: "2"
    }, this.props.tableHeader))), _react.default.createElement("tbody", null, _react.default.createElement("tr", null, _react.default.createElement("td", null, "Process ID"), _react.default.createElement("td", null, _react.default.createElement("input", {
      type: "text",
      name: "processId",
      value: this.props.processId,
      onChange: e => this.handleProcessIdChange(e)
    }))), _react.default.createElement("tr", null, _react.default.createElement("td", null, "Group ID"), _react.default.createElement("td", null, _react.default.createElement("input", {
      type: "text",
      name: "groupId",
      value: this.props.groupId,
      onChange: e => this.handleGroupIdChange(e)
    }))), _react.default.createElement("tr", null, _react.default.createElement("td", null, "Artifact ID"), _react.default.createElement("td", null, _react.default.createElement("input", {
      type: "text",
      name: "artifactId",
      value: this.props.artifactId,
      onChange: e => this.handleArtifactIdChange(e)
    }))), _react.default.createElement("tr", null, _react.default.createElement("td", null, "Version"), _react.default.createElement("td", null, _react.default.createElement("input", {
      type: "text",
      name: "version",
      value: this.props.version,
      onChange: e => this.handleVersionChange(e)
    }))))));
  }

}

exports.default = SearchInputTable;