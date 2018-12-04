import React from 'react';
import { Table } from 'patternfly-react';

const headerFormat = value => <Table.Heading>{value}</Table.Heading>;
const cellFormat = value => <Table.Cell>{value}</Table.Cell>;

export const planBootstrapColumns = [
  {
    header: {
      label: 'ID',
      formatters: [headerFormat]
    },
    cell: {
      formatters: [cellFormat]
    },
    property: 'id'
  },
  {
    header: {
      label: 'Plan Name',
      formatters: [headerFormat]
    },
    cell: {
      formatters: [cellFormat]
    },
    property: 'name'
  },
  {
    header: {
      label: 'Description',
      formatters: [headerFormat]
    },
    cell: {
      formatters: [cellFormat]
    },
    property: 'description'
  },
  {
    header: {
      label: 'Source Container ID',
      formatters: [headerFormat]
    },
    cell: {
      formatters: [cellFormat]
    },
    property: 'source_container_id'
  },
  {
    header: {
      label: 'Target Container ID',
      formatters: [headerFormat]
    },
    cell: {
      formatters: [cellFormat]
    },
    property: 'target_container_id'
  },
  {
    header: {
      label: 'Target Process ID',
      formatters: [headerFormat]
    },
    cell: {
      formatters: [cellFormat]
    },
    property: 'target_process_id'
  },
  {
    header: {
      label: 'Action',
      formatters: [headerFormat]
    },
    cell: {
      formatters: [cellFormat]
    },
    property: 'action'
  }
];

const headerFormatRightAlign = value => <Table.Heading align="right">{value}</Table.Heading>;
const cellFormatRightAlign = value => <Table.Cell align="right">{value}</Table.Cell>;
