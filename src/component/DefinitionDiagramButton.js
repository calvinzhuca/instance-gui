import React, { Component } from 'react';


export default class DefinitionDiagramButton extends Component {
  constructor (props) {
    super(props)
    this.state = {
      buttonText: 'Show '
		};
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log('You click Toggle diagram buttonText' + this.state.buttonText)

    if (this.state.buttonText === 'Show ')      {
      this.setState({
        buttonText: 'Hide '
      });
    } else {
      this.setState({
        buttonText: 'Show '
      });
    }

    this.props.onButtonClick();

  }



    render () {
        return (
          <div>
            <button onClick={this.handleClick}>{this.state.buttonText} {this.props.displayText}</button>
          </div>
                )
    }


};
