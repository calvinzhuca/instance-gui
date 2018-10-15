import React, { Component } from 'react';


export default class MapButton extends Component {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.onMapButtonClick()
  }

    render () {
        return (
          <button type="button" onClick={this.handleClick}>
            Map these two nodes
          </button>
                )
    }
};
