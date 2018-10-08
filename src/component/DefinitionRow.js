import React, { Component } from 'react';

export default class DefinitionRow extends Component {
  render() {

    return (
      <tr>
        <td>{this.props.definition.name}</td>
        <td>{this.props.definition.value}</td>
      </tr>
    );
  }
}
