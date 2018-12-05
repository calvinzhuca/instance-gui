import React from "react";
import ReactDOM from "react-dom";

import MigrationPlanMain from "./component/MigrationPlanMain";

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    React.createElement(MigrationPlanMain),
    document.getElementById("mount")
  );
});
