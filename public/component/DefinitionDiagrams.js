'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DefinitionDiagramButton = require('./DefinitionDiagramButton');

var _DefinitionDiagramButton2 = _interopRequireDefault(_DefinitionDiagramButton);

var _ = require('../svg/1.svg');

var _2 = _interopRequireDefault(_);

var _3 = require('../svg/2.svg');

var _4 = _interopRequireDefault(_3);

var _SvgControllerPan = require('./SvgControllerPan');

var _SvgControllerPan2 = _interopRequireDefault(_SvgControllerPan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DefinitionDiagrams = function (_Component) {
  _inherits(DefinitionDiagrams, _Component);

  function DefinitionDiagrams() {
    _classCallCheck(this, DefinitionDiagrams);

    return _possibleConstructorReturn(this, (DefinitionDiagrams.__proto__ || Object.getPrototypeOf(DefinitionDiagrams)).apply(this, arguments));
  }

  _createClass(DefinitionDiagrams, [{
    key: 'render',
    value: function render() {
      var sourceShown = {
        display: this.props.sourceDiagramshown ? "block" : "none"
      };

      var targetShown = {
        display: this.props.targetDiagramshown ? "block" : "none"
      };

      var sourceDisplayText = this.props.sourceDiagramshown ? "Hide Source Diagram" : "Show Source Diagram";
      var targetDisplayText = this.props.targetDiagramshown ? "Hide Target Diagram" : "Show Target Diagram";

      return _react2.default.createElement(
        'table',
        { border: '0' },
        _react2.default.createElement(
          'tbody',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(
                'table',
                null,
                _react2.default.createElement(
                  'tbody',
                  null,
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'td',
                      null,
                      _react2.default.createElement(_DefinitionDiagramButton2.default, {
                        onButtonClick: this.props.sourceDiagramButtonClick,
                        displayText: sourceDisplayText,
                        sourceDiagramshown: this.props.sourceDiagramshown
                      })
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      _react2.default.createElement(_DefinitionDiagramButton2.default, {
                        onButtonClick: this.props.targetDiagramButtonClick,
                        displayText: targetDisplayText,
                        isShown: targetShown
                      })
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(
                'h2',
                { style: sourceShown },
                'Source Process Definition Diagram',
                _react2.default.createElement(_SvgControllerPan2.default, { svgcontents: _2.default,
                  previousSelector: this.props.sourcePreviousSelector,
                  currentSelector: this.props.sourceCurrentSelector
                })
              ),
              _react2.default.createElement(
                'h2',
                { style: targetShown },
                'Target Process Definition Diagram',
                _react2.default.createElement(_SvgControllerPan2.default, { svgcontents: _4.default,
                  previousSelector: this.props.targetPreviousSelector,
                  currentSelector: this.props.targetCurrentSelector
                })
              )
            )
          )
        )
      );
    }
  }]);

  return DefinitionDiagrams;
}(_react.Component);

exports.default = DefinitionDiagrams;
;