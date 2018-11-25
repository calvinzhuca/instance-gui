

import React from 'react';

import { Button } from "patternfly-react";
import { Icon } from "patternfly-react";
import { Wizard } from "patternfly-react";



import { PfWizardCreatePlanItems } from './PfWizardCreatePlanItems';
import PfWizardBase from './PfWizardBase';
import { renderWizardSteps, renderSidebarItems, renderWizardContents } from './PfWizardRenderers';


export default class PfWizardForm extends PfWizardBase {


  close = () => {
    this.setState({ showModal: false });
  };
  render() {
    const { showModal, activeStepIndex, activeSubStepIndex } = this.state;
    console.log('showModal: ' + showModal);
    console.log('activeStepIndex: ' + activeStepIndex);
    console.log('activeSubStepIndex: ' + activeSubStepIndex);

    return (
      <div>


        <Wizard show={showModal} onHide={this.close}>
          <Wizard.Header onClose={this.close} title="Create Migration Plan Wizard" />
          <Wizard.Body>
            <Wizard.Steps
              steps={renderWizardSteps(PfWizardCreatePlanItems, activeStepIndex, activeSubStepIndex, this.onStepClick)}
            />
            <Wizard.Row>
              <Wizard.Sidebar
                items={renderSidebarItems(
                  PfWizardCreatePlanItems,
                  activeStepIndex,
                  activeSubStepIndex,
                  this.onSidebarItemClick
                )}
              />
              <Wizard.Main>{renderWizardContents(PfWizardCreatePlanItems, this.state, this.setInfo)}</Wizard.Main>
            </Wizard.Row>
          </Wizard.Body>
          <Wizard.Footer>
            <Button bsStyle="default" className="btn-cancel" onClick={this.close}>
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
                <Button bsStyle="primary" onClick={this.onNextButtonClick}>
                  Submit Plan
                  <Icon type="fa" name="angle-right" />
                </Button>
              )}
            {activeStepIndex === 3 &&
              activeSubStepIndex === 1 && (
                <Button bsStyle="primary" onClick={this.close}>
                  Close
                  <Icon type="fa" name="angle-right" />
                </Button>
              )}
          </Wizard.Footer>
        </Wizard>
      </div>
    );
  }
}
