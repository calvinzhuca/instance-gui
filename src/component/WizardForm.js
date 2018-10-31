import React, { Component } from 'react';
import { render } from 'react-dom'
import { Field } from 'react-final-form'

import Wizard from "./Wizard"
import Styles from './WizardFormStyles'

import PageDefinitionTables from "./PageDefinitionTables";
import PagePlanName from "./PagePlanName";
import PageMapping from "./PageMapping";


export default class WizardForm extends Component {

    constructor (props) {
      super(props);
      this.state = {
          sourceInfo: '',
          targetInfo: ''
                  };
      this.setInfo = this.setInfo.bind(this);
    }

    setInfo(sourceInfo, targetInfo){
        console.log('setInfo sourceInfo ' + sourceInfo.processId + ' targetInfo ' + targetInfo.processId);
        this.setState({
            sourceInfo:sourceInfo,
            targetInfo:targetInfo
        });
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
            description: "test description"
          }}
          onSubmit={onSubmit}
        >

          <Wizard.Page>
              <PageDefinitionTables
                    sourceInfo={this.state.sourceInfo}
                    targetInfo={this.state.targetInfo}
                    setInfo={this.setInfo}
              />
          </Wizard.Page>
          <Wizard.Page>
              <PagePlanName />
          </Wizard.Page>
          <Wizard.Page>
              <PageMapping
                    sourceInfo={this.state.sourceInfo} targetInfo={this.state.targetInfo}
              />
          </Wizard.Page>
          <Wizard.Page>
              <h2>Please review this plan before submit to Process Instances Migration Service</h2>
              <a id="downloadAnchorElem" style={{display: 'none'}}></a>
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
