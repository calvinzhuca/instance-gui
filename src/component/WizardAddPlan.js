import React, { Component } from 'react';

import { Wizard } from "patternfly-react";
import { Button } from "patternfly-react";
import { Icon } from "patternfly-react";

import WizardBase from './WizardBase';

import { renderWizardSteps } from './PfWizardRenderers';
import { AddPlanItems } from './WizardItems';
import PageMapping from "./PageMapping";
import PageDefinition from "./PageDefinition";
import PagePlanName from "./PagePlanName";
import PageReview from "./PageReview";
import PfWizardSubmitPlan from './PfWizardSubmitPlan';

export default class WizardAddPlan extends WizardBase {

    constructor(props) {
      super(props);
      this.state = {
          activeStepIndex:0,
          activeSubStepIndex:0,
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

    //using Ref, this is called from parent before open the wizard to reset all the states.
    resetWizardStates(){
        this.setState({
            activeStepIndex:0,
            activeSubStepIndex:0,
            sourceInfo: '',
            targetInfo: '',
            name:'',
            description:'',
            source_container_id:'',
            target_container_id:'',
            target_process_id:'',
            mappings:'',
            migrationPlanJsonStr:''
        });
    }


    setInfo = (sourceInfo, targetInfo) => {

        this.setState({
            sourceInfo:sourceInfo,
            targetInfo:targetInfo
        });
    }


    handleAddPlanFormChange = (e) => {
        console.log('handleAddPlanFormChange');
        if (e.target.name == 'name'){
            this.setState({name: e.target.value});
        }else if (e.target.name == 'description'){
            this.setState({description: e.target.value});
        }else if (e.target.name == 'source_container_id'){
            this.setState({source_container_id: e.target.value});
        }else if (e.target.name == 'target_container_id'){
            this.setState({target_container_id: e.target.value});
        }else if (e.target.name == 'target_process_id'){
            this.setState({target_process_id: e.target.value});
        }else if (e.target.name == 'mappings'){
            this.setState({mappings: e.target.value});
        }
    }




    convertFormDataToJson(){
        console.log('AddPlan convertFormDataToJson is triggered. ');
      const formData = {
          name: this.state.name,
          description: this.state.description,
          source_container_id: this.state.source_container_id,
          target_container_id: this.state.target_container_id,
          target_process_id: this.state.target_process_id
      };

      if (this.state.mappings !== null && this.state.mappings !==''){
          formData.mappings = this.state.mappings;
      }

      const jsonStr = JSON.stringify(formData, null, 2);

      this.setState({migrationPlanJsonStr: jsonStr});

      //console.log("!!!!!!!!!!!!! dataContainer" + dataContainer.textContent);
    }


    onSubmitMigrationPlan = () => {
        console.log('!!!!!!!!!!!!!!!!!!!onSubmitMigrationPlan' + plan);
        var plan = this.state.migrationPlanJsonStr;
        //call the addPlan. addPlan need to be in the parent because it's shared between WizardAddPlan and Import Plan pop-up
        this.props.addPlan(plan);
        this.onNextButtonClick();
    }

  render() {
      const { activeStepIndex, activeSubStepIndex, sourceInfo, targetInfo, migrationPlanJsonStr} = this.state;

      const renderAddPlanWizardContents = (wizardSteps, state, setInfo) => {
//        const { activeStepIndex, activeSubStepIndex, sourceInfo, targetInfo, migrationPlanJsonStr} = this.state;
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
                  <PagePlanName />
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
                      <PageDefinition
                            sourceInfo={sourceInfo}
                            targetInfo={targetInfo}
                            setInfo={setInfo}
                      />
                      </Wizard.Contents>
                    );
            } else if (stepIndex === 2) {
                    // render steps 3
                    return (
                      <Wizard.Contents
                        key={subStepIndex}
                        stepIndex={stepIndex}
                        subStepIndex={subStepIndex}
                        activeStepIndex={activeStepIndex}
                        activeSubStepIndex={activeSubStepIndex}
                      >
                      <PageMapping
                            sourceInfo={sourceInfo} targetInfo={targetInfo}
                      />
                      </Wizard.Contents>
                    );
            } else if (stepIndex === 3 && subStepIndex === 0) {
              // render review
              return (
                <Wizard.Contents
                  key={subStepIndex}
                  stepIndex={stepIndex}
                  subStepIndex={subStepIndex}
                  activeStepIndex={activeStepIndex}
                  activeSubStepIndex={activeSubStepIndex}
                >
                  <PageReview inputJsonStr={migrationPlanJsonStr}/>
                </Wizard.Contents>
              );
            } else if (stepIndex === 3 && subStepIndex === 1) {
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

        <form className="form-horizontal" name="form_migration_plan" onChange={this.handleAddPlanFormChange}>
          <Wizard show={this.props.showPlanWizard} onHide={this.props.closeAddPlanWizard}>
            <Wizard.Header onClose={this.props.closeAddPlanWizard} title="Add Migration Plan Wizard" />
            <Wizard.Body>
              <Wizard.Steps
                steps={renderWizardSteps(AddPlanItems, activeStepIndex, activeSubStepIndex, this.onStepClick)}
              />
              <Wizard.Row>
                <Wizard.Main>{renderAddPlanWizardContents(AddPlanItems, this.state, this.setInfo)}</Wizard.Main>
              </Wizard.Row>
            </Wizard.Body>
            <Wizard.Footer>
              <Button bsStyle="default" className="btn-cancel" onClick={this.props.closeAddPlanWizard}>
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
              {(activeStepIndex === 0 || activeStepIndex === 1 || activeStepIndex === 2) && (
                <Button bsStyle="primary" onClick={this.onNextButtonClick}>
                  Next
                  <Icon type="fa" name="angle-right" />
                </Button>
              )}
              {activeStepIndex === 3 &&
                activeSubStepIndex === 0 && (
                  <Button bsStyle="primary" onClick={this.onSubmitMigrationPlan}>
                    Submit Plan
                    <Icon type="fa" name="angle-right" />
                  </Button>
                )}
              {activeStepIndex === 3 &&
                activeSubStepIndex === 1 && (
                  <Button bsStyle="primary" onClick={this.props.closeAddPlanWizard}>
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
