import React from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

export default class MigrationPlansBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStepIndex: props.initialStepIndex || 0,
      activeSubStepIndex: props.initialSubStepIndex || 0,
      showModal: false,
      sourceInfo: '',
      targetInfo: '',
      name:'',
      description:'',
      source_container_id:'',
      target_container_id:'',
      target_process_id:'',
      mappings:'',
      migrationPlanJsonStr:'',
      plans:[]
    };
    this.retriveAllPlans();

  }

  retriveAllPlans(){
      axios.get('http://localhost:8280/plans', {
      }).then (res => {
          const plans = res.data;
          this.setState({ plans });
          console.log('retriveAllPlans ');
    });
  }

  setInfo = (sourceInfo, targetInfo) => {

      this.setState({
          sourceInfo:sourceInfo,
          targetInfo:targetInfo
      });
  }

  deletePlan = (id) => {
      if (window.confirm('Would you like to delete this plan?')) {
          console.log('confirmed deletion id: ' + id);

          const serviceUrl = 'http://localhost:8280/plans/' + id;
          console.log('delete url: ' + serviceUrl);
          //need to create a temp variable "self" to store this, so I can invoke this.retriveAllPlans() inside axios call 
          const self = this;
          axios.delete(serviceUrl,  {headers: {
                    "Content-Type": "application/json"}
          })
          .then(function (response) {
            console.log('response: ' + response.data );
            self.retriveAllPlans();
          })
          .catch(function (error) {
            console.log('error: ' + error );
          });



      }
  }

  onSubmit = () => {
      var plan = this.state.migrationPlanJsonStr;
      if (plan !== null && plan !== '' ){
          //console.log('!!!!!!!!!!!!!!!!!!!submit plan' + plan);

          //step 1, replace all \" to "
          plan = plan.replace(/\\\"/g, '\"');
          //console.log('!!!!!!!!!!!!!!!!!!!submit plan1: ' + plan);
          //step 2, replace "{ to {
          plan = plan.replace('\"\{', '\{');
          console.log('plan2: ' + plan );
          //step3, replace }" to }
          plan = plan.replace('\}\"', '\}');
      }

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
MigrationPlansBase.propTypes = {
  /** Initial step index */
  initialStepIndex: PropTypes.number,
  /** Initial sub step index */
  initialSubStepIndex: PropTypes.number,
  /** Wizard steps */
  steps: PropTypes.array.isRequired
};
MigrationPlansBase.defaultProps = {
  initialStepIndex: 0,
  initialSubStepIndex: 0
};
