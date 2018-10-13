"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require("react-router-dom");

var _DefinitionDiagrams = require("./DefinitionDiagrams");

var _DefinitionDiagrams2 = _interopRequireDefault(_DefinitionDiagrams);

var _MapButton = require("./MapButton");

var _MapButton2 = _interopRequireDefault(_MapButton);

var _DropdownNode = require("./DropdownNode");

var _DropdownNode2 = _interopRequireDefault(_DropdownNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DefinitionMappingTable = function (_Component) {
  _inherits(DefinitionMappingTable, _Component);

  function DefinitionMappingTable(props) {
    _classCallCheck(this, DefinitionMappingTable);

    var _this = _possibleConstructorReturn(this, (DefinitionMappingTable.__proto__ || Object.getPrototypeOf(DefinitionMappingTable)).call(this, props));

    _this.state = { allNodeMapping: '',
      sourceNodeStr: '',
      targetNodeStr: '',
      sourceDiagramshown: false,
      targetDiagramshown: false
    };
    _this.handleSourceDropdownChange = _this.handleSourceDropdownChange.bind(_this);
    _this.handleTargetDropdownChange = _this.handleTargetDropdownChange.bind(_this);
    _this.handleSourceDiagramButtonClick = _this.handleSourceDiagramButtonClick.bind(_this);
    _this.handleTargetDiagramButtonClick = _this.handleTargetDiagramButtonClick.bind(_this);
    _this.handleMapButtonClick = _this.handleMapButtonClick.bind(_this);
    return _this;
  }

  _createClass(DefinitionMappingTable, [{
    key: "handleSourceDiagramButtonClick",
    value: function handleSourceDiagramButtonClick() {
      console.log('handleSourceDiagramButtonClick ' + this.state.sourceDiagramshown);
      this.setState({
        sourceDiagramshown: !this.state.sourceDiagramshown
      });
    }
  }, {
    key: "handleTargetDiagramButtonClick",
    value: function handleTargetDiagramButtonClick() {
      console.log('handleTargetDiagramButtonClick ' + this.state.targetDiagramshown);
      this.setState({
        targetDiagramshown: !this.state.targetDiagramshown
      });
    }
  }, {
    key: "handleSourceDropdownChange",
    value: function handleSourceDropdownChange(option) {
      var tmpPreviousSelector = this.state.sourceCurrentSelector;
      var tmpCurrentSelector = "#" + option.value + "undefined";
      this.setState({
        sourceNodeStr: option.value,
        sourcePreviousSelector: tmpPreviousSelector,
        sourceCurrentSelector: tmpCurrentSelector,
        sourceDiagramshown: true,
        targetDiagramshown: false
      });
    }
  }, {
    key: "handleTargetDropdownChange",
    value: function handleTargetDropdownChange(option) {
      var tmpPreviousSelector = this.state.targetCurrentSelector;
      var tmpCurrentSelector = "#" + option.value + "undefined";
      this.setState({
        targetNodeStr: option.value,
        targetPreviousSelector: tmpPreviousSelector,
        targetCurrentSelector: tmpCurrentSelector,
        sourceDiagramshown: false,
        targetDiagramshown: true
      });
      console.log('TargetDropdown selected ', this.state.targetNodeStr);
    }
  }, {
    key: "handleMapButtonClick",
    value: function handleMapButtonClick() {
      var currentNodeMapping = this.state.sourceNodeStr + ":" + this.state.targetNodeStr;
      console.log('handleMapButtonClick currentNodeMapping ', currentNodeMapping);
      if (this.state.allNodeMapping.length > 0) {
        var allMappingStr = this.state.allNodeMapping + "," + currentNodeMapping;
      } else {
        var allMappingStr = currentNodeMapping;
      }

      this.setState({
        allNodeMapping: allMappingStr
      });
      console.log('handleMapButtonClick nodeMapping' + this.state.allNodeMapping);
    }
  }, {
    key: "render",
    value: function render() {

      var sourceProcessDefinitions = [{ name: 'Name', value: 'Evaluation' }, { name: 'Version', value: '1' }, { name: 'Project/Container ID', value: 'evaluation_1.0.0-SNAPSHOT' }];

      var targetProcessDefinitions = [{ name: 'Name', value: 'Evaluation' }, { name: 'Version', value: '2' }, { name: 'Project/Container ID', value: 'evaluation_2.0.0-SNAPSHOT' }];

      var sourceNode = [{ value: '_D3E17247-1D94-47D8-93AD-D645E317B736', label: 'Self Evaluation:_D3E17247-1D94-47D8-93AD-D645E317B736' }, { value: '_E35438DF-03AF-4D7B-9DCB-30BC70E7E92E', label: 'PM Evaluation:_E35438DF-03AF-4D7B-9DCB-30BC70E7E92E' }, { value: '_AB431E82-86BC-460F-9D8B-7A7617565B36', label: 'HR Evaluation:_AB431E82-86BC-460F-9D8B-7A7617565B36' }];

      var targetNode = [{ value: '_D3E17247-1D94-47D8-93AD-D645E317B736', label: 'Self Evaluation:_D3E17247-1D94-47D8-93AD-D645E317B736' }, { value: '_E35438DF-03AF-4D7B-9DCB-30BC70E7E92E', label: 'PM Evaluation:_E35438DF-03AF-4D7B-9DCB-30BC70E7E92E' }, { value: '_AB431E82-86BC-460F-9D8B-7A7617565B36', label: 'HR Evaluation:_AB431E82-86BC-460F-9D8B-7A7617565B36' }, { value: '_B8E4DA1E-A62B-49C2-9A94-FEE5F5FD2B4E', label: 'Input:_B8E4DA1E-A62B-49C2-9A94-FEE5F5FD2B4E' }];

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "table",
          { border: "0" },
          _react2.default.createElement(
            "tbody",
            null,
            _react2.default.createElement(
              "tr",
              null,
              _react2.default.createElement(
                "td",
                null,
                _react2.default.createElement(
                  "table",
                  null,
                  _react2.default.createElement(
                    "tbody",
                    null,
                    _react2.default.createElement(
                      "tr",
                      null,
                      _react2.default.createElement(
                        "td",
                        null,
                        _react2.default.createElement(_DropdownNode2.default, {
                          options: sourceNode,
                          onDropdownChange: this.handleSourceDropdownChange
                        })
                      ),
                      _react2.default.createElement(
                        "td",
                        null,
                        _react2.default.createElement(_DropdownNode2.default, {
                          options: targetNode,
                          onDropdownChange: this.handleTargetDropdownChange
                        })
                      ),
                      _react2.default.createElement(
                        "td",
                        null,
                        _react2.default.createElement(_MapButton2.default, { onMapButtonClick: this.handleMapButtonClick })
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement("tr", null),
            _react2.default.createElement(
              "tr",
              null,
              _react2.default.createElement(
                "td",
                null,
                _react2.default.createElement(
                  "div",
                  { className: "result" },
                  "Node Mapping result:",
                  _react2.default.createElement(
                    "strong",
                    null,
                    " ",
                    this.state.allNodeMapping,
                    " "
                  )
                )
              )
            ),
            _react2.default.createElement(
              "tr",
              null,
              _react2.default.createElement(
                "td",
                null,
                _react2.default.createElement(_DefinitionDiagrams2.default, {
                  sourceCurrentSelector: this.state.sourceCurrentSelector,
                  sourcePreviousSelector: this.state.sourcePreviousSelector,

                  targetCurrentSelector: this.state.targetCurrentSelector,
                  targetPreviousSelector: this.state.targetPreviousSelector,

                  sourceDiagramButtonClick: this.handleSourceDiagramButtonClick,
                  targetDiagramButtonClick: this.handleTargetDiagramButtonClick,

                  sourceDiagramshown: this.state.sourceDiagramshown,
                  targetDiagramshown: this.state.targetDiagramshown
                })
              )
            )
          )
        )
      );
    }
  }]);

  return DefinitionMappingTable;
}(_react.Component);

exports.default = DefinitionMappingTable;