import React from "react";
import { useState, useEffect } from "react";

function Weather() {
  const [weather, setWeather] = useState("");
  const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
  // API를 직접적으로 넣으면 바로 적용이 된다. 하지만 env파일을 넣으면 적용이안된다. 검색해보자.

  const getWeather = (lat, lon) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        const temperature = json.main.temp;
        const place = json.name;
        setWeather(`${temperature} @ ${place}`);
      });
  };

  const handleGeoSuccess = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    getWeather(latitude, longitude);
  }

  const handleGeoError = () => {
    console.log("failed!");
  }

  const askForcoords = () => {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
  }

  useEffect(() => {
    askForcoords();
  }, []);

  return <div className="js-weather">{weather && <p>{weather}</p>}</div>;
}

function Practice08 () {
  return <Weather />;
}

export default Practice08;