import React from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

export default class PfWizardBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStepIndex: props.initialStepIndex || 0,
      activeSubStepIndex: props.initialSubStepIndex || 0,
      showModal: true,
      sourceInfo: '',
      targetInfo: '',
      name:'',
      description:'',
      source_container_id:'',
      target_container_id:'',
      target_process_id:'',
      mappings:'',
      migrationPlanJsonStr:''
    };
  }

  setInfo = (sourceInfo, targetInfo) => {

      this.setState({
          sourceInfo:sourceInfo,
          targetInfo:targetInfo
      });
  }


  onSubmit = () => {
      var plan = this.state.migrationPlanJsonStr;
      console.log('!!!!!!!!!!!!!!!!!!!submit plan' + plan);

      //step 1, replace all \" to "
      plan = plan.replace(/\\\"/g, '\"');
      console.log('!!!!!!!!!!!!!!!!!!!submit plan1: ' + plan);
      //step 2, replace "{ to {
      plan = plan.replace('\"\{', '\{');
      console.log('plan2: ' + plan );
      //step3, replace }" to }
      plan = plan.replace('\}\"', '\}');

      const serviceUrl = 'http://localhost:8280/plans';
      axios.post(serviceUrl, plan, {headers: {
                "Content-Type": "application/json"}
      })
      .then(function (response) {
        console.log('response: ' + response.data );
      })
      .catch(function (error) {
        console.log('error: ' + error );
      });
      //window.alert("submitted this plan" + plan);

    this.onNextButtonClick();
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
    this.convertFormDataToJson();
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
