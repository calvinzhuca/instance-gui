"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _WizardPyMain = _interopRequireDefault(require("./component/WizardPyMain"));

require("./index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import WizardForm from "./component/WizardForm";
document.addEventListener("DOMContentLoaded", function () {
  _reactDom.default.render(_react.default.createElement(_WizardPyMain.default), document.getElementById("mount"));
});