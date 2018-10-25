import React, { Component } from 'react';


import DefinitionRow from "./DefinitionRow";

export default class SearchInputTable extends Component {
    constructor (props) {
      super(props);
      this.state = {
          processId: 'evaluation',
          groupId: 'evaluation',
          artifactId: 'evaluation',
          version: '1.0.0-SNAPSHOT',
      };

    }

    onclick(option) {
      console.log('!!!!!!!!!!!!!onclick processId' + this.state.processId);
      this.props.onClick(this.state.processId, this.state.groupId, this.state.artifactId, this.state.version);
    }

    handleProcessIdChange(event){
        this.setState({processId: event.target.value});
    }

    handleGroupIdChange(event){
        this.setState({groupId: event.target.value});
    }

    handleArtifactIdChange(event){
        this.setState({artifactId: event.target.value});
    }

    handleVersionChange(event){
        this.setState({version: event.target.value});
    }


  render() {

    return (
      <div>

      <table border="0" cellPadding="1">
        <thead>
          <tr>
            <th colSpan="2" >{this.props.tableHeader}</th>

          </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    Process ID
                </td>
                <td>
                    <input type="text" name="processId" value={this.state.processId} onChange={ (e) => this.handleProcessIdChange(e) }/>

                </td>
            </tr>
            <tr>
                <td>
                    Group ID
                </td>
                <td>
                    <input type="text" name="groupId" value={this.state.groupId} onChange={ (e) => this.handleGroupIdChange(e) }/>

                </td>
            </tr>
            <tr>
                <td>
                    Artifact ID
                </td>
                <td>
                    <input type="text" name="artifactId" value={this.state.artifactId} onChange={ (e) => this.handleArtifactIdChange(e) }/>

                </td>
            </tr>
            <tr>
                <td>
                    Version
                </td>
                <td>
                    <input type="text" name="version" value={this.state.version} onChange={ (e) => this.handleVersionChange(e) }/>

                </td>
            </tr>

            <tr>
                <td colSpan="2">
                    <button type="button" onClick={() => this.onclick()}>
                      retrive process info from backend
                    </button>
                </td>

            </tr>



        </tbody>
      </table>
      </div>
    );
  }
}
