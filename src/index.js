import React from "react";
import ReactDOM from "react-dom";

import WizardPyMain from "./component/WizardPyMain";


document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    React.createElement(WizardPyMain),
    document.getElementById("mount")
  );
});
