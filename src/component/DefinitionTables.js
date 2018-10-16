import React, { Component } from 'react';
import { Field } from 'react-final-form'

import * as constants from './WizardConstants';
import DefinitionTable from "./DefinitionTable";

export default class DefinitionTables extends Component {
    constructor (props) {
      super(props);
      this.state = {testStr: '11111111111111'
                  };

    }

  render() {

    const sourceProcessDefinitions = [
      { name: 'Name', value: 'Evaluation' },
      { name: 'Version', value: '1' },
      { name: 'Container ID', value: 'evaluation_1.0.0-SNAPSHOT' },
    ];

    const targetProcessDefinitions = [
      { name: 'Name', value: 'Evaluation' },
      { name: 'Version', value: '2' },
      { name: 'Container ID', value: 'evaluation_2.0.0-SNAPSHOT' },
    ];


    return (
      <div>
        <table border="0" cellPadding="1">
          <tbody>
            <tr>
              <td colSpan="2">
                  <div>
                    <label>Plan Name: </label>
                    <Field
                      name="name"
                      component="input"
                      type="text"
                      placeholder="no more than 20 characters"
                      validate={constants.required}
                    />
                    <constants.Error name="name"/>
                  </div>
                  <div>
                    <label>Description: </label>
                    <Field
                      name="description"
                      component="input"
                      type="text"
                      placeholder="no more than 1000 characters"
                      validate={constants.required}
                    />
                    <constants.Error name="description"/>
                  </div>


              </td>
            </tr>
            <tr>
              <td><DefinitionTable definitions={sourceProcessDefinitions} tableHeader="Source Process Definition" /></td>
              <td><DefinitionTable definitions={targetProcessDefinitions} tableHeader="Target Process Definition"/></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
