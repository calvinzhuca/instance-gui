"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDropdown = _interopRequireDefault(require("react-dropdown"));

require("react-dropdown/style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class DropdownNode extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {}
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(option) {
    console.log('You selected ', option.label);
    this.setState({
      selected: option
    });
    this.props.onDropdownChange(option);
  }

  render() {
    const defaultOption = this.state.selected;
    const placeHolderValue = typeof this.state.selected === 'string' ? this.state.selected : this.state.selected.value;
    return _react.default.createElement("div", null, _react.default.createElement(_reactDropdown.default, {
      options: this.props.options,
      onChange: this.handleChange,
      value: defaultOption,
      placeholder: "Select an option"
    }));
  }

}

exports.default = DropdownNode;