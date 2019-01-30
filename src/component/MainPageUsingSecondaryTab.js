import React, { Component } from 'react';
import classNames from 'classnames';

import { TabContainer, Nav, NavItem, TabPane, TabContent } from "patternfly-react";

import MigrationPlans from './MigrationPlans';
import MigrationResults from './MigrationResults';

export default class MainPageUsingSecondaryTab extends Component {


 onSelect = () =>{
     console.log('onSelect');
 }

  render() {
      const bsClass = classNames('nav nav-tabs nav-tabs-pf', {
        'nav-justified': true
      });

    return (
        <div>
        <TabContainer id="secondary-tabs" defaultActiveKey={1}>
          <div>

            <TabContent animation>
              <TabPane eventKey={1}>
                <TabContainer id="secondary-tabs-1" defaultActiveKey={1.1}>
                  <div>
                    <Nav bsClass={bsClass} onSelect={this.onSelect}>
                      <NavItem eventKey={1.1}>Migration Plans</NavItem>
                      <NavItem eventKey={1.2}>Migrations</NavItem>
                    </Nav>
                    <TabContent animation>
                      <TabPane eventKey={1.1}>
                            <MigrationPlans/>
                      </TabPane>
                      <TabPane eventKey={1.2}>
                            <MigrationResults/>
                      </TabPane>
                    </TabContent>
                  </div>
                </TabContainer>
              </TabPane>
            </TabContent>
          </div>
        </TabContainer>
        </div>



    );
  }
}
