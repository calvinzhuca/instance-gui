import React, { Component } from 'react';
import { render } from 'react-dom'
import { Field } from 'react-final-form'
import Wizard from "./Wizard"
import Styles from './WizardFormStyles'

import DefinitionTables from "./DefinitionTables";
import DefinitionMappingTable from "./DefinitionMappingTable";


export default class WizardForm extends Component {
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
          initialValues={{ name: "",
            description: "",
            source_container_id: "evaluation_1.0.0-SNAPSHOT",
            target_container_id: "evaluation_2.0.0-SNAPSHOT",
            target_process_id: "evaluation"
          }}
          onSubmit={onSubmit}
        >
          <Wizard.Page>
            <DefinitionTables/>
          </Wizard.Page>
          <Wizard.Page>
              <DefinitionMappingTable />
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
