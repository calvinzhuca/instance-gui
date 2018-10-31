import React, { Component } from 'react';



export default class SearchInputTable extends Component {


    handleProcessIdChange(event){
        this.props.handleProcessIdChange(event.target.value);
    }

    handleGroupIdChange(event){
        this.props.handleGroupIdChange(event.target.value);
    }

    handleArtifactIdChange(event){
        this.props.handleArtifactIdChange(event.target.value);
    }

    handleVersionChange(event){
        this.props.handleVersionChange(event.target.value);
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
                    <input type="text" name="processId" value={this.props.processId} onChange={ (e) => this.handleProcessIdChange(e) }/>

                </td>
            </tr>
            <tr>
                <td>
                    Group ID
                </td>
                <td>
                    <input type="text" name="groupId" value={this.props.groupId} onChange={ (e) => this.handleGroupIdChange(e) }/>

                </td>
            </tr>
            <tr>
                <td>
                    Artifact ID
                </td>
                <td>
                    <input type="text" name="artifactId" value={this.props.artifactId} onChange={ (e) => this.handleArtifactIdChange(e) }/>

                </td>
            </tr>
            <tr>
                <td>
                    Version
                </td>
                <td>
                    <input type="text" name="version" value={this.props.version} onChange={ (e) => this.handleVersionChange(e) }/>

                </td>
            </tr>
        </tbody>
      </table>
      </div>
    );
  }
}
