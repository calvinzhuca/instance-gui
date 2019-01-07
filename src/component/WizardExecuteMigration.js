import React, { Component } from 'react';

import { Wizard } from "patternfly-react";
import { Button } from "patternfly-react";
import { Icon } from "patternfly-react";

import WizardBase from './WizardBase';

import { renderWizardSteps } from './PfWizardRenderers';
import { ExecuteMigrationItems } from './WizardItems';
import PageMigrationRunningInstances from "./PageMigrationRunningInstances";
import PageMigrationScheduler from "./PageMigrationScheduler";
import PageReview from "./PageReview";
import PfWizardSubmitPlan from './PfWizardSubmitPlan';

export default class WizardExecuteMigration extends WizardBase {

    constructor(props) {
      super(props);
      this.state = {
          activeStepIndex:0,
          activeSubStepIndex:0,
          jsonStr:'',
          runningInstanceIds:'',
          scheduleStartTime:'',
          executionPlanJsonStr:'',
          callbackUrl:''
      };
    }

    //using Ref, this is called from parent before open the wizard to reset all the states.
    resetWizardStates(){
        this.setState({
            activeStepIndex:0,
            activeSubStepIndex:0,
            jsonStr:'',
            runningInstanceIds:'',
            scheduleStartTime:'',
            executionPlanJsonStr:'',
            callbackUrl:''
          })
    }



    convertFormDataToJson(){
        //console.log('ExecuteMigration convertFormDataToJson is triggered. ');
        const execution={
            typs:'async',
            scheduled_start_time: this.state.scheduleStartTime,
            callback_url:this.state.callbackUrl
        }

        const formData = {
            planId: this.props.planId,
            process_instance_ids: '[' + this.state.runningInstanceIds + ']',
            execution:execution
        };

        var jsonStr = JSON.stringify(formData, null, 2);

        //Remove the " " from running instances because it's not a string
        if (jsonStr !== null && jsonStr !== '' ){
            //replace "[ to [
            jsonStr = jsonStr.replace('\"\[', '\[');

            //replace ]" to ]
            jsonStr = jsonStr.replace('\]\"', '\]');
        }

        this.setState({migrationPlanJsonStr: jsonStr});

    }

    setRunngingInstancesIds =(ids) =>{
        //console.log('set RunngingInstancesIds' + ids);
        this.setState({
            runningInstanceIds:ids,
          })
    }

    setScheduleStartTime =(startTime) =>{
        //console.log('setScheduleStartTime' + startTime);
        this.setState({
            scheduleStartTime:startTime,
          })
    }

    setCallbackUrl =(url) => {

        this.setState({
            callbackUrl:url
          })
        //console.log('this.state.callbackUrl: ' + this.state.callbackUrl);
    }

  render() {
      const { activeStepIndex, activeSubStepIndex } = this.state;

      const renderExecuteMigrationWizardContents = (wizardSteps, state, setInfo) => {
        const { activeStepIndex, activeSubStepIndex, migrationPlanJsonStr} = state;
        return wizardSteps.map((step, stepIndex) =>
          step.subSteps.map((sub, subStepIndex) => {
            if (stepIndex === 0 ) {
              // render steps 1
              return (
                <Wizard.Contents
                  key={subStepIndex}
                  stepIndex={stepIndex}
                  subStepIndex={subStepIndex}
                  activeStepIndex={activeStepIndex}
                  activeSubStepIndex={activeSubStepIndex}
                >
                  <PageMigrationRunningInstances
                    runningInstances={this.props.runningInstances}
                    setRunngingInstancesIds={this.setRunngingInstancesIds}
                    />
                </Wizard.Contents>
              );
            } else if (stepIndex === 1 ) {
                    // render steps 2
                    return (
                      <Wizard.Contents
                        key={subStepIndex}
                        stepIndex={stepIndex}
                        subStepIndex={subStepIndex}
                        activeStepIndex={activeStepIndex}
                        activeSubStepIndex={activeSubStepIndex}
                      >
                      <PageMigrationScheduler
                        setCallbackUrl={this.setCallbackUrl}
                        setScheduleStartTime={this.setScheduleStartTime}
                      />
                      </Wizard.Contents>
                    );
            } else if (stepIndex === 2 && subStepIndex === 0) {
              // render review
              return (
                <Wizard.Contents
                  key={subStepIndex}
                  stepIndex={stepIndex}
                  subStepIndex={subStepIndex}
                  activeStepIndex={activeStepIndex}
                  activeSubStepIndex={activeSubStepIndex}
                >
                  <PageReview migrationPlanJsonStr={migrationPlanJsonStr}/>
                </Wizard.Contents>
              );
          } else if (stepIndex === 2 && subStepIndex === 1) {
              // render mock progress
              return (
                <Wizard.Contents
                  key={subStepIndex}
                  stepIndex={stepIndex}
                  subStepIndex={subStepIndex}
                  activeStepIndex={activeStepIndex}
                  activeSubStepIndex={activeSubStepIndex}
                >
                  <PfWizardSubmitPlan active={stepIndex === activeStepIndex && subStepIndex === activeSubStepIndex} />
                </Wizard.Contents>
              );
            }
            return null;
          })
        );
      };


    return (
        <div>

                  <form className="form-horizontal" name="form_migration">
                    <Wizard show={this.props.showMigrationWizard} onHide={this.props.closeMigrationWizard}>
                      <Wizard.Header onClose={this.props.closeMigrationWizard} title="Execute Migration Plan Wizard" />
                      <Wizard.Body>
                        <Wizard.Steps
                          steps={renderWizardSteps(ExecuteMigrationItems, activeStepIndex, activeSubStepIndex, this.onStepClick)}
                        />
                        <Wizard.Row>
                          <Wizard.Main>{renderExecuteMigrationWizardContents(ExecuteMigrationItems, this.state, this.setInfo)}</Wizard.Main>
                        </Wizard.Row>
                      </Wizard.Body>
                      <Wizard.Footer>
                        <Button bsStyle="default" className="btn-cancel" onClick={this.props.closeMigrationWizard}>
                          Cancel
                        </Button>
                        <Button
                          bsStyle="default"
                          disabled={activeStepIndex === 0 && activeSubStepIndex === 0}
                          onClick={this.onBackButtonClick}
                        >
                          <Icon type="fa" name="angle-left" />
                          Back
                        </Button>
                        {(activeStepIndex === 0 || activeStepIndex === 1 ) && (
                          <Button
                            bsStyle="primary"
                            disabled={this.state.runningInstanceIds.trim() == ''}
                            onClick={this.onNextButtonClick}
                          >
                            Next
                            <Icon type="fa" name="angle-right" />
                          </Button>
                        )}
                        {activeStepIndex === 2 &&
                          activeSubStepIndex === 0 && (
                            <Button bsStyle="primary" onClick={this.onSubmitMigrationPlan}>
                              Execute Plan
                              <Icon type="fa" name="angle-right" />
                            </Button>
                          )}
                        {activeStepIndex === 2 &&
                          activeSubStepIndex === 1 && (
                            <Button bsStyle="primary" onClick={this.props.closeMigrationWizard}>
                              Close
                              <Icon type="fa" name="angle-right" />
                            </Button>
                          )}
                      </Wizard.Footer>
                    </Wizard>
                </form>

            </div>



    );
  }
}
