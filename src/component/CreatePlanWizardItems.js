import React from 'react';



export const CreatePlanWizardItems = [
  {
    step: 1,
    label: '1',
    title: 'First Step',
    subSteps: [
      {
        subStep: '1.1',
        label: '1A.',
        title: 'Plan Details',
        contents: {
          label1: 'Name',
          label2: 'Description'
        }
      },
      {
        subStep: '1.2',
        label: '1B.',
        title: 'Source Process Definition',
        contents: {
          label1: 'processId',
          label2: 'groupId',
          label3: 'artifactId',
          label4: 'version'
        }
      },
      {
        subStep: '1.3',
        label: '1C.',
        title: 'Target Process Definition',
        contents: {
          label1: 'processId',
          label2: 'groupId',
          label3: 'artifactId',
          label4: 'version'
        }
      }
    ]
  },
  {
    step: '2',
    label: '2',
    title: 'Second Step',
    subSteps: [
      {
        subStep: '2.1',
        label: '2A.',
        title: 'Mapping',
        contents: {
          label1: 'Aliquam',
          label2: 'Fermentum'
        }
      }

    ]
  },
  {
    step: 3,
    label: '3',
    title: 'Review',
    subSteps: [
      {
        subStep: '3.1',
        label: '3A.',
        title: 'Summary'
      },
      {
        subStep: 4,
        label: '4A.',
        title: 'Progress'
      }
    ]
  }
];

export const WizardFormContents = (label1, label2, label3, label4) => (
  <form className="form-horizontal">
    <div className="form-group required">
      <label className="col-sm-2 control-label">{label1}</label>
      <div className="col-sm-10">
        <input type="text" className="form-control" />
      </div>
    </div>
    <div className="form-group">
      <label className="col-sm-2 control-label">{label2}</label>
      <div className="col-sm-10">
        <textarea className="form-control" rows="2" />
      </div>
    </div>
    <div className="form-group">
      <label className="col-sm-2 control-label">{label3}</label>
      <div className="col-sm-10">
        <textarea className="form-control" rows="2" />
      </div>
    </div>
    <div className="form-group">
      <label className="col-sm-2 control-label">{label4}</label>
      <div className="col-sm-10">
        <textarea className="form-control" rows="2" />
      </div>
    </div>
  </form>
);
