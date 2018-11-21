"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _DefinitionDiagramButton = _interopRequireDefault(require("./DefinitionDiagramButton"));

var _SvgControllerPan = _interopRequireDefault(require("./SvgControllerPan"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

class DefinitionDiagrams extends _react.Component {
  render() {
    const sourceShown = {
      display: this.props.sourceDiagramshown ? "block" : "none"
    };
    const targetShown = {
      display: this.props.targetDiagramshown ? "block" : "none"
    };
    const sourceDisplayText = this.props.sourceDiagramshown ? "Hide Source Diagram" : "Show Source Diagram";
    const targetDisplayText = this.props.targetDiagramshown ? "Hide Target Diagram" : "Show Target Diagram";
    return _react.default.createElement("table", {
      border: "0"
    }, _react.default.createElement("tbody", null, _react.default.createElement("tr", null, _react.default.createElement("td", null, _react.default.createElement("table", null, _react.default.createElement("tbody", null, _react.default.createElement("tr", null, _react.default.createElement("td", null, "Source: ", this.props.sourceInfo.processId), _react.default.createElement("td", null, "Target: ", this.props.targetInfo.processId)), _react.default.createElement("tr", null, _react.default.createElement("td", null, _react.default.createElement(_DefinitionDiagramButton.default, {
      onButtonClick: this.props.sourceDiagramButtonClick,
      displayText: sourceDisplayText,
      sourceDiagramshown: this.props.sourceDiagramshown
    })), _react.default.createElement("td", null, _react.default.createElement(_DefinitionDiagramButton.default, {
      onButtonClick: this.props.targetDiagramButtonClick,
      displayText: targetDisplayText,
      isShown: targetShown
    }))))))), _react.default.createElement("tr", null, _react.default.createElement("td", null, _react.default.createElement("h2", {
      style: sourceShown
    }, "Source Process Definition Diagram", _react.default.createElement(_SvgControllerPan.default, {
      svgcontents: this.props.sourceInfo.svgFile,
      previousSelector: this.props.sourcePreviousSelector,
      currentSelector: this.props.sourceCurrentSelector
    })), _react.default.createElement("h2", {
      style: targetShown
    }, "Target Process Definition Diagram", _react.default.createElement(_SvgControllerPan.default, {
      svgcontents: this.props.targetInfo.svgFile,
      previousSelector: this.props.targetPreviousSelector,
      currentSelector: this.props.targetCurrentSelector
    }))))));
  }

}

exports.default = DefinitionDiagrams;
;