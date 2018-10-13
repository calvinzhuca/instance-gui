'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDropdown = require('react-dropdown');

var _reactDropdown2 = _interopRequireDefault(_reactDropdown);

require('react-dropdown/style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropdownNode = function (_React$Component) {
  _inherits(DropdownNode, _React$Component);

  function DropdownNode(props) {
    _classCallCheck(this, DropdownNode);

    var _this = _possibleConstructorReturn(this, (DropdownNode.__proto__ || Object.getPrototypeOf(DropdownNode)).call(this, props));

    _this.state = {
      selected: {}
    };
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(DropdownNode, [{
    key: 'handleChange',
    value: function handleChange(option) {
      console.log('You selected ', option.label);
      this.setState({ selected: option });
      this.props.onDropdownChange(option);
    }
  }, {
    key: 'render',
    value: function render() {

      var defaultOption = this.state.selected;
      var placeHolderValue = typeof this.state.selected === 'string' ? this.state.selected : this.state.selected.value;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactDropdown2.default, { options: this.props.options, onChange: this.handleChange, value: defaultOption, placeholder: 'Select an option' })
      );
    }
  }]);

  return DropdownNode;
}(_react2.default.Component);

exports.default = DropdownNode;