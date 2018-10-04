import React, { Component } from 'react';


export default class MapButton extends Component {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log('You click map button ')
    this.props.onMapButtonClick()
  }

    render () {
        return (
          <button onClick={this.handleClick}>
            Map these two
          </button>
                )
    }
};
