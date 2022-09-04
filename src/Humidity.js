import React from "react";

export default function Humidity(props) {
  return (
    <p>
      Humidity: <span id="humidity">{props.humidity}</span>%
    </p>
  );
}
