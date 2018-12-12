import React from 'react';

import {Wizard} from "patternfly-react"

import { WizardFormContentsPlanName } from './PfWizardCreatePlanItems';
import PfWizardSubmitPlan from './PfWizardSubmitPlan';
import PageMapping from "./PageMapping";
import PageDefinition from "./PageDefinition";
import PagePlanName from "./PagePlanName";
import PageReview from "./PageReview";

export const renderWizardSteps = (wizardSteps, activeStepIndex, activeSubStepIndex, onStepClick) => {
  const activeStep = wizardSteps[activeStepIndex];
  const activeSubStep = activeStep.subSteps[activeSubStepIndex];

  return wizardSteps.map((step, stepIndex) => (
    <Wizard.Step
      key={stepIndex}
      stepIndex={stepIndex}
      step={step.step}
      label={step.label}
      title={step.title}
      activeStep={activeStep && activeStep.step}
      onClick={onStepClick}
    >
      {step.subSteps.map((sub, subStepIndex) => (
        <Wizard.SubStep
          key={subStepIndex}
          subStep={sub.subStep}
//          title={sub.title}
          activeSubStep={activeSubStep && activeSubStep.subStep}
        />
      ))}
    </Wizard.Step>
  ));
};



export const renderCreatePlanWizardContents = (wizardSteps, state, setInfo) => {
  const { activeStepIndex, activeSubStepIndex, sourceInfo, targetInfo, migrationPlanJsonStr} = state;
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
            <PageReview migrationPlanJsonStr={migrationPlanJsonStr}/>
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



export const renderExecuteMigrationWizardContents = (wizardSteps, state, setInfo) => {
  const { activeStepIndex, activeSubStepIndex, sourceInfo, targetInfo, migrationPlanJsonStr} = state;
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
