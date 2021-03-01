import React from "react";
import { CityForm } from "../city-form/CityForm";
import "./CityFormContainer.css";

export const CityFormContainer = (props) => (
  <div className="city-form-container">
    <CityForm {...props} />
  </div>
);
