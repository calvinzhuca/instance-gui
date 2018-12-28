import React from "react";
import { Row, Col } from 'patternfly-react';


import MigrationPlans from './MigrationPlans';


export default class MainPage extends React.Component {


  render() {


    return (
        <div>


        <Row>
          <Col sm={12}>
            <MigrationPlans/>
          </Col>
        </Row>
        </div>

    );
  }
}
