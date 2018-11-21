"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("../index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class MockWizardBase extends _react.default.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "onBackButtonClick", () => {
      const {
        steps
      } = this.props;
      const {
        activeStepIndex,
        activeSubStepIndex
      } = this.state;

      if (activeSubStepIndex > 0) {
        this.setState(prevState => ({
          activeSubStepIndex: prevState.activeSubStepIndex - 1
        }));
      } else if (activeStepIndex > 0) {
        this.setState(prevState => ({
          activeStepIndex: prevState.activeStepIndex - 1,
          activeSubStepIndex: steps[prevState.activeStepIndex - 1].subSteps.length - 1
        }));
      }
    });

    _defineProperty(this, "onNextButtonClick", () => {
      const {
        steps
      } = this.props;
      const {
        activeStepIndex,
        activeSubStepIndex
      } = this.state;
      const activeStep = steps[activeStepIndex];

      if (activeSubStepIndex < activeStep.subSteps.length - 1) {
        this.setState(prevState => ({
          activeSubStepIndex: prevState.activeSubStepIndex + 1
        }));
      } else if (activeStepIndex < steps.length - 1) {
        this.setState(prevState => ({
          activeStepIndex: prevState.activeStepIndex + 1,
          activeSubStepIndex: 0
        }));
      }
    });

    _defineProperty(this, "onSidebarItemClick", (stepIndex, subStepIndex) => {
      this.setState({
        activeStepIndex: stepIndex,
        activeSubStepIndex: subStepIndex
      });
    });

    _defineProperty(this, "onStepClick", stepIndex => {
      if (stepIndex === this.state.activeStepIndex) {
        return;
      }

      this.setState({
        activeStepIndex: stepIndex,
        activeSubStepIndex: 0
      });
    });

    console.log('here in MockWizardBase');
    this.state = {
      activeStepIndex: props.initialStepIndex || 0,
      activeSubStepIndex: props.initialSubStepIndex || 0
    };
  }

  render() {
    return false;
  }

}

MockWizardBase.propTypes = {
  /** Initial step index */
  initialStepIndex: _propTypes.default.number,

  /** Initial sub step index */
  initialSubStepIndex: _propTypes.default.number,

  /** Wizard steps */
  steps: _propTypes.default.array.isRequired
};
MockWizardBase.defaultProps = {
  initialStepIndex: 0,
  initialSubStepIndex: 0
};
var _default = MockWizardBase;
exports.default = _default;