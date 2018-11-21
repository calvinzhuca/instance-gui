"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _patternflyReact = require("patternfly-react");

var _WizardForm = _interopRequireDefault(require("./WizardForm2"));

var _mockWizardItems = require("./mockWizardItems");

require("../index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class WizardPyMain extends _react.default.Component {
  render() {
    return _react.default.createElement("div", null, _react.default.createElement(_patternflyReact.Row, null, _react.default.createElement(_patternflyReact.Col, {
      sm: 12
    }, _react.default.createElement(_WizardForm.default, {
      steps: _mockWizardItems.mockWizardItems
    }))));
  }

}

exports.default = WizardPyMain;