import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class DiagramLink extends Component {
  render() {

    return (
      <div>
        <Link to={this.props.diagramLink}>{this.props.displayString}</Link>
      </div>
    );
  }
}
