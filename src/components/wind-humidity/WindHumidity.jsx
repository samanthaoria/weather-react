import React from "react";

export const WindHumidity = () => (
  <>
    <li>
      <span className="sky-condition italic bold" id="sky-condition">
        Sky Condition:
      </span>
      <span className="result-sky-condition italic bold light-blue">
        {" "}
        Cloudy{" "}
      </span>
    </li>
    <li>
      <div className="feels-like italic bold" id="feels-like">
        Feels like:
        <span className="italic bold light-blue" id="result-feels-like">
          34ºC
        </span>
      </div>
    </li>
  </>
);