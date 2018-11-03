import React, { Component } from 'react';
import { render } from 'react-dom'
import { Field } from 'react-final-form'

import axios from 'axios';
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


      await sleep(300);
      var plan = JSON.stringify(values,0,2);

      //from nodemapping, default is string, not object, also it auto adds \ in front of "
      //e.g: "mappings": "{\"_D3E17247-1D94-47D8-93AD-D645E317B736\":\"_011ED858-F841-4C44-B0F1-F3BE388ADDA5\"}"
      //while the expected is: "mappings": {"_D3E17247-1D94-47D8-93AD-D645E317B736":"_011ED858-F841-4C44-B0F1-F3BE388ADDA5"}
      //so need to take out the uncessary parts otherwise will fail in PIM serviceUrl

      //step 1, replace all \" to "
      plan = plan.replace(/\\\"/g, '\"');
      console.log('plan1: ' + plan );
      //step 2, replace "{ to {
      plan = plan.replace('\"\{', '\{');
      console.log('plan2: ' + plan );
      //step3, replace }" to }
      plan = plan.replace('\}\"', '\}');
      console.log('plan3: ' + plan );



      const serviceUrl = 'http://localhost:8280/plans';
      axios.post(serviceUrl, plan, {headers: {
                "Content-Type": "application/json"}
      })
      .then(function (response) {
        console.log('response: ' + response.data );
      })
      .catch(function (error) {
        console.log('error: ' + error );
      });
      window.alert("submitted this plan" + plan);
    }

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
