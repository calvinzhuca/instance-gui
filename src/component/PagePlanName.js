import React, { Component } from 'react';
import { Field } from 'react-final-form';
import axios from 'axios';

import * as constants from './WizardConstants';
import SearchInputTable from "./SearchInputTable";

export default class PagePlanName extends Component {


  render() {

    return (
      <div>
        <table border="0" cellPadding="1">
          <tbody>
            <tr>
              <td colSpan="2">
                  <div>
                    <label>Plan Name: </label>
                    <Field
                      name="name"
                      component="input"
                      type="text"
                      placeholder="no more than 20 characters"
                      validate={constants.required}
                    />
                    <constants.Error name="name"/>
                  </div>
                  <div>
                    <label>Description: </label>
                    <Field
                      name="description"
                      component="input"
                      type="text"
                      placeholder="no more than 1000 characters"
                      validate={constants.required}
                    />
                    <constants.Error name="description"/>
                  </div>


              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
