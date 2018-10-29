import React, { Component } from 'react';
import { render } from 'react-dom'
import { Field } from 'react-final-form'

import axios from 'axios';

import Wizard from "./Wizard"
import Styles from './WizardFormStyles'


import DefinitionTables from "./DefinitionTables";
import DefinitionMappingTable from "./DefinitionMappingTable";


export default class WizardForm extends Component {

    constructor (props) {
      super(props);
      this.state = {
          sourceInfo: '',
          targetInfo: ''
                  };
     this.retriveSourceInfo = this.retriveSourceInfo.bind(this);
     this.retriveTargetInfo = this.retriveTargetInfo.bind(this);
    }

    retriveSourceInfo(processId, groupId, artifactId, version){
        //console.log("!!!!!!!!!!!!!retriveSourceInfo processId" + processId);

        axios.get('http://localhost:8080/backend', {
            params: {
                processId: processId,
                groupId: groupId,
                artifactId: artifactId,
                version: version
            }
        }).then (res => {
            var sourceInfo = res.data;
            this.setState({sourceInfo});
        })

    }

    retriveTargetInfo(processId, groupId, artifactId, version){
        //console.log("!!!!!!!!!!!!!retriveTargetInfo processId" + processId);

        axios.get('http://localhost:8080/backend', {
            params: {
                processId: processId,
                groupId: groupId,
                artifactId: artifactId,
                version: version
            }
        }).then (res => {
            const targetInfo = res.data;
            this.setState({targetInfo});
        })

    }

  render() {
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

    const onSubmit = async values => {
      await sleep(300)
      window.alert(JSON.stringify(values, 0, 2))
    }

    const Error = ({ name }) => (
      <Field
        name={name}
        subscribe={{ touched: true, error: true }}
        render={({ meta: { touched, error } }) =>
          touched && error ? <span>{error}</span> : null
        }
      />
    )

    const required = value => (value ? undefined : 'Required')

    const App = () => (
      <Styles>
        <h1>Process Instances Migration</h1>
        <h2>Wizard Form</h2>

        <Wizard
          initialValues={{ name: "test Plan",
            description: "test description",
            source_container_id: "evaluation_1.0.0-SNAPSHOT",
            target_container_id: "evaluation_2.0.0-SNAPSHOT",
            target_process_id: "evaluation"
          }}
          onSubmit={onSubmit}
        >
          <Wizard.Page>
              <DefinitionTables
                    retriveSourceInfo={this.retriveSourceInfo} retriveTargetInfo={this.retriveTargetInfo}
                    sourceInfo={this.state.sourceInfo} targetInfo={this.state.targetInfo}
              />
          </Wizard.Page>
          <Wizard.Page>
              <DefinitionMappingTable
                    sourceInfo={this.state.sourceInfo} targetInfo={this.state.targetInfo}
              />
          </Wizard.Page>
          <Wizard.Page>
              <h2>Please review this plan before submit to Process Instances Migration Service</h2>
          </Wizard.Page>
        </Wizard>
      </Styles>
    )

    return (


      <div>
        <App />

      </div>


    )
  }

}
