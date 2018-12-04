import React from "react";
import classNames from 'classnames';
import axios from 'axios';

import { Table } from 'patternfly-react';

import { planBootstrapColumns } from './planBootstrapColumns';
import { mockBootstrapRows } from './mockBootstrapRows';


export default class PlanTable extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          plans:[]
        };
        this.retriveAllPlans();
      }


    retriveAllPlans(){

        axios.get('http://localhost:8280/plans', {
        }).then (res => {
            const plans = res.data;
            console.log('get all plans: ' + plans);
            this.setState({ plans });
      });
            console.log('finish  get all plans: ');

    }


  render() {

    return (
        <div>
            <Table.PfProvider striped bordered hover columns={planBootstrapColumns}>
              <caption>Migration Plans</caption>
              <Table.Header />
              <Table.Body rows={this.state.plans} rowKey="id" />
            </Table.PfProvider>

        </div>

    );
  }
}
