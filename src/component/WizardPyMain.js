import React from "react";
import { Row, Col } from 'patternfly-react';
import WizardForm2 from './WizardForm2';
import { mockWizardItems } from './mockWizardItems';
import "../index.less";
export default class WizardPyMain extends React.Component {


  render() {


    return (
        <div>
        <Row>
          <Col sm={12}>
            <WizardForm2 steps={mockWizardItems} />
          </Col>
        </Row>
        </div>

    );
  }
}
