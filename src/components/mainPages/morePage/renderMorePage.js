import "./index.scss";
import * as waterDropIcon from "../../../assets/img/waterdrop.svg";
import * as windIcon from "../../../assets/img/wind.svg";
import * as pressureIcon from "../../../assets/img/pressure.svg";
import { BUTTON_ROWS } from "../../../utils/consts";

const renderButtonRows = () => {
  let rowsBlock = ``;
  BUTTON_ROWS.forEach((obj) => {
    const { name, value } = obj;
    rowsBlock += `<div class="btn-row">
            <span class="name">${name}</span>
            <span class="value">${value}</span>
            <div class="arrow">&gt;</div>
          </div>`;
  });
  return rowsBlock;
};

export default (obj) => {
  if (Object.keys(obj).length) {
    const { city, country, temp, humidity, wind, icon } =
      obj[Object.keys(obj)[0]];
    return `
  <div class="ur-location">
  <svg class="location-icon" enable-background="new 0 0 64 64" version="1.1" viewBox="0 0 64 64" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Glyph"><path d="M52.708,20.849C52.708,8.185,44.584,0,32,0S11.292,8.185,11.292,20.849c0,10.556,16.311,31.747,18.175,34.118l2.278,2.928   c-9.542,0.025-17.237,1.38-17.237,3.051c0,1.686,7.836,3.053,17.502,3.053s17.502-1.367,17.502-3.053   c0-1.672-7.704-3.028-17.255-3.051l2.292-2.928C36.396,52.581,52.708,31.39,52.708,20.849z M25.294,20.835   c0-3.604,3.002-6.526,6.706-6.526c3.704,0,6.706,2.922,6.706,6.526S35.704,27.361,32,27.361   C28.296,27.361,25.294,24.439,25.294,20.835z"/></g></svg>
          <span class="txt">Your location now</span>
        </div>
        <div class="place-name">${city}, ${country}</div>
        <img class="status-icon" src="http://openweathermap.org/img/wn/${icon}.png" alt="icon"/>
        <div class="status">Moonlight</div>
        <div class="temp">${temp}°</div>
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
        <div class="btn-rows">${renderButtonRows()}</div>
  `;
  }
  return `<span class="no-match">Your history is clean:c</span>`;
};
