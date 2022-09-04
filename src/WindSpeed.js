import React from "react";

export default function WindSpeed(props) {
  return (
    <p>
      Wind speed: <span id="wind">{props.windSpeed}</span> km/h
    </p>
  );
}
