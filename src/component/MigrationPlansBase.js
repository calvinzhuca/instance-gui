import React from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

export default class MigrationPlansBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plans:[],
      filteredPlans:[],
      showDeleteConfirmation:false,
      showMigrationWizard:false,
      showPlanWizard: false,
      deletePlanId:'',
      runningInstances:[],
      addPlanResponseJsonStr:''
    };

    this.retrieveAllPlans();

  }



  retrieveAllPlans = () => {
      console.log('retrieveAllPlans123')
      axios.get('http://localhost:8280/plans', {
      }).then (res => {
          const plans = res.data;
          //console.log('retrieveAllPlans ' + JSON.stringify(plans));
          this.setState({ plans,
              filteredPlans: plans
           });
          console.log('retrieveAllPlans is done ');
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
      //console.log('confirmed deletion id: ' + this.state.deletePlanId);

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



  // addPlan need to be in the parent because it's shared between WizardAddPlan and Import Plan pop-up
  addPlan = (plan) => {
      console.log('addPlan234');
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
        self.setState({
            addPlanResponseJsonStr:JSON.stringify(response.data),
          })
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



}
