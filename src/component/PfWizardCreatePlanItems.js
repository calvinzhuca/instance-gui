import React from 'react';

export const PfWizardCreatePlanItems = [
  {
    step: 1,
    label: '1',
    title: 'Define Plan',
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
    title: 'Process Definition',
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
    step: '3',
    label: '3',
    title: 'Node Mapping',
    subSteps: [
      {
        subStep: '3.1',
        label: '3A.',
        title: 'Mapping',
        contents: {
        }
      }

    ]
  },
  {
    step: 4,
    label: '4',
    title: 'Review & Submit',
    subSteps: [
      {
        subStep: '4.1',
        label: '4A.',
        title: 'Review'
      },
      {
        subStep: '4.2',
        label: '4B.',
        title: 'Submit'
      }
    ]
  }
];
