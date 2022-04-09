import React, { useState } from "react";
import "./App.css";
import Search from "./components/Search/Search";
import Weather from "./components/Weather/Weather";

function App() {
  // const apiKey = "96b7e702087a5e96f30cc8a2e1e36891";
  const [weatherData, setWeatherData] = useState([{}]);

  return (
    <div className="container">
      <h1> Weather App </h1>
      <Search />
      <Weather />
    </div>
  );
}

export default App;
