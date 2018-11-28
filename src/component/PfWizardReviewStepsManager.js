import React from 'react';
import PropTypes from 'prop-types';
import {Wizard} from "patternfly-react"

export default class PfWizardReviewStepsManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: [...props.steps]
    };
  }
  stepClicked = (e, stepIndex) => {
    e.preventDefault();
    const updated = [...this.state.steps];
    updated[stepIndex].collapsed = !updated[stepIndex].collapsed;
    this.setState({
      steps: updated
    });
  };
  subStepClicked = (e, stepIndex, subStepIndex) => {
    e.preventDefault();
    const updated = [...this.state.steps];
    updated[stepIndex].subSteps[subStepIndex].collapsed = !updated[stepIndex].subSteps[subStepIndex].collapsed;
    this.setState({
      steps: updated
    });
  };
  render() {
    const { steps } = this.state;
    return (
        <div>review Json here </div>
    );
  }
}
PfWizardReviewStepsManager.propTypes = {
  /** Wizard steps */
  steps: PropTypes.array.isRequired
};
