import classNames from 'classnames';
import React from 'react';

import { Button } from 'patternfly-react';
import { ListView } from 'patternfly-react';

export const mockListItems = [
  {
    title: 'Item 1',
    description: 'This is Item 1 description',
    properties: { teserer: 'aaaaaa', clusters: 1, nodes: 7, images: 4 },
    expandedContentText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
  },
  {
    title: 'Item 2',
    description: 'This is Item 2 description',
    properties: { hosts: 2, clusters: 1, nodes: 11, images: 8 },
    expandedContentText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
  },
  {
    title: 'Item 3',
    description: 'This is Item 3 description',
    properties: { hosts: 4, clusters: 2, nodes: 9, images: 8 },
    expandedContentText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
  },
  {
    description: 'This is Item without heading',
    expandedContentText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
  {
    properties: { hosts: 4, clusters: 2, nodes: 9, images: 8 },
    expandedContentText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
  },
  {
    title: 'Item without description or close icon',
    expandedContentText: 'There is no close `x` on the right of this box.',
    hideCloseIcon: true
  }
];
