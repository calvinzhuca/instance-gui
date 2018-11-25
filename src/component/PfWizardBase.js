import React from 'react';
import PropTypes from 'prop-types';

export default class PfWizardBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStepIndex: props.initialStepIndex || 0,
      activeSubStepIndex: props.initialSubStepIndex || 0,
      showModal: true,
      sourceInfo: '',
      targetInfo: ''
    };
  }

  setInfo = (sourceInfo, targetInfo) => {
      console.log('setInfo sourceInfo ' + sourceInfo.processId + ' targetInfo ' + targetInfo.processId);
      this.setState({
          sourceInfo:sourceInfo,
          targetInfo:targetInfo
      });
  }

  onBackButtonClick = () => {
    const { steps } = this.props;
    const { activeStepIndex, activeSubStepIndex } = this.state;

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
  };
  onNextButtonClick = () => {
    const { steps } = this.props;
    const { activeStepIndex, activeSubStepIndex } = this.state;
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
  };
  onSidebarItemClick = (stepIndex, subStepIndex) => {
    this.setState({
      activeStepIndex: stepIndex,
      activeSubStepIndex: subStepIndex
    });
  };
  onStepClick = stepIndex => {
    if (stepIndex === this.state.activeStepIndex) {
      return;
    }
    this.setState({
      activeStepIndex: stepIndex,
      activeSubStepIndex: 0
    });
  };
  render() {
    return false;
  }
}
PfWizardBase.propTypes = {
  /** Initial step index */
  initialStepIndex: PropTypes.number,
  /** Initial sub step index */
  initialSubStepIndex: PropTypes.number,
  /** Wizard steps */
  steps: PropTypes.array.isRequired
};
PfWizardBase.defaultProps = {
  initialStepIndex: 0,
  initialSubStepIndex: 0
};
