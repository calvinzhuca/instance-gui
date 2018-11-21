import React from "react";
import ReactDOM from "react-dom";
//import {Wizard} from "patternfly-react"

//import WizardForm from "./component/WizardForm";
import WizardPyMain from "./component/WizardPyMain";
import "./index.css";


document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    React.createElement(WizardPyMain),
    document.getElementById("mount")
  );
});
