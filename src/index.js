import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import WizardForm from "./component/WizardForm";
import "./index.css";


document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    React.createElement(WizardForm),
    document.getElementById("mount")
  );
});
