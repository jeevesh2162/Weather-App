import { Search, MapPin, Wind } from "react-feather";
import "./App.css";
import getWeather from "./api/api";
import { useState } from "react";
import dateFormat from "dateformat";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  const getWeatherByCity = async () => {
    const weatherData = await getWeather(city);
    setWeather(weatherData);
    setCity("");
  };


  return (
    <div className="wrapper">
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="app">
        <h1>Weather App</h1>
        <div className="input-wrapper">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter City Name"
          ></input>
          <button onClick={() => getWeatherByCity()}>
            <Search></Search>
          </button>
        </div>

        {weather && weather.weather && (
          <div className="content">
            <div className="location d-flex">
              <MapPin></MapPin>
              <h2>
                {weather.name} <span>({weather.sys.country})</span>
              </h2>
            </div>

            <div className="weatherdesc d-flex flex-c">
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              ></img>
              <h3>{weather.weather[0].description}</h3>
            </div>

            <div className="tempstats d-flex flex-c">
              <h1>
                {weather.main.temp}
                <span>&deg;C</span>
              </h1>
            </div>

            <div className="windstats d-flex">
              <Wind></Wind>
              <h3>
                Wind is {weather.wind.speed} Knots in {weather.wind.deg}&deg;
              </h3>
            </div>
          </div>
        )}

        {!weather.weather && (
          <div className="content">
            <h4>No Data Found</h4>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;
