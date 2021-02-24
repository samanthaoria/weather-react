import React from "react";
import { CityForm } from "../city-form/CityForm";

export const FormContainer = ({onCityChange}) => (
  <div className="container">
    <div className="city-form">
      <CityForm onCityChange={onCityChange}/>
    </div>
  </div>
);
