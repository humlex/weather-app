import React, { FC } from "react";
import { WeatherAction, WeatherData } from "../../store/types";

import "./styled.scss";

interface WeatherProps {
  data: WeatherData;
}

const Weather: FC<WeatherProps> = ({ data }) => {
  const fahrenheit = (data.main.temp * 1.8 - 469.67).toFixed(2);
  const celsius = (data.main.temp - 273.15).toFixed(2);

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">
          {data.name} - {data.sys.country}
        </h1>

        <div className="results">
          <div className="level">
            <p className="heading">{data.weather[0].description}</p>
            <p>
              <img
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                alt="image"
              />
            </p>
          </div>

          <div className="temperature">
            <p className="results-title">Temperature</p>
            <p>{data.main.temp}K</p>
            <p>{fahrenheit}F</p>
            <p>{celsius}C</p>
          </div>

          <div className="humidity">
            <p className="results-title">Humidity</p>
            <p>{data.main.humidity}</p>
          </div>

          <div className="pressure">
            <p className="results-title">Pressure</p>
            <p>{data.main.pressure}</p>
          </div>

          <div className="wind">
            <p className="results-title">Wind</p>
            <p>{data.wind.speed} m/s</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Weather;
