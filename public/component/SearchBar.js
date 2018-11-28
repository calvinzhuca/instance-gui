"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchBar = function (_React$Component) {
  _inherits(SearchBar, _React$Component);

  function SearchBar(props) {
    _classCallCheck(this, SearchBar);

    var _this = _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this, props));

    _this.handleFilterTextChange = _this.handleFilterTextChange.bind(_this);
    _this.handleInStockChange = _this.handleInStockChange.bind(_this);
    return _this;
  }

  _createClass(SearchBar, [{
    key: "handleFilterTextChange",
    value: function handleFilterTextChange(e) {
      this.props.onFilterTextChange(e.target.value);
    }
  }, {
    key: "handleInStockChange",
    value: function handleInStockChange(e) {
      this.props.onInStockChange(e.target.checked);
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "form",
        null,
        _react2.default.createElement("input", {
          type: "text",
          placeholder: "Search Process Definition...",
          value: this.props.filterText,
          onChange: this.handleFilterTextChange
        }),
        _react2.default.createElement(
          "p",
          null,
          _react2.default.createElement("input", {
            type: "checkbox",
            checked: this.props.inStockOnly,
            onChange: this.handleInStockChange
          }),
          ' ',
          "checked for target process"
        )
      );
    }
  }]);

  return SearchBar;
}(_react2.default.Component);

exports.default = SearchBar;