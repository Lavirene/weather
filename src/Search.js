import React from "react";

export default function Search() {
  return (
    <form id="search-form">
      <input
        id="city-input"
        type="search"
        autoFocus="on"
        autoComplete="off"
        placeholder="Enter a city"
      />

      <input type="submit" value="Search" />
    </form>
  );
}
