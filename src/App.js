import './App.css';

import Search from "./Search";
import WeatherIcon from "./WeatherIcon";
import WeatherDescription from "./WeatherDescription";
import Footer from "./Footer";

function App() {
  return (
    <div className="App container">
      <div className="">
        <h1 className="col-12" id="city">
          Kyiv
        </h1>
        <h3 className="col-12" id="date">
          Monday 20:17
        </h3>
      </div>
      <Search />
      <div className="row">
        <WeatherIcon />
        <WeatherDescription temperature={20} description="Clouds" />
      </div>
      <Footer />
      </div>
  );
}

export default App;
