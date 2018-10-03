import React from "react";
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'


class DropdownNode extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
        selected: { },

      options: this.props.options
    }
    this._onSelect = this._onSelect.bind(this)
  }

  _onSelect (option) {
    console.log('You selected ', option.label)
    this.setState({selected: option})
  }

  render() {





    const defaultOption = this.state.selected
    const placeHolderValue = typeof this.state.selected === 'string' ? this.state.selected : this.state.selected.value


    return (
        <div>
            <Dropdown options={this.state.options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
            <div className='result'>
                Selected value: 
                    <strong> {placeHolderValue} </strong>
            </div>
        </div>

    );
  }
}
export default DropdownNode;
