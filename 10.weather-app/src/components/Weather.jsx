import React, { useEffect, useState } from 'react'
import '../components/Weather.css';
import search_logo from '../images/search.png';
import cloud_logo from '../images/cloud.png';
import drizzle_logo from '../images/drizzle.png';
import humidy_logo from '../images/humidy.webp';
import rain_logo from '../images/rain.png';
import snow_logo from '../images/snow.png';
import sun_logo from '../images/sun.png';
import wind_logo from '../images/wind.png';
import axios from 'axios';


const API_KEY = "d0236a5fa7fd920af42e3f8414e65fd3";


function Weather() {
  const [city, setCity] = useState("Ankara");
  const [currentWeather, setCurrentWeather] = useState(null);
  const [location, setLocation] = useState("");
  const [icon, setIcon] = useState(null);

  const getAllDataByCity = async () => {
    const BASE_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;

    try {
      const response = await axios.get(BASE_URL);

      const now = new Date();

      const nearestWeather = response.data.list.find((item) => {
        return new Date(item.dt_txt) >= now;
      });

      setCurrentWeather(nearestWeather);
      setLocation(response.data.city.name);
      setIcon(nearestWeather.weather[0].icon);

    } catch (error) {
      setCurrentWeather(null);
      setLocation("");
      alert("Şehir bulunamadı!");
      console.error(error);
    }
  };

  const allIcons ={
    "01d": sun_logo,
    "01n": sun_logo,
    "02d": cloud_logo,
    "02n": cloud_logo,
    "03d": cloud_logo, 
    "03n": cloud_logo,
    "04d": drizzle_logo,
    "04n": drizzle_logo,
    "09d": rain_logo,
    "09n": rain_logo,
    "10d": rain_logo,
    "10n": rain_logo,
    "13d": snow_logo,
    "13n": snow_logo,
  }
  console.log(allIcons[icon]);

  useEffect(() => {
    getAllDataByCity();
  }, []);

  const search = () => {
    if (city.trim() === "") {
      alert("Lütfen bir şehir adı giriniz.");
      return;
    }

    getAllDataByCity();
  };

  return (
    <div className="weather">
      <div className="search-bar">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          type="text"
          placeholder="Search"
        />
        <img src={search_logo} onClick={search} />
      </div>

      <img src={allIcons[icon]} className="weather-icon" />

      <p className="temperature">
        {currentWeather ? Math.round(currentWeather.main.temp) : "--"}°C
      </p>

      <p className="location">{location || "City"}</p>

      <div className="weather-data">
        <div className="col">
          <img src={humidy_logo} alt="" />
          <div>
            <p>{currentWeather ? currentWeather.main.humidity : "--"}%</p>
            <span>Humidity</span>
          </div>
        </div>

        <div className="col">
          <img src={wind_logo} alt="" />
          <div>
            <p>{currentWeather ? currentWeather.wind.speed : "--"} Km/h</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Weather