'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactFinalForm = require('react-final-form');

var _Wizard = require('./Wizard1');

var _Wizard2 = _interopRequireDefault(_Wizard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App2 = function (_Component) {
  _inherits(App2, _Component);

  function App2() {
    _classCallCheck(this, App2);

    return _possibleConstructorReturn(this, (App2.__proto__ || Object.getPrototypeOf(App2)).apply(this, arguments));
  }

  _createClass(App2, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var sleep = function sleep(ms) {
        return new Promise(function (resolve) {
          return setTimeout(resolve, ms);
        });
      };

      var onSubmit = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(values) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return sleep(300);

                case 2:
                  window.alert(JSON.stringify(values, 0, 2));

                case 3:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }));

        return function onSubmit(_x) {
          return _ref.apply(this, arguments);
        };
      }();

      var Error = function Error(_ref2) {
        var name = _ref2.name;
        return _react2.default.createElement(_reactFinalForm.Field, {
          name: name,
          subscribe: { touched: true, error: true },
          render: function render(_ref3) {
            var _ref3$meta = _ref3.meta,
                touched = _ref3$meta.touched,
                error = _ref3$meta.error;
            return touched && error ? _react2.default.createElement(
              'span',
              null,
              error
            ) : null;
          }
        });
      };

      var required = function required(value) {
        return value ? undefined : 'Required';
      };

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          'React Final Form Example'
        ),
        _react2.default.createElement(
          'h2',
          null,
          'Wizard Form'
        )
      );
    }
  }]);

  return App2;
}(_react.Component);

exports.default = App2;