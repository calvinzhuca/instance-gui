"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SearchBar extends _react.default.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  handleInStockChange(e) {
    this.props.onInStockChange(e.target.checked);
  }

  render() {
    return _react.default.createElement("form", null, _react.default.createElement("input", {
      type: "text",
      placeholder: "Search Process Definition...",
      value: this.props.filterText,
      onChange: this.handleFilterTextChange
    }), _react.default.createElement("p", null, _react.default.createElement("input", {
      type: "checkbox",
      checked: this.props.inStockOnly,
      onChange: this.handleInStockChange
    }), ' ', "checked for target process"));
  }

}

exports.default = SearchBar;