'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DefinitionTable = require('./DefinitionTable');

var _DefinitionTable2 = _interopRequireDefault(_DefinitionTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DefinitionTables = function (_Component) {
  _inherits(DefinitionTables, _Component);

  function DefinitionTables() {
    _classCallCheck(this, DefinitionTables);

    return _possibleConstructorReturn(this, (DefinitionTables.__proto__ || Object.getPrototypeOf(DefinitionTables)).apply(this, arguments));
  }

  _createClass(DefinitionTables, [{
    key: 'render',
    value: function render() {

      var sourceProcessDefinitions = [{ name: 'Name', value: 'Evaluation' }, { name: 'Version', value: '1' }, { name: 'Project/Container ID', value: 'evaluation_1.0.0-SNAPSHOT' }];

      var targetProcessDefinitions = [{ name: 'Name', value: 'Evaluation' }, { name: 'Version', value: '2' }, { name: 'Project/Container ID', value: 'evaluation_2.0.0-SNAPSHOT' }];

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'table',
          { border: '1', cellPadding: '1' },
          _react2.default.createElement(
            'tbody',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(_DefinitionTable2.default, { definitions: sourceProcessDefinitions, tableHeader: 'Source Process Definition' })
              ),
              _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(_DefinitionTable2.default, { definitions: targetProcessDefinitions, tableHeader: 'Target Process Definition' })
              )
            )
          )
        )
      );
    }
  }]);

  return DefinitionTables;
}(_react.Component);

exports.default = DefinitionTables;