import React from "react";
import { Row, Col } from 'patternfly-react';
import PfWizardForm from './PfWizardForm';
import { PfWizardCreatePlanItems } from './PfWizardCreatePlanItems';

export default class WizardPyMain extends React.Component {


  render() {


    return (
        <div>
        <Row>
          <Col sm={12}>
            <PfWizardForm steps={PfWizardCreatePlanItems} />
          </Col>
        </Row>
        </div>

    );
  }
}
