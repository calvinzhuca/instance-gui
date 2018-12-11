import React from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

export default class MigrationPlansBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStepIndex: props.initialStepIndex || 0,
      activeSubStepIndex: props.initialSubStepIndex || 0,
      showPlanWizard: false,
      sourceInfo: '',
      targetInfo: '',
      name:'',
      description:'',
      source_container_id:'',
      target_container_id:'',
      target_process_id:'',
      mappings:'',
      migrationPlanJsonStr:'',
      plans:[],
      filteredPlans:[],
      showDeleteConfirmation:false,
      deletePlanId:''
    };
    console.log('MigrationPlansBase constructor '  );
    this.retrieveAllPlans();

  }



  retrieveAllPlans = () => {
      axios.get('http://localhost:8280/plans', {
      }).then (res => {
          const plans = res.data;
          this.setState({ plans,
              filteredPlans: plans
           });
          console.log('retrieveAllPlans is done ');
    });
  }

  setInfo = (sourceInfo, targetInfo) => {

      this.setState({
          sourceInfo:sourceInfo,
          targetInfo:targetInfo
      });
  }

  showDeleteDialog = (id) =>{
      this.setState({
          showDeleteConfirmation: true,
          deletePlanId: id
      });
      console.log('deletePlanId ' + id);
  }

  hideDeleteDialog = () =>{
      this.setState({
          showDeleteConfirmation: false
      });
  }

  deletePlan = () => {
      console.log('confirmed deletion id: ' + this.state.deletePlanId);

      const serviceUrl = 'http://localhost:8280/plans/' + this.state.deletePlanId;
      console.log('delete url: ' + serviceUrl);
      //need to create a temp variable "self" to store this, so I can invoke this inside axios call
      const self = this;
      axios.delete(serviceUrl,  {headers: {
                "Content-Type": "application/json"}
      })
      .then(function (response) {
        console.log('delete response: ' + response.data );
        self.retrieveAllPlans();
        self.hideDeleteDialog();
      })
      .catch(function (error) {
        console.log('error: ' + error );
      });

  }


  onSubmit = () => {
      var plan = this.state.migrationPlanJsonStr;
      this.addPlan(plan);
      this.onNextButtonClick();
  }

  addPlan = (plan) => {
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

      //need to create a temp variable "self" to store this, so I can invoke this inside axios call
      const self = this;

      const serviceUrl = 'http://localhost:8280/plans';
      axios.post(serviceUrl, plan, {headers: {
                "Content-Type": "application/json"}
      })
      .then(function (response) {
        console.log('addPlan response: ' + response.data );
        self.retrieveAllPlans();
      })
      .catch(function (error) {
        console.log('addPlan error: ' + error );
      });
      //window.alert("submitted this plan" + plan);

  }


  editPlan = (plan, planId) => {
      console.log('editPlan planId: ' + planId );
      //need to create a temp variable "self" to store this, so I can invoke this inside axios call
      const self = this;

      const serviceUrl = 'http://localhost:8280/plans/' + planId;
      axios.put(serviceUrl, plan, {headers: {
                "Content-Type": "application/json"}
      })
      .then(function (response) {
        console.log('editPlan response: ' + response.data );

        self.retrieveAllPlans();

      })
      .catch(function (error) {
        console.log('editPlan error: ' + error );
      });
      //window.alert("submitted this plan" + plan);

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
