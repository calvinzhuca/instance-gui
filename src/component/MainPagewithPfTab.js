import React, { Component } from 'react';
import classNames from 'classnames';

import { TabContainer, Nav, NavItem, TabPane, TabContent } from "patternfly-react";

import MigrationPlans from './MigrationPlans';
import MigrationDefinitions from './tabMigration/MigrationDefinitions';

export default class MainPagewithPfTab extends Component {


 onSelect = () =>{
     console.log('onSelect');
 }

  render() {
      const bsClass = classNames('nav nav-tabs nav-tabs-pf', {
        'nav-justified': true
      });

    return (
        <div>
          <TabContainer id="tabs-with-dropdown-pf" defaultActiveKey="first">
            <div>
              <Nav bsClass={bsClass} onSelect={this.onSelect}>
                <NavItem eventKey="first">Migration Plans</NavItem>
                <NavItem eventKey="second">Migrations</NavItem>
              </Nav>

              <TabContent animation>
                <TabPane eventKey="first">
                  <MigrationPlans />
                </TabPane>
                <TabPane eventKey="second">
                  <MigrationDefinitions />
                </TabPane>
              </TabContent>
            </div>
          </TabContainer>
        </div>




    );
  }
}
