import React from 'react';
import PropTypes from 'prop-types';
import { Button } from "patternfly-react";
import { Modal } from "patternfly-react";

export default class MigrationPlansMoDalManager extends React.Component {


  constructor() {
    super();
    this.state = { showModal: false };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }
  close() {
    this.setState({ showModal: false });
  }
  open() {
    this.setState({ showModal: true });
  }
  render() {
    const { children, rightSide } = this.props;
    const defaultBody = (
      <form className="form-horizontal">
        <div className="form-group">
          <label className="col-sm-3 control-label" htmlFor="textInput">
            Migration Plan
          </label>
          <div className="col-sm-9">
            <textarea className="form-control" name="description" rows="10" defaultValue={this.props.content}></textarea>
          </div>
        </div>
      </form>
    );

    return (
      <div>
        <Button bsStyle="default" onClick={this.open}>
          {this.props.buttonName}
        </Button>

        <Modal show={this.state.showModal} onHide={this.close} className={rightSide ? 'right-side-modal-pf' : ''}>
          <Modal.Header>
            <Modal.CloseButton onClick={this.close} />
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{children || defaultBody}</Modal.Body>
          <Modal.Footer>
            <Button bsStyle="default" className="btn-cancel" onClick={this.close}>
              Cancel
            </Button>
            <Button bsStyle="primary" onClick={this.close}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
