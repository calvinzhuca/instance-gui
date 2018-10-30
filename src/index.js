import React from "react";
import ReactDOM from "react-dom";
import WizardForm from "./component/WizardForm";
import "./index.css";


document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    React.createElement(WizardForm),
    document.getElementById("mount")
  );
});
