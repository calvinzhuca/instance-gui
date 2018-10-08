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
      <table >
        <thead>
          <tr>
            <th>{this.props.tableHeader}</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}
