import React, { Component } from 'react';
import classNames from 'classnames';

import { TabContainer, Nav, NavItem, TabPane, TabContent } from "patternfly-react";
import { DropdownButton, MenuItem, SplitButton, select } from "patternfly-react";

import MigrationPlans from './tabMigrationPlan/MigrationPlans';
import MigrationDefinitions from './tabMigration/MigrationDefinitions';
import {KIE_SERVER_ID} from './common/PimConstants';
export default class MainPagewithPfTab extends Component {


 onSelect = () =>{
     console.log('onSelect');
 }

 createMenuItems() {
     let menuItems = [];
      menuItems.push(<MenuItem eventKey={1} >{KIE_SERVER_ID}</MenuItem>);
      return menuItems;
 }

  render() {
      const bsClass = classNames('nav nav-tabs nav-tabs-pf', {
        'nav-justified': false
      });

    return (
     <div class="">
         <div class="row" >
                <div class="col-xs-9">
                    <h1>Process Instance Migration</h1>
                </div>
                <div class="col-xs-3">
                    <br/>
                    <div class="pull-right">
                      <DropdownButton
                          title={'KIE Server Name'}
                          >
                          {this.createMenuItems()}
                      </DropdownButton>
                    </div>
                </div>
         </div>
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
