

import React from 'react';

import { Button } from "patternfly-react";
import { Icon } from "patternfly-react";
import { Wizard } from "patternfly-react";



import { mockWizardItems } from './mockWizardItems';
import MockWizardBase from './mockWizardBase';
import { renderWizardSteps, renderSidebarItems, renderWizardContents } from './mockWizardRenderers';


export default class WizardForm2 extends MockWizardBase {

  constructor(props) {
    super(props);
    console.log('here in WizardForm2');
    this.state = {
      activeStepIndex: 0,
      activeSubStepIndex: 0,
      showModal: true
    };
  }

  open = () => {
    this.setState({ showModal: true });
  };
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
              steps={renderWizardSteps(mockWizardItems, activeStepIndex, activeSubStepIndex, this.onStepClick)}
            />
            <Wizard.Row>
              <Wizard.Sidebar
                items={renderSidebarItems(
                  mockWizardItems,
                  activeStepIndex,
                  activeSubStepIndex,
                  this.onSidebarItemClick
                )}
              />
              <Wizard.Main>{renderWizardContents(mockWizardItems, activeStepIndex, activeSubStepIndex)}</Wizard.Main>
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
                  Deploy
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
