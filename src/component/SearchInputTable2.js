import React, { Component } from 'react';



export default class SearchInputTable2 extends Component {
    constructor (props) {
      super(props);
      this.state = {
          processId: this.props.processId,
          groupId: this.props.groupId,
          artifactId: this.props.artifactId,
          version: this.props.version
      };

    }

    onclick(option) {
      //console.log('!!!!!!!!!!!!!onclick processId' + this.state.processId);
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

    handleCopy(event){
        console.log('handleCopy');
        this.props.copySourceToTarget();
        console.log('handleCopy2' + this.props.sourceProcessId);
        this.setState({
            processId: this.props.sourceProcessId,
            groupId: this.props.sourceGroupId,
            artifactId: this.props.sourceArtifactId,
            version: this.props.sourceVersion
        }
    );
        console.log('handleCopy3' + this.state.processId);
    }

  render() {

    return (
      <div>

      <table border="0" cellPadding="1">
        <thead>
          <tr>
            <th colSpan="3" >{this.props.tableHeader}</th>

          </tr>
        </thead>
        <tbody>
            <tr>
                <td/>
                <td>
                    Process ID
                </td>
                <td>
                    <input type="text" name="processId" value={this.state.processId} onChange={ (e) => this.handleProcessIdChange(e) }/>

                </td>
            </tr>
            <tr>
                <td>
                      <button type="button" onClick={(e) => this.handleCopy(e)}> >>>> </button>
                </td>
                <td>
                    Group ID
                </td>
                <td>
                    <input type="text" name="groupId" value={this.state.groupId} onChange={ (e) => this.handleGroupIdChange(e) }/>

                </td>
            </tr>
            <tr>
                <td/>
                <td>
                    Artifact ID
                </td>
                <td>
                    <input type="text" name="artifactId" value={this.state.artifactId} onChange={ (e) => this.handleArtifactIdChange(e) }/>

                </td>
            </tr>
            <tr>
                <td/>
                <td>
                    Version
                </td>
                <td>
                    <input type="text" name="version" value={this.state.version} onChange={ (e) => this.handleVersionChange(e) }/>

                </td>
            </tr>

            <tr>
                <td/>
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
