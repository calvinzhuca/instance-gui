import React from "react";
import ReactDOM from "react-dom";

import MigrationPlans from './component/MigrationPlans';

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    React.createElement(MigrationPlans),
    document.getElementById("mount")
  );
});
