"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _patternflyReact = require("patternfly-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class MockWizardReviewStepsManager extends _react.default.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "stepClicked", (e, stepIndex) => {
      e.preventDefault();
      const updated = [...this.state.steps];
      updated[stepIndex].collapsed = !updated[stepIndex].collapsed;
      this.setState({
        steps: updated
      });
    });

    _defineProperty(this, "subStepClicked", (e, stepIndex, subStepIndex) => {
      e.preventDefault();
      const updated = [...this.state.steps];
      updated[stepIndex].subSteps[subStepIndex].collapsed = !updated[stepIndex].subSteps[subStepIndex].collapsed;
      this.setState({
        steps: updated
      });
    });

    this.state = {
      steps: [...props.steps]
    };
  }

  render() {
    const {
      steps
    } = this.state;
    return _react.default.createElement(_patternflyReact.Wizard.ReviewSteps, null, steps.map((step, stepIndex) => {
      if (stepIndex === 2) {
        return null;
      }

      return _react.default.createElement(_patternflyReact.Wizard.ReviewStep, {
        title: step.title,
        collapsed: step.collapsed,
        onClick: e => this.stepClicked(e, stepIndex),
        key: stepIndex
      }, _react.default.createElement(_patternflyReact.Wizard.ReviewSubSteps, {
        collapsed: step.collapsed
      }, step.subSteps.map((sub, subStepIndex) => _react.default.createElement(_patternflyReact.Wizard.ReviewSubStep, {
        label: sub.label,
        title: sub.title,
        collapsed: sub.collapsed,
        onClick: e => this.subStepClicked(e, stepIndex, subStepIndex),
        key: subStepIndex
      }, _react.default.createElement(_patternflyReact.Wizard.ReviewContent, {
        collapsed: sub.collapsed
      }, _react.default.createElement(_patternflyReact.Wizard.ReviewItem, null, _react.default.createElement("span", {
        className: "wizard-pf-review-item-label"
      }, sub.contents.label1, ":"), _react.default.createElement("span", {
        className: "wizard-pf-review-item-value"
      }, "Brian Johnson")), _react.default.createElement(_patternflyReact.Wizard.ReviewItem, null, _react.default.createElement("span", {
        className: "wizard-pf-review-item-label"
      }, sub.contents.label2, ":"), _react.default.createElement("span", {
        className: "wizard-pf-review-item-value"
      }, "This is the description.")))))));
    }));
  }

}

MockWizardReviewStepsManager.propTypes = {
  /** Wizard steps */
  steps: _propTypes.default.array.isRequired
};
var _default = MockWizardReviewStepsManager;
exports.default = _default;