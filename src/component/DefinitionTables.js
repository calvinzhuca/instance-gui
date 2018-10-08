import React, { Component } from 'react';

import DefinitionTable from "./DefinitionTable";

export default class DefinitionTables extends Component {


  render() {

    const sourceProcessDefinitions = [
      { name: 'Name', value: 'Evaluation' },
      { name: 'Version', value: '1' },
      { name: 'Project/Container ID', value: 'evaluation_1.0.0-SNAPSHOT' },
    ];

    const targetProcessDefinitions = [
      { name: 'Name', value: 'Evaluation' },
      { name: 'Version', value: '2' },
      { name: 'Project/Container ID', value: 'evaluation_2.0.0-SNAPSHOT' },
    ];


    return (
      <div>
        <table border="1" cellPadding="1">
          <tbody>
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
