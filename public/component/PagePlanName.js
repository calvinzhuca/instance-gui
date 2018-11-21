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

class PagePlanName extends _react.Component {
  render() {
    return _react.default.createElement("div", null, _react.default.createElement("table", {
      border: "0",
      cellPadding: "1"
    }, _react.default.createElement("tbody", null, _react.default.createElement("tr", null, _react.default.createElement("td", {
      colSpan: "2"
    }, _react.default.createElement("div", null, _react.default.createElement("label", null, "Plan Name: "), _react.default.createElement(_reactFinalForm.Field, {
      name: "name",
      component: "input",
      type: "text",
      placeholder: "no more than 20 characters",
      validate: constants.required
    }), _react.default.createElement(constants.Error, {
      name: "name"
    })), _react.default.createElement("div", null, _react.default.createElement("label", null, "Description: "), _react.default.createElement(_reactFinalForm.Field, {
      name: "description",
      component: "input",
      type: "text",
      placeholder: "no more than 1000 characters",
      validate: constants.required
    }), _react.default.createElement(constants.Error, {
      name: "description"
    })))))));
  }

}

exports.default = PagePlanName;