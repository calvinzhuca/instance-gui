import React, { Component } from 'react';
import SvgTag from './SvgTag'

export default class DefinitionDiagramButton extends Component {
  constructor (props) {
    super(props)
    this.state = {
			shown: false,
      buttonText: 'Show Diagram'
		};
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log('You click Toggle diagram buttonText' + this.state.buttonText)
    this.setState({
			shown: !this.state.shown
		});
    if (this.state.buttonText === 'Show Diagram')      {
      this.setState({
        buttonText: 'Hide Diagram'
      });
    } else {
      this.setState({
        buttonText: 'Show Diagram'
      });
    }
  }



    render () {

      var shown = {
  			display: this.state.shown ? "block" : "none"
  		};

  		var hidden = {
  			display: this.state.shown ? "none" : "block"
  		}



        return (
            <div>
              <button onClick={this.handleClick}>{this.state.buttonText}</button>

              <h2 style={ shown }>
              <SvgTag
                selectorId="_D3E17247-1D94-47D8-93AD-D645E317B736"
                svgcontents={this.props.svgcontents}
              />
              </h2>
      				<h2 style={ hidden }></h2>
            </div>
                )
    }


};
