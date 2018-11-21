"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderWizardContents = exports.renderSidebarItems = exports.renderWizardSteps = void 0;

var _react = _interopRequireDefault(require("react"));

var _patternflyReact = require("patternfly-react");

var _mockWizardItems = require("./mockWizardItems");

var _mockWizardReviewStepsManager = _interopRequireDefault(require("./mockWizardReviewStepsManager"));

var _mockWizardDeployContents = _interopRequireDefault(require("./mockWizardDeployContents"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const renderWizardSteps = (wizardSteps, activeStepIndex, activeSubStepIndex, onStepClick) => {
  console.log("here 1");
  const activeStep = wizardSteps[activeStepIndex];
  const activeSubStep = activeStep.subSteps[activeSubStepIndex];
  return wizardSteps.map((step, stepIndex) => _react.default.createElement(_patternflyReact.Wizard.Step, {
    key: stepIndex,
    stepIndex: stepIndex,
    step: step.step,
    label: step.label,
    title: step.title,
    activeStep: activeStep && activeStep.step,
    onClick: onStepClick
  }, step.subSteps.map((sub, subStepIndex) => _react.default.createElement(_patternflyReact.Wizard.SubStep, {
    key: subStepIndex,
    subStep: sub.subStep,
    title: sub.title,
    activeSubStep: activeSubStep && activeSubStep.subStep
  }))));
};

exports.renderWizardSteps = renderWizardSteps;

const renderSidebarItems = (wizardSteps, activeStepIndex, activeSubStepIndex, onSidebarItemClick) => {
  const activeStep = wizardSteps[activeStepIndex];
  const activeSubStep = activeStep.subSteps[activeSubStepIndex];
  return wizardSteps.map((step, stepIndex) => _react.default.createElement(_patternflyReact.Wizard.SidebarGroup, {
    key: stepIndex,
    step: step.step,
    activeStep: activeStep.step
  }, step.subSteps.map((sub, subStepIndex) => _react.default.createElement(_patternflyReact.Wizard.SidebarGroupItem, {
    key: subStepIndex,
    stepIndex: stepIndex,
    subStepIndex: subStepIndex,
    subStep: sub.subStep,
    label: sub.label,
    title: sub.title,
    activeSubStep: activeSubStep.subStep,
    onClick: onSidebarItemClick
  }))));
};

exports.renderSidebarItems = renderSidebarItems;

const renderWizardContents = (wizardSteps, activeStepIndex, activeSubStepIndex) => wizardSteps.map((step, stepIndex) => step.subSteps.map((sub, subStepIndex) => {
  if (stepIndex === 0 || stepIndex === 1) {
    // render steps 1 and 2 mock contents
    return _react.default.createElement(_patternflyReact.Wizard.Contents, {
      key: subStepIndex,
      stepIndex: stepIndex,
      subStepIndex: subStepIndex,
      activeStepIndex: activeStepIndex,
      activeSubStepIndex: activeSubStepIndex
    }, (0, _mockWizardItems.mockWizardFormContents)(sub.contents.label1, sub.contents.label2));
  } else if (stepIndex === 2 && subStepIndex === 0) {
    // render mock summary
    return _react.default.createElement(_patternflyReact.Wizard.Contents, {
      key: subStepIndex,
      stepIndex: stepIndex,
      subStepIndex: subStepIndex,
      activeStepIndex: activeStepIndex,
      activeSubStepIndex: activeSubStepIndex
    }, _react.default.createElement(_mockWizardReviewStepsManager.default, {
      steps: wizardSteps
    }));
  } else if (stepIndex === 2 && subStepIndex === 1) {
    // render mock progress
    return _react.default.createElement(_patternflyReact.Wizard.Contents, {
      key: subStepIndex,
      stepIndex: stepIndex,
      subStepIndex: subStepIndex,
      activeStepIndex: activeStepIndex,
      activeSubStepIndex: activeSubStepIndex
    }, _react.default.createElement(_mockWizardDeployContents.default, {
      active: stepIndex === activeStepIndex && subStepIndex === activeSubStepIndex
    }));
  }

  return null;
}));

exports.renderWizardContents = renderWizardContents;