import * as waterDropIcon from "../../../assets/img/waterdrop.svg";
import * as windIcon from "../../../assets/img/wind.svg";
import {
  getLocalStorageField,
  setLocalStorageField,
} from "../../../utils/localStorageManager";
import { LOCAL_STORAGE_KEYS } from "../../../utils/consts";

const addCardListener = (node, obj, id) => {
  node.addEventListener("click", () => {
    const history = JSON.parse(
      getLocalStorageField(LOCAL_STORAGE_KEYS.HISTORY)
    );
    const newHistory = history ? { ...history, [id]: obj } : { [id]: obj };
    const lastClicked = { [id]: obj };
    setLocalStorageField(
      LOCAL_STORAGE_KEYS.HISTORY,
      JSON.stringify(newHistory)
    );
    setLocalStorageField(
      LOCAL_STORAGE_KEYS.LAST_CLICKED,
      JSON.stringify(lastClicked)
    );
    location.hash = "more";
  });
};

const getCardHTML = (obj) => {
  const { city, country, temp, humidity, wind, icon } = obj;
  return `
            <div class="top">
              <div class="weather-info">
              <span class="temp">${temp}°</span>
              <span class="city">${city}</span>
              <span class="country">${country}</span></div>
              <img class="weather-icon" src="http://openweathermap.org/img/wn/${icon}.png" alt="icon"/>
            </div>
            <div class="bottom">
              <div class="humidity-info">
                <img class="humidity-icon" src="${waterDropIcon.default}" alt="humidity"/>
                <span class="humidity">${humidity}%</span>
              </div>
              <div class="wind-info">
                <img class="wind-icon" src="${windIcon.default}" alt="wind"/>
                <span class="wind-speed">${wind}km/h</span>
              </div>
            </div>
          `;
};

export default (obj, id) => {
  const cardWrapper = document.createElement("div");
  cardWrapper.classList.add("card");
  cardWrapper.innerHTML = getCardHTML(obj);
  addCardListener(cardWrapper, obj, id);
  return cardWrapper;
};
