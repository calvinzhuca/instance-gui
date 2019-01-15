import React from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';
import { MockupData_planList, MockupData_runningInstances, MockupData_PIM_response } from './MockupData';
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
      addPlanResponseJsonStr:'',
      useMockData:true
    };
  }

    componentDidMount(){
        this.retrieveAllPlans();
    }

  retrieveAllPlans = () => {

      if (this.state.useMockData){
          console.log('retrieveAllPlans useMockData: ');
          const plans = MockupData_planList;
          this.setState({plans,
              filteredPlans: plans
           });

      }else{
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

      if (this.state.useMockData){
          this.retrieveAllPlans();
          this.hideDeleteDialog();
      }else{
          //need to create a temp variable "self" to store this, so I can invoke this inside axios call
          const self = this;
          const serviceUrl = 'http://localhost:8280/plans/' + this.state.deletePlanId;
          console.log('delete url: ' + serviceUrl);

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
  }



  // addPlan need to be in the parent because it's shared between WizardAddPlan and Import Plan pop-up
  addPlan = (plan) => {
      if (this.state.useMockData){
          this.setState({
              addPlanResponseJsonStr:JSON.stringify(MockupData_PIM_response, null, 2),
            })
          this.retrieveAllPlans();
      }else{

          //console.log('addPlan is invoked');
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
                addPlanResponseJsonStr:JSON.stringify(response.data, null, 2),
              })
            self.retrieveAllPlans();
          })
          .catch(function (error) {
            console.log('addPlan error: ' + error );
          });
          //window.alert("submitted this plan" + plan);
      }


  }


  editPlan = (plan, planId) => {
      if (this.state.useMockData){
          this.retrieveAllPlans();
      }else{
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
      }

  }

  openMigrationWizard = (rowData) =>{
      if (this.state.useMockData){
          const instances = MockupData_runningInstances;
          //console.log('running instances: ' + JSON.stringify(instances));

            this.setState({
                runningInstances: instances,
                showMigrationWizard: true,
                planId:rowData.id
            });
            this.refs.WizardExecuteMigrationChild.resetWizardStates();
      }else{
          axios.get('http://localhost:8080/backend/instances', {
              params: {
                  containerId: rowData.source_container_id,
              }
          }).then (res => {
              const instances = res.data;
              //console.log('running instances: ' + JSON.stringify(instances));

                this.setState({
                    runningInstances: instances,
                    showMigrationWizard: true,
                    planId:rowData.id
                });
                this.refs.WizardExecuteMigrationChild.resetWizardStates();
        });
      }

  }

}
