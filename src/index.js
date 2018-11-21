import React from "react";
import ReactDOM from "react-dom";
//import WizardForm from "./component/WizardForm";
import WizardPyMain from "./component/WizardPyMain";
import "./index.less";


document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    React.createElement(WizardPyMain),
    document.getElementById("mount")
  );
});
