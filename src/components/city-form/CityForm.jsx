import React from "react";
import { CityInput } from "../city-input/CityInput";
import { CurrentButton } from "../current-button/CurrentButton";
import { SearchButton } from "../search-button/SearchButton";

export const CityForm = () => (
  <form>
    <div className="form-group">
      <CityInput />
      <CurrentButton />
      <SearchButton />
    </div>
  </form>
);