import React from "react";
import ReactDOM from "react-dom";

//import WizardPyMain from "./component/WizardPyMain";
//import PlanListMain from "./component/planList/PlanListMain";
import PlanTable from "./component/planTable/PlanTable";


document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    React.createElement(PlanTable),
    document.getElementById("mount")
  );
});
