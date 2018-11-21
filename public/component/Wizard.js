"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactFinalForm = require("react-final-form");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Wizard extends _react.default.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "next", values => this.setState(state => ({
      page: Math.min(state.page + 1, this.props.children.length - 1),
      values
    })));

    _defineProperty(this, "previous", () => this.setState(state => ({
      page: Math.max(state.page - 1, 0)
    })));

    _defineProperty(this, "validate", values => {
      const activePage = _react.default.Children.toArray(this.props.children)[this.state.page];

      return activePage.props.validate ? activePage.props.validate(values) : {};
    });

    _defineProperty(this, "handleSubmit", values => {
      const {
        children,
        onSubmit
      } = this.props;
      const {
        page
      } = this.state;
      const isLastPage = page === _react.default.Children.count(children) - 1;

      if (isLastPage) {
        return onSubmit(values);
      } else {
        this.next(values);
      }
    });

    _defineProperty(this, "onDownloadClick", values => {
      var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(values);
      var dlAnchorElem = document.getElementById('downloadAnchorElem');
      dlAnchorElem.setAttribute("href", dataStr);
      dlAnchorElem.setAttribute("download", "migrationPlan.json");
      dlAnchorElem.click();
    });

    this.state = {
      page: 0,
      values: props.initialValues || {}
    };
  }

  render() {
    const {
      children
    } = this.props;
    const {
      page,
      values
    } = this.state;

    const activePage = _react.default.Children.toArray(children)[page];

    const isLastPage = page === _react.default.Children.count(children) - 1;
    return _react.default.createElement(_reactFinalForm.Form, {
      initialValues: values,
      validate: this.validate,
      onSubmit: this.handleSubmit
    }, ({
      handleSubmit,
      submitting,
      values
    }) => _react.default.createElement("form", {
      onSubmit: handleSubmit
    }, activePage, _react.default.createElement("div", {
      className: "buttons"
    }, page > 0 && _react.default.createElement("button", {
      type: "button",
      onClick: this.previous
    }, "\xAB Previous"), !isLastPage && _react.default.createElement("button", {
      type: "submit"
    }, "Next \xBB"), isLastPage && _react.default.createElement("button", {
      type: "button",
      disabled: submitting,
      onClick: e => this.onDownloadClick(JSON.stringify(values, 0, 2))
    }, "Export Plan"), isLastPage && _react.default.createElement("button", {
      type: "submit",
      disabled: submitting
    }, "Submit")), _react.default.createElement("table", null, _react.default.createElement("tbody", null, _react.default.createElement("tr", null, _react.default.createElement("td", null, _react.default.createElement("pre", null, JSON.stringify(values, 0, 2))))))));
  }

}

exports.default = Wizard;

_defineProperty(Wizard, "propTypes", {
  onSubmit: _propTypes.default.func.isRequired
});

_defineProperty(Wizard, "Page", ({
  children
}) => children);