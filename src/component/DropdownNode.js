import React from "react";
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'


export default class DropdownNode extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
        selected: { },
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(option) {
    console.log('You selected ', option.label)
    this.setState({selected: option})
    this.props.onDropdownChange(option);
  }

  render() {

    const defaultOption = this.state.selected
    const placeHolderValue = typeof this.state.selected === 'string' ? this.state.selected : this.state.selected.value


    return (
        <div>
            <Dropdown options={this.props.options} onChange={this.handleChange} value={defaultOption} placeholder="Select an option" />
        </div>

    );
  }
}
