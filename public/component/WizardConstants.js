"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.required = exports.Error = exports.sleep = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactFinalForm = require("react-final-form");

var _reactDom = require("react-dom");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

exports.sleep = sleep;

const Error = ({
  name
}) => _react.default.createElement(_reactFinalForm.Field, {
  name: name,
  subscribe: {
    touched: true,
    error: true
  },
  render: ({
    meta: {
      touched,
      error
    }
  }) => touched && error ? _react.default.createElement("span", null, error) : null
});

exports.Error = Error;

const required = value => value ? undefined : 'Required';

exports.required = required;