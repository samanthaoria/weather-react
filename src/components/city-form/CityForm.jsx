import React, { useState } from "react";
import "./CityForm.css";
import { CityInput } from "../city-input/CityInput";
import { CurrentButton } from "../current-button/CurrentButton";
import { SearchButton } from "../search-button/SearchButton";

export const CityForm = ({ onCityChange, getCurrentLocation }) => {
  const [cityValue, setCityValue] = useState("");
  return (
    <div className="form-group city-form-group">
      <input
        type="text"
        placeholder="Enter a city"
        autocomplete="off"
        className="city-input"
        id="city-search"
        autoFocus="on"
        onChange={(e) => setCityValue(e.target.value)}
      />

      <button
        type="submit"
        className="btn btn-primary"
        onClick={() => onCityChange(cityValue)}
      >
        Search
      </button>

      <CurrentButton getCurrentLocation={getCurrentLocation} />
    </div>
  );
};
