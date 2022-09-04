import React from "react";

import "./WeatherIcon.css";

export default function WeatherIcon() {
  return (
    <div className="col-sm-6 sun-icon">
      <img
        id="weather-icon"
        src="http://openweathermap.org/img/wn/03n@2x.png"
        alt="weather-icon"
      />
    </div>
  );
}
