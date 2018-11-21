"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _patternflyReact = require("patternfly-react");

var _mockWizardItems = require("./mockWizardItems");

var _mockWizardBase = _interopRequireDefault(require("./mockWizardBase"));

var _mockWizardRenderers = require("./mockWizardRenderers");

require("../index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class WizardForm2 extends _mockWizardBase.default {
  constructor(props) {
    super(props);

    _defineProperty(this, "open", () => {
      this.setState({
        showModal: true
      });
    });

    _defineProperty(this, "close", () => {
      this.setState({
        showModal: false
      });
    });

    console.log('here in WizardForm2');
    this.state = {
      activeStepIndex: 0,
      activeSubStepIndex: 0,
      showModal: true
    };
  }

  render() {
    const {
      showModal,
      activeStepIndex,
      activeSubStepIndex
    } = this.state;
    console.log('showModal: ' + showModal);
    console.log('activeStepIndex: ' + activeStepIndex);
    console.log('activeSubStepIndex: ' + activeSubStepIndex);
    return _react.default.createElement("div", null, _react.default.createElement(_patternflyReact.Wizard, {
      show: showModal,
      onHide: this.close
    }, _react.default.createElement(_patternflyReact.Wizard.Header, {
      onClose: this.close,
      title: "Wizard Title"
    }), _react.default.createElement(_patternflyReact.Wizard.Body, null, _react.default.createElement(_patternflyReact.Wizard.Steps, {
      steps: (0, _mockWizardRenderers.renderWizardSteps)(_mockWizardItems.mockWizardItems, activeStepIndex, activeSubStepIndex, this.onStepClick)
    }), _react.default.createElement(_patternflyReact.Wizard.Row, null, _react.default.createElement(_patternflyReact.Wizard.Sidebar, {
      items: (0, _mockWizardRenderers.renderSidebarItems)(_mockWizardItems.mockWizardItems, activeStepIndex, activeSubStepIndex, this.onSidebarItemClick)
    }), _react.default.createElement(_patternflyReact.Wizard.Main, null, (0, _mockWizardRenderers.renderWizardContents)(_mockWizardItems.mockWizardItems, activeStepIndex, activeSubStepIndex)))), _react.default.createElement(_patternflyReact.Wizard.Footer, null, _react.default.createElement(_patternflyReact.Button, {
      bsStyle: "default",
      className: "btn-cancel",
      onClick: this.close
    }, "Cancel"), _react.default.createElement(_patternflyReact.Button, {
      bsStyle: "default",
      disabled: activeStepIndex === 0 && activeSubStepIndex === 0,
      onClick: this.onBackButtonClick
    }, _react.default.createElement(_patternflyReact.Icon, {
      type: "fa",
      name: "angle-left"
    }), "Back"), (activeStepIndex === 0 || activeStepIndex === 1) && _react.default.createElement(_patternflyReact.Button, {
      bsStyle: "primary",
      onClick: this.onNextButtonClick
    }, "Next", _react.default.createElement(_patternflyReact.Icon, {
      type: "fa",
      name: "angle-right"
    })), activeStepIndex === 2 && activeSubStepIndex === 0 && _react.default.createElement(_patternflyReact.Button, {
      bsStyle: "primary",
      onClick: this.onNextButtonClick
    }, "Deploy", _react.default.createElement(_patternflyReact.Icon, {
      type: "fa",
      name: "angle-right"
    })), activeStepIndex === 2 && activeSubStepIndex === 1 && _react.default.createElement(_patternflyReact.Button, {
      bsStyle: "primary",
      onClick: this.close
    }, "Close", _react.default.createElement(_patternflyReact.Icon, {
      type: "fa",
      name: "angle-right"
    })))));
  }

}

exports.default = WizardForm2;