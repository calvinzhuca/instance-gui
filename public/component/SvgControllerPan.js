"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactSvgPanZoom = require("react-svg-pan-zoom");

var _reactSvgmt = require("react-svgmt");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

class SvgControllerPan extends _react.Component {
  constructor(props, context) {
    super(props, context);
    this.Viewer = null;
  }

  componentDidMount() {
    this.Viewer.fitToViewer();
  }

  render() {
    return _react.default.createElement("div", null, _react.default.createElement(_reactSvgPanZoom.ReactSVGPanZoom, {
      style: {
        border: "1px solid black"
      },
      width: 800,
      height: 402,
      ref: Viewer => this.Viewer = Viewer,
      onClick: event => console.log('click', event.x, event.y, event.originalEvent),
      onMouseUp: event => console.log('up', event.x, event.y),
      onMouseMove: event => console.log('move', event.x, event.y),
      onMouseDown: event => console.log('down', event.x, event.y)
    }, _react.default.createElement("svg", {
      width: "2815",
      height: "1415"
    }, _react.default.createElement(_reactSvgmt.SvgLoader, {
      svgXML: this.props.svgcontents
    }, _react.default.createElement(_reactSvgmt.SvgProxy, {
      selector: this.props.previousSelector,
      fill: "white"
    }), _react.default.createElement(_reactSvgmt.SvgProxy, {
      selector: this.props.currentSelector,
      fill: "yellow"
    })))));
  }

}

exports.default = SvgControllerPan;
;