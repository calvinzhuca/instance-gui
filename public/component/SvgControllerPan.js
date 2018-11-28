'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSvgPanZoom = require('react-svg-pan-zoom');

var _reactSvgmt = require('react-svgmt');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SvgControllerPan = function (_Component) {
  _inherits(SvgControllerPan, _Component);

  function SvgControllerPan(props, context) {
    _classCallCheck(this, SvgControllerPan);

    var _this = _possibleConstructorReturn(this, (SvgControllerPan.__proto__ || Object.getPrototypeOf(SvgControllerPan)).call(this, props, context));

    _this.Viewer = null;
    return _this;
  }

  _createClass(SvgControllerPan, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.Viewer.fitToViewer();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactSvgPanZoom.ReactSVGPanZoom,
          {
            style: { border: "1px solid black" },
            width: 800, height: 400, ref: function ref(Viewer) {
              return _this2.Viewer = Viewer;
            },
            onClick: function onClick(event) {
              return console.log('click', event.x, event.y, event.originalEvent);
            },
            onMouseUp: function onMouseUp(event) {
              return console.log('up', event.x, event.y);
            },
            onMouseMove: function onMouseMove(event) {
              return console.log('move', event.x, event.y);
            },
            onMouseDown: function onMouseDown(event) {
              return console.log('down', event.x, event.y);
            } },
          _react2.default.createElement(
            'svg',
            { width: '800', height: '400' },
            _react2.default.createElement(
              _reactSvgmt.SvgLoader,
              { svgXML: this.props.svgcontents, style: { width: '100%', height: '20%', border: 'solid 0px' } },
              _react2.default.createElement(_reactSvgmt.SvgProxy, { selector: this.props.previousSelector, fill: 'black' }),
              _react2.default.createElement(_reactSvgmt.SvgProxy, { selector: this.props.currentSelector, fill: 'red' })
            )
          )
        )
      );
    }
  }]);

  return SvgControllerPan;
}(_react.Component);

exports.default = SvgControllerPan;
;