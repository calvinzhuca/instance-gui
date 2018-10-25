import React, { Component } from 'react';
import { Field } from 'react-final-form';


import * as constants from './WizardConstants';
import DefinitionTable from "./DefinitionTable";
import SearchInputTable from "./SearchInputTable";

export default class DefinitionTables extends Component {
    constructor (props) {
      super(props);
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
              <td>
                    <SearchInputTable tableHeader="Source Process Definition"
                        onClick={this.props.retriveSourceInfo}
                    />
              </td>
              <td>
                    <SearchInputTable tableHeader="Target Process Definition"
                        onClick={this.props.retriveTargetInfo}
                    />
              </td>
            </tr>
            <tr>
              <td>Source: </td>
              <td>{this.props.sourceInfo.processId}</td>
            </tr>
            <tr>
              <td>Target: </td>
              <td>{this.props.targetInfo.processId}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
