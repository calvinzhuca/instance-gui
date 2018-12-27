import React from 'react';

export const WizardexecuteMigrationItems = [
  {
    step: 1,
    label: '1',
    title: 'Select Running Instances',
    subSteps: [
      {
        subStep: '1.1',
        label: '1A.',
        title: 'Plan Details',
        contents: {
        }
      }
    ]
  },
  {
    step: '2',
    label: '2',
    title: 'Choose Execution Time',
    subSteps: [

      {
        subStep: '2.1',
        label: '2A.',
        title: 'Process Definition',
        contents: {
        }
      }
    ]
  },
  {
    step: 3,
    label: '3',
    title: 'Review & Submit',
    subSteps: [
      {
        subStep: '3.1',
        label: '3A.',
        title: 'Review'
      },
      {
        subStep: '3.2',
        label: '3B.',
        title: 'Submit'
      }
    ]
  }
];
