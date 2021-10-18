import "./index.scss";
import * as waterDropIcon from "../../../assets/img/waterdrop.svg";
import * as windIcon from "../../../assets/img/wind.svg";
import * as pressureIcon from "../../../assets/img/pressure.svg";
import { errorHandler } from "../../../utils/utils";
import { getLocation } from "../../../requester";
import renderDayRow from "./renderDayRow";
import renderHourRow from "./renderHourRow";

const getHomeHTML = (obj) => {
  const { city, temp, status, humidity, wind, icon } = obj || {};
  return `
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
};

const initPage = (obj) => {
  const page = document.createElement("div");
  page.classList.add("home-page");
  page.innerHTML = getHomeHTML(obj);
  document.querySelector(".app").appendChild(page);
};

const callbackFunction = (data) => {
  if (!data.cod) {
    initPage({
      city: data.timezone,
      temp: Math.round(data.current.temp),
      status: data.current.weather[0].description,
      humidity: data.current.humidity,
      wind: data.current.wind_speed,
      icon: data.current.weather[0].icon,
    });
    renderHourRow(data.hourly);
    renderDayRow(data.daily);
  } else {
    errorHandler(data.message);
  }
};

const homePage = () => {
  getLocation(callbackFunction);
};

export default homePage;
