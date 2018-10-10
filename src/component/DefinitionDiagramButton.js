import React, { Component } from 'react';


export default class DefinitionDiagramButton extends Component {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.onButtonClick();
  }

    render () {
        return (
          <div>
            <button onClick={this.handleClick}>{this.props.displayText}</button>
          </div>
                )
    }


};
