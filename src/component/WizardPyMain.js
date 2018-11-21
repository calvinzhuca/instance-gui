import React from "react";
import { Row, Col } from 'patternfly-react';
import PfWizardForm from './PfWizardForm';
import { CreatePlanWizardItems } from './CreatePlanWizardItems';

export default class WizardPyMain extends React.Component {


  render() {


    return (
        <div>
        <Row>
          <Col sm={12}>
            <PfWizardForm steps={CreatePlanWizardItems} />
          </Col>
        </Row>
        </div>

    );
  }
}
