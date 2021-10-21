import "./index.scss";
import * as waterDropIcon from "../../../assets/img/waterdrop.svg";
import * as windIcon from "../../../assets/img/wind.svg";
import * as pressureIcon from "../../../assets/img/pressure.svg";
import { getLocation } from "../../../requester";
import renderDayRow from "./renderDayRow";
import renderHourRow from "./renderHourRow";
import { addNotification } from "../../../utils/notificationService/notificationService";

const getHomeHTML = (obj) => {
  const { city, temp, status, humidity, wind, icon, hourly, daily } = obj || {};
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
            <img class="humidity-icon" src="${
              waterDropIcon.default
            }" alt="water drop"/>
            <span class="humidity">${humidity}%</span>
          </div>
          <div class="wind-info">
            <img class="wind-icon" src="${windIcon.default}" alt="wind"/>
            <span class="wind-speed">${wind}km/h</span>
          </div>
          <div class="pressure-info">
            <img class="pressure-icon" src="${
              pressureIcon.default
            }" alt="pressure"/>
            <span class="pressure">0.43mBar</span>
          </div>
        </div>
        <div class="hourly-weather">${renderHourRow(hourly)}</div>
        <div class="next-days">${renderDayRow(daily)}</div>
     `;
};

const initPage = async (element) => {
  const locations = await getLocation();
  if (!locations.cod) {
    const fragment = document.createElement("div");
    fragment.classList.add("home-page");
    fragment.innerHTML = getHomeHTML({
      city: locations.timezone,
      temp: Math.round(locations.current.temp),
      status: locations.current.weather[0].description,
      humidity: locations.current.humidity,
      wind: locations.current.wind_speed,
      icon: locations.current.weather[0].icon,
      hourly: locations.hourly,
      daily: locations.daily,
    });
    element.appendChild(fragment);
  } else {
    addNotification("error", locations.message);
  }
};

const homePage = () => {
  const page = document.createElement("div");

  initPage(page);

  return page;
};

export default homePage;
