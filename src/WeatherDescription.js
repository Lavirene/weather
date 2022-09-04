import React from "react";

import "./WeatherDescription.css";

import WindSpeed from "./WindSpeed";
import Humidity from "./Humidity";

export default function WeatherDescription(props) {
  return (
    <div className="col-sm-6">
      <h5 id="weather-description" className="card-title weather-description">
        {props.description}
      </h5>
      <p className="card-text weather-temp">
        <span id="temperature">{props.temperature}</span>
        <a className="active" href="/" id="celciusSwitcher">
          °C
        </a>
        |
        <a href="/" id="fahrenheitSwitcher">
          °F
        </a>
      </p>

      <WindSpeed windSpeed={10} />
      <Humidity humidity={10} />
    </div>
  );
}
