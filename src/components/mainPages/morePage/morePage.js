import "./index.scss";
import * as waterDropIcon from "../../../assets/img/waterdrop.svg";
import * as windIcon from "../../../assets/img/wind.svg";
import * as pressureIcon from "../../../assets/img/pressure.svg";
import * as locationIcon from "../../../assets/img/location.svg";

const getObj = () => {
  const lastClicked = localStorage.getItem("lastClicked");
  if (lastClicked) {
    return JSON.parse(lastClicked);
  }
  const history = JSON.parse(localStorage.getItem("history"));
  if (history) {
    return JSON.parse(history[0]);
  }
  return null;
};

const morePage = () => {
  const page = document.createElement("div");
  const obj = getObj() || {};
  page.classList.add("more-page");
  const { city, country, temp, humidity, wind, icon } = Object.keys(obj).length
    ? obj[Object.keys(obj)[0]]
    : {};
  page.innerHTML = Object.keys(obj).length
    ? `
  <div class="ur-location">
          <img class="location-icon" src="${locationIcon.default}" alt="location"/>
          <span class="txt">Your location now</span>
        </div>
        <div class="place-name">${city}, ${country}</div>
        <img class="status-icon" src="http://openweathermap.org/img/wn/${icon}.png" alt="icon"/>
        <div class="status">Moonlight</div>
        <div class="temp">${temp}°</div>
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
        <div class="btn-rows">
          <div class="btn-row">
            <span class="name">Temperature</span>
            <span class="value">celcius</span>
            <div class="arrow">&gt;</div>
          </div>
          <div class="btn-row">
            <span class="name">Wind speed</span>
            <span class="value">km/s</span>
            <div class="arrow">&gt;</div>
          </div>
          <div class="btn-row">
            <span class="name">Source</span>
            <span class="value">openWeatherAPI</span>
            <div class="arrow">&gt;</div>
          </div>
        </div>
  `
    : `<span class="no-match">Your history is clean:c</span>`;
  document.querySelector(".app").appendChild(page);
};

export default morePage;
