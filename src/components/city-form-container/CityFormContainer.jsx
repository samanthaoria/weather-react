import React from "react";
import { CityForm } from "../city-form/CityForm";
import "./CityFormContainer.css";

export const CityFormContainer = ({ onCityChange }) => (
  <div className="city-form-container">
    <CityForm onCityChange={onCityChange} />
  </div>
);
