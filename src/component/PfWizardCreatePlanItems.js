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
          label1: 'Name',
          label2: 'Description'
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
        title: 'Source Process',
        contents: {
          label1: 'processId',
          label2: 'groupId',
          label3: 'artifactId',
          label4: 'version'
        }
      },
      {
        subStep: '2.2',
        label: '2B.',
        title: 'Target Process',
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
    step: '3',
    label: '3',
    title: 'Node Mapping',
    subSteps: [
      {
        subStep: '3.1',
        label: '3A.',
        title: 'Mapping',
        contents: {
          label1: 'nodeMapping'
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

export const WizardFormContentsPlanName = (label1, label2) => (
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
  </form>
);

export const WizardFormContentsProcessDefintion = (label1, label2, label3, label4) => (
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
