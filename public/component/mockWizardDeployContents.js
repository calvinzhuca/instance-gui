"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class MockWizardDeployContents extends _react.default.Component {
  constructor() {
    super();
    this.state = {
      deploying: true
    };
  }

  componentWillReceiveProps(nextProps) {
    const {
      active
    } = this.props;

    if (!nextProps.active) {
      this.setState({
        deploying: true
      });
    } else if (!active && nextProps.active) {
      setTimeout(() => {
        this.setState({
          deploying: false
        });
      }, 3000);
    }
  }

  render() {
    if (this.state.deploying) {
      return _react.default.createElement("div", {
        className: "wizard-pf-process blank-slate-pf"
      }, _react.default.createElement("div", {
        className: "spinner spinner-lg blank-slate-pf-icon"
      }), _react.default.createElement("h3", {
        className: "blank-slate-pf-main-action"
      }, "Deployment in progress"), _react.default.createElement("p", {
        className: "blank-slate-pf-secondary-action"
      }, "Lorem ipsum dolor sit amet, porta at suspendisse ac, ut wisi vivamus, lorem sociosqu eget nunc amet.", ' '));
    }

    return _react.default.createElement("div", {
      className: "wizard-pf-complete blank-slate-pf"
    }, _react.default.createElement("div", {
      className: "wizard-pf-success-icon"
    }, _react.default.createElement("span", {
      className: "glyphicon glyphicon-ok-circle"
    })), _react.default.createElement("h3", {
      className: "blank-slate-pf-main-action"
    }, "Deployment was successful"), _react.default.createElement("p", {
      className: "blank-slate-pf-secondary-action"
    }, "Lorem ipsum dolor sit amet, porta at suspendisse ac, ut wisi vivamus, lorem sociosqu eget nunc amet.", ' '), _react.default.createElement("button", {
      type: "button",
      className: "btn btn-lg btn-primary"
    }, "View Deployment"));
  }

}

MockWizardDeployContents.propTypes = {
  active: _propTypes.default.bool.isRequired
};
var _default = MockWizardDeployContents;
exports.default = _default;