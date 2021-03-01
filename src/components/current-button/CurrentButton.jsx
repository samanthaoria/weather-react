import React from "react";
import "./CurrentButton.css";
import axios from "axios";

export const CurrentButton = (props) => {
  function onClick() {
    props.getCurrentLocation();
  }

  return (
    <button
      onClick={onClick}
      className="btn btn-primary current-button"
      id="btn-current"
    >
      📍Current
    </button>
  );
};
