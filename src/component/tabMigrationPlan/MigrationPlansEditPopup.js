import React from 'react';

import { Button } from "patternfly-react";
import { Modal } from "patternfly-react";

export default class MigrationPlansEditPopup extends React.Component {


  constructor() {
    super();
    this.state = { showEditPlanPopup: false };

  }
  closeEditPlanPopup = () => {
    this.setState({ showEditPlanPopup: false });
  }
  openEditPlanPopup = ()=>  {
    this.setState({ showEditPlanPopup: true });
  }

  submit = () => {
      //this component is used as "Import Plan"
      if (this.props.actionName == "Import Plan"){
          var input = document.getElementById("planEditArea");
          var value = input.value;
          //console.log("planEditArea value: " + value);

          //could be addPlan or editPlan, the planId is only needed for editPlan
          this.props.updatePlan(value, this.props.planId);
          this.props.retrieveAllPlans();
      }else{
      //this component is used as "Export Plan"
          var input = document.getElementById("planEditArea");
          var value = input.value;
          navigator.clipboard.writeText(value);
      }
      this.setState({ showEditPlanPopup: false });

  }


  render() {

    const defaultBody = (
      <form className="form-horizontal">
        <div className="form-group">
          <label className="col-sm-3 control-label" htmlFor="textInput">
            Migration Plan
          </label>
          <div className="col-sm-9">
            <textarea className="form-control" id="planEditArea" name="planEditArea" rows="10" defaultValue={this.props.content}></textarea>
          </div>
        </div>
      </form>
    );

    return (
      <span>
        <Button bsStyle="default" onClick={this.openEditPlanPopup}>
          {this.props.actionName}
        </Button>

        <Modal show={this.state.showEditPlanPopup} onHide={this.closeEditPlanPopup} >
          <Modal.Header>
            <Modal.CloseButton onClick={this.closeEditPlanPopup} />
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{defaultBody}</Modal.Body>
          <Modal.Footer>
            <Button bsStyle="default" className="btn-cancel" onClick={this.closeEditPlanPopup}>
              Cancel
            </Button>
            <Button bsStyle="primary" onClick={this.submit}>
              {this.props.buttonLabel}
            </Button>
          </Modal.Footer>
        </Modal>
      </span>
    );
  }
}
