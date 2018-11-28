import React, { Component } from 'react';


export default class PagePlanName extends Component {

  render() {

    return (
        <div className="form-horizontal">
          <div className="form-group required">
            <label className="col-sm-2 control-label">Name</label>
            <div className="col-sm-10">
              <input type="text" name="name" className="form-control" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Description</label>
            <div className="col-sm-10">
              <textarea className="form-control" name="description" rows="2" />
            </div>
          </div>
        </div>



    );
  }
}
