import React, { useState } from "react";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [temperature, setTemperature] = useState("");

  function handleCurrentLocationOk(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const API_KEY = "f7fe21bbdb94774cf7eff66143dc833d";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCity(`${data.name}, ${data.sys.country}`);
        setWeather(`${data.weather[0].main}`);
        setTemperature(`${data.main.temp}`);
      });
  }

  function handleCurrentLocationError() {
    alert("Can't find you. No weather for you.");
  }

  navigator.geolocation.getCurrentPosition(
    handleCurrentLocationOk,
    handleCurrentLocationError
  );

  return (
    <div id="weather">
      {city ? (
        <span>
          {temperature} ℃, {weather} in {city}
        </span>
      ) : null}
    </div>
  );
}

export default Weather;
