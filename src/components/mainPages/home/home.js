import "./index.scss";
import * as waterDropIcon from "../../../assets/img/waterdrop.svg";
import * as windIcon from "../../../assets/img/wind.svg";
import * as pressureIcon from "../../../assets/img/pressure.svg";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const initPage = (obj) => {
  const page = document.createElement("div");
  page.classList.add("home-page");
  const { city, temp, status, humidity, wind, icon } = obj || {};
  page.innerHTML = `
        <div class="header">
          <div class="header-info">
            <span class="city">${city}</span>
            <span class="temp">${temp}°</span>
            <span class="status">${status}</span>
          </div>
          <img class="header-icon" src="http://openweathermap.org/img/wn/${icon}.png"  alt="icon"/>
        </div>
        <div class="info-row">
          <div class="humidity-info">
            <img class="humidity-icon" src="${waterDropIcon.default}" alt="water drop"/>
            <span class="humidity">${humidity}%</span>
          </div>
          <div class="wind-info">
            <img class="wind-icon" src="${windIcon.default}" alt="wind"/>
            <span class="wind-speed">${wind}km/h</span>
          </div>
          <div class="pressure-info">
            <img class="pressure-icon" src="${pressureIcon.default}" alt="pressure"/>
            <span class="pressure">0.43mBar</span>
          </div>
        </div>
        <div class="hourly-weather"></div>
        <div class="next-days"></div>
     `;
  document.querySelector(".app").appendChild(page);
};

const hourRow = (obj) => {
  for (let i = 0; i <= 5; i++) {
    const { temp, weather } = obj[4 * i];
    const time = (new Date().getHours() + 4 * i) % 24;
    const elem = document.createElement("div");
    elem.classList.add("hour-block");
    elem.innerHTML = `
            <span class="time">${time}:00 h</span>
            <img class="hour-icon" src="http://openweathermap.org/img/wn/${
              weather[0].icon
            }.png" alt="hour icon"/>
            <span class="temp">${Math.round(temp)}°</span>
          `;
    document.querySelector(".hourly-weather").appendChild(elem);
  }
};

const dayRow = (obj) => {
  for (let i = 0; i <= 2; i++) {
    const { weather, temp } = obj[i];
    const day = new Date().getDay() + 1 + i;
    const elem = document.createElement("div");
    elem.classList.add("day-row");
    elem.innerHTML = `
             <span class="day">${days[day]}</span>
            <img class="day-icon" src="http://openweathermap.org/img/wn/${
              weather[0].icon
            }.png" alt="day icon"/>
            <span class="max-temp">${Math.round(temp.max)}°</span>
            <span class="min-temp">${Math.round(temp.min)}°</span>
          `;
    document.querySelector(".next-days").appendChild(elem);
  }
};

const getObj = (lat, long) => {
  if (!lat || !long) {
    lat = 43.10535;
    long = -75.29128;
  }
  const key = "d0b9cf5011a1d4ea6ac31f2492fda53d";
  fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${key}&units=metric`
  )
    .then((resp) => resp.json()) // Convert data to json
    .then((data) => {
      if (!data.cod) {
        initPage({
          city: data.timezone,
          temp: Math.round(data.current.temp),
          status: data.current.weather[0].description,
          humidity: data.current.humidity,
          wind: data.current.wind_speed,
          icon: data.current.weather[0].icon,
        });
        hourRow(data.hourly);
        dayRow(data.daily);
      } else {
        document.querySelector(
          ".search-page"
        ).innerHTML = `<span>Service error</span>`;
      }
    })
    .catch(() => {
      // errorHandler();
    });
};

const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (cb) => {
        getObj(cb.coords.latitude, cb.coords.longitude);
      },
      () => {
        getObj(43.10535, -75.29128);
      }
    );
  }
};

export default getLocation;
