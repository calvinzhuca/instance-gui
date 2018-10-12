import React, { Component } from 'react';
import { render } from 'react-dom'
import { Field } from 'react-final-form'


export default class App2 extends Component {
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



    return (


      <div>
        <h1>React Final Form Example</h1>
        <h2>Wizard Form</h2>

      </div>


    )
  }

}
