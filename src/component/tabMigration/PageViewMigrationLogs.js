import React, { Component } from 'react';
import { Button } from "patternfly-react";
import { Table } from 'patternfly-react';

import MigrationLog from './MigrationLog';

export default class PageViewMigrationLogs extends Component {




  render() {
      //let id = this.props[0].migrationLogs.id;
    return (
        <div>
            {this.props.migrationLogs.map((log, key) =>
                <MigrationLog log={log} key={log.id} />
            )}
        </div>



    );
  }
}
