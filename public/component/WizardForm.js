"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _reactFinalForm = require("react-final-form");

var _axios = _interopRequireDefault(require("axios"));

var _Wizard = _interopRequireDefault(require("./Wizard"));

var _WizardFormStyles = _interopRequireDefault(require("./WizardFormStyles"));

var _PageDefinitionTables = _interopRequireDefault(require("./PageDefinitionTables"));

var _PagePlanName = _interopRequireDefault(require("./PagePlanName"));

var _PageMapping = _interopRequireDefault(require("./PageMapping"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

class WizardForm extends _react.Component {
  constructor(props) {
    super(props);
    this.state = {
      sourceInfo: '',
      targetInfo: ''
    };
    this.setInfo = this.setInfo.bind(this);
  }

  setInfo(sourceInfo, targetInfo) {
    console.log('setInfo sourceInfo ' + sourceInfo.processId + ' targetInfo ' + targetInfo.processId);
    this.setState({
      sourceInfo: sourceInfo,
      targetInfo: targetInfo
    });
  }

  render() {
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

    const onSubmit = async values => {
      await sleep(300);
      var plan = JSON.stringify(values, 0, 2); //from nodemapping, default is string, not object, also it auto adds \ in front of "
      //e.g: "mappings": "{\"_D3E17247-1D94-47D8-93AD-D645E317B736\":\"_011ED858-F841-4C44-B0F1-F3BE388ADDA5\"}"
      //while the expected is: "mappings": {"_D3E17247-1D94-47D8-93AD-D645E317B736":"_011ED858-F841-4C44-B0F1-F3BE388ADDA5"}
      //so need to take out the uncessary parts otherwise will fail in PIM serviceUrl
      //step 1, replace all \" to "

      plan = plan.replace(/\\\"/g, '\"');
      console.log('plan1: ' + plan); //step 2, replace "{ to {

      plan = plan.replace('\"\{', '\{');
      console.log('plan2: ' + plan); //step3, replace }" to }

      plan = plan.replace('\}\"', '\}');
      console.log('plan3: ' + plan);
      const serviceUrl = 'http://localhost:8280/plans';

      _axios.default.post(serviceUrl, plan, {
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (response) {
        console.log('response: ' + response.data);
      }).catch(function (error) {
        console.log('error: ' + error);
      });

      window.alert("submitted this plan" + plan);
    };

    const App = () => _react.default.createElement(_WizardFormStyles.default, null, _react.default.createElement("h1", null, "Process Instances Migration"), _react.default.createElement("h2", null, "Wizard Form"), _react.default.createElement(_Wizard.default, {
      initialValues: {
        name: "test Plan",
        description: "test description"
      },
      onSubmit: onSubmit
    }, _react.default.createElement(_Wizard.default.Page, null, _react.default.createElement(_PageDefinitionTables.default, {
      sourceInfo: this.state.sourceInfo,
      targetInfo: this.state.targetInfo,
      setInfo: this.setInfo
    })), _react.default.createElement(_Wizard.default.Page, null, _react.default.createElement(_PagePlanName.default, null)), _react.default.createElement(_Wizard.default.Page, null, _react.default.createElement(_PageMapping.default, {
      sourceInfo: this.state.sourceInfo,
      targetInfo: this.state.targetInfo
    })), _react.default.createElement(_Wizard.default.Page, null, _react.default.createElement("h2", null, "Please review this plan before submit to Process Instances Migration Service"), _react.default.createElement("a", {
      id: "downloadAnchorElem",
      style: {
        display: 'none'
      }
    }))));

    return _react.default.createElement("div", null, _react.default.createElement(App, null));
  }

}

exports.default = WizardForm;