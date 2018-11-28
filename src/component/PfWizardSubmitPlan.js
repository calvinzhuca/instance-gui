import React from 'react';
import PropTypes from 'prop-types';

export default class PfWizardSubmitPlan extends React.Component {
  constructor() {
    super();
    this.state = { submitting: true };
  }
  componentWillReceiveProps(nextProps) {
    const { active } = this.props;
    if (!nextProps.active) {
      this.setState({ submitting: true });
    } else if (!active && nextProps.active) {
      setTimeout(() => {
        this.setState({ submitting: false });
      }, 3000);
    }
  }
  render() {
    if (this.state.submitting) {
      return (
        <div className="wizard-pf-process blank-slate-pf">
          <div className="spinner spinner-lg blank-slate-pf-icon" />
          <h3 className="blank-slate-pf-main-action">Submit in progress</h3>
          <p className="blank-slate-pf-secondary-action">
            .................
          </p>
        </div>
      );
    }
    return (
      <div className="wizard-pf-complete blank-slate-pf">
        <div className="wizard-pf-success-icon">
          <span className="glyphicon glyphicon-ok-circle" />
        </div>
        <h3 className="blank-slate-pf-main-action">Submit was successful</h3>
        <p className="blank-slate-pf-secondary-action">
          .................
        </p>
      </div>
    );
  }
}
PfWizardSubmitPlan.propTypes = {
  active: PropTypes.bool.isRequired
};
