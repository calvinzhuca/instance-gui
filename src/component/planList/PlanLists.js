import React from "react";
import classNames from 'classnames';
import { Row, Col } from 'patternfly-react';
import { ListView } from 'patternfly-react';
import { Button } from 'patternfly-react';

import { mockListItems } from './mockListItems';


export default class PlanLists extends React.Component {



  render() {

      const renderActions = () => (
        <div>
          <Button>Details</Button>
        </div>
      );

      const renderAdditionalInfoItems = itemProperties =>
        itemProperties &&
        Object.keys(itemProperties).map(prop => {
          const cssClassNames = classNames('pficon', {
            'pficon-flavor': prop === 'hosts',
            'pficon-cluster': prop === 'clusters',
            'pficon-container-node': prop === 'nodes',
            'pficon-image': prop === 'images'
          });
          return (
            <ListView.InfoItem key={prop}>
              <span className={cssClassNames} />
              <strong>{itemProperties[prop]}</strong> {prop}
            </ListView.InfoItem>
          );
        });



    return (
        <ListView>
          {mockListItems.map(({ actions, properties, title, description, expandedContentText, hideCloseIcon }, index) => (
            <ListView.Item
              key={index}
              actions={renderActions(actions)}
              checkboxInput={<input type="checkbox" />}
              leftContent={<ListView.Icon name="plane" />}
              additionalInfo={renderAdditionalInfoItems(properties)}
              heading={title}
              description={description}
              stacked={false}
              hideCloseIcon={false}
            >
              <Row>
                <Col sm={11}>{expandedContentText}</Col>
              </Row>
            </ListView.Item>
          ))}
        </ListView>

    );
  }
}
