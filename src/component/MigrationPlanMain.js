import React from "react";
import { Row, Col } from 'patternfly-react';


import PfWizardAndPlanTable from './PfWizardAndPlanTable';
import { PfWizardCreatePlanItems } from './PfWizardCreatePlanItems';


export default class MigrationPlanMain extends React.Component {


  render() {


    return (
        <div>


        <Row>
          <Col sm={12}>
            <PfWizardAndPlanTable steps={PfWizardCreatePlanItems} />
          </Col>
        </Row>
        </div>

    );
  }
}
