import React, { Component } from 'react';
import { Button } from "patternfly-react";

export default class PageReview extends Component {
    onClick(e){

    }

    onDownloadClick = () =>{
        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(this.props.migrationPlanJsonStr);
        var dlAnchorElem = document.getElementById('downloadAnchorElem');
        dlAnchorElem.setAttribute("href",     dataStr     );
        dlAnchorElem.setAttribute("download", "migrationPlan.json");
        dlAnchorElem.click();
    }


  render() {

    return (
        <div>
          <div className="form-group">
            <Button onClick={(e) => this.onDownloadClick()}>Export</Button>
            <pre>
              {this.props.migrationPlanJsonStr}
            </pre>
            <a id="downloadAnchorElem" style={{display: 'none'}}></a>
          </div>
        </div>



    );
  }
}
