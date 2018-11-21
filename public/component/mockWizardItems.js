"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockWizardFormContents = exports.mockWizardItems = exports.mockLoadingContents = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mockLoadingContents = () => _react.default.createElement("div", {
  className: "blank-slate-pf"
}, _react.default.createElement("div", {
  className: "spinner spinner-lg blank-slate-pf-icon"
}), _react.default.createElement("h3", {
  className: "blank-slate-pf-main-action"
}, "Loading Wizard"), _react.default.createElement("p", {
  className: "blank-slate-pf-secondary-action"
}, "Lorem ipsum dolor sit amet, porta at suspendisse ac, ut wisi vivamus, lorem sociosqu eget nunc amet.", ' '));

exports.mockLoadingContents = mockLoadingContents;
const mockWizardItems = [{
  step: 1,
  label: '1',
  title: 'First Step',
  subSteps: [{
    subStep: '1.1',
    label: '1A.',
    title: 'Details',
    contents: {
      label1: 'Name',
      label2: 'Description'
    }
  }, {
    subStep: '1.2',
    label: '1B.',
    title: 'Settings',
    contents: {
      label1: 'Lorem ipsum',
      label2: 'Dolor'
    }
  }]
}, {
  step: '2',
  label: '2',
  title: 'Second Step',
  subSteps: [{
    subStep: '2.1',
    label: '2A.',
    title: 'Details',
    contents: {
      label1: 'Aliquam',
      label2: 'Fermentum'
    }
  }, {
    subStep: '2.2',
    label: '2B.',
    title: 'Settings',
    contents: {
      label1: 'Consectetur',
      label2: 'Adipiscing'
    }
  }]
}, {
  step: 3,
  label: '3',
  title: 'Review',
  subSteps: [{
    subStep: '3.1',
    label: '3A.',
    title: 'Summary'
  }, {
    subStep: 4,
    label: '4A.',
    title: 'Progress'
  }]
}];
exports.mockWizardItems = mockWizardItems;

const mockWizardFormContents = (label1, label2) => _react.default.createElement("form", {
  className: "form-horizontal"
}, _react.default.createElement("div", {
  className: "form-group required"
}, _react.default.createElement("label", {
  className: "col-sm-2 control-label"
}, label1), _react.default.createElement("div", {
  className: "col-sm-10"
}, _react.default.createElement("input", {
  type: "text",
  className: "form-control"
}))), _react.default.createElement("div", {
  className: "form-group"
}, _react.default.createElement("label", {
  className: "col-sm-2 control-label"
}, label2), _react.default.createElement("div", {
  className: "col-sm-10"
}, _react.default.createElement("textarea", {
  className: "form-control",
  rows: "2"
}))));

exports.mockWizardFormContents = mockWizardFormContents;