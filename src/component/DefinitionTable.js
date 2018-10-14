import React, { Component } from 'react';


import DefinitionRow from "./DefinitionRow";

export default class DefinitionTable extends Component {
  render() {

    const rows = [];

    this.props.definitions.forEach((definition) => {
      rows.push(
        <DefinitionRow
          definition={definition}
          key={definition.name}
        />
      );
    });

    return (
      <div>

      <table border="1" cellPadding="1">
        <thead>
          <tr>
            <th colspan="2" >{this.props.tableHeader}</th>

          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
      </div>
    );
  }
}
