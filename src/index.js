import React from "react";
import ReactDOM from "react-dom";

import MainPageUsingSecondaryTab from './component/MainPageUsingSecondaryTab';
document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    React.createElement(MainPageUsingSecondaryTab),
    document.getElementById("mount")
  );
});
