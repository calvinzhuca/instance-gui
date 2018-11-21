

import React from 'react';

import { Button } from "patternfly-react";
import { Icon } from "patternfly-react";
import { Wizard } from "patternfly-react";



import { CreatePlanWizardItems } from './CreatePlanWizardItems';
import PfWizardBase from './PfWizardBase';
import { renderWizardSteps, renderSidebarItems, renderWizardContents } from './PfWizardRenderers';


export default class PfWizardForm extends PfWizardBase {

  constructor(props) {
    super(props);
    console.log('here in WizardForm2');
    this.state = {
      activeStepIndex: 0,
      activeSubStepIndex: 0,
      showModal: true
    };
  }


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
          <Wizard.Header onClose={this.close} title="Wizard Title" />
          <Wizard.Body>
            <Wizard.Steps
              steps={renderWizardSteps(CreatePlanWizardItems, activeStepIndex, activeSubStepIndex, this.onStepClick)}
            />
            <Wizard.Row>
              <Wizard.Sidebar
                items={renderSidebarItems(
                  CreatePlanWizardItems,
                  activeStepIndex,
                  activeSubStepIndex,
                  this.onSidebarItemClick
                )}
              />
              <Wizard.Main>{renderWizardContents(CreatePlanWizardItems, activeStepIndex, activeSubStepIndex)}</Wizard.Main>
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
            {(activeStepIndex === 0 || activeStepIndex === 1) && (
              <Button bsStyle="primary" onClick={this.onNextButtonClick}>
                Next
                <Icon type="fa" name="angle-right" />
              </Button>
            )}
            {activeStepIndex === 2 &&
              activeSubStepIndex === 0 && (
                <Button bsStyle="primary" onClick={this.onNextButtonClick}>
                  Submit Plan
                  <Icon type="fa" name="angle-right" />
                </Button>
              )}
            {activeStepIndex === 2 &&
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
