import "./index.scss";
import * as waterDropIcon from "../../../assets/img/waterdrop.svg";
import * as windIcon from "../../../assets/img/wind.svg";
import * as loupeIcon from "../../../assets/img/loupe.svg";
import * as pencilIcon from "../../../assets/img/pencil.svg";
import errorHandler from "../../../utils/utils";

let timeout;

const createCard = (obj, id) => {
  const { city, country, temp, humidity, wind, icon } = obj;
  const card = `
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
  const cardd = document.createElement("div");
  cardd.classList.add("card");
  cardd.innerHTML = card;
  cardd.addEventListener("click", () => {
    const history = JSON.parse(localStorage.getItem("history"));
    const newHistory = history ? { ...history, [id]: obj } : { [id]: obj };
    const lastClicked = { [id]: obj };
    localStorage.setItem("history", JSON.stringify(newHistory));
    localStorage.setItem("lastClicked", JSON.stringify(lastClicked));
    location.hash = "more";
  });
  document.querySelector(".cards-block").appendChild(cardd);
};

const getCityList = (cityName) => {
  const key = "d0b9cf5011a1d4ea6ac31f2492fda53d";
  fetch(
    `https://api.openweathermap.org/data/2.5/find?q=${cityName}&type=like&units=metric&sort=population&cnt=3&appid=${key}`
  )
    .then((resp) => resp.json()) // Convert data to json
    .then((data) => {
      if (+data.cod === 200) {
        document.querySelector(".cards-block").innerHTML = ``;
        if (data.list.length) {
          data.list.forEach((elem) => {
            createCard(
              {
                city: elem.name,
                country: elem.sys.country,
                temp: Math.round(elem.main.temp),
                humidity: elem.main.humidity,
                wind: elem.wind.speed,
                icon: elem.weather[0].icon,
                status: elem.weather[0].description,
              },
              String(elem.id)
            );
          });
        } else {
          document.querySelector(
            ".cards-block"
          ).innerHTML = `<span class="no-match">There is no such city:c</span>`;
        }
      } else {
        errorHandler(data.message);
      }
    })
    .catch(() => {
      errorHandler(`Something went wrong`);
    });
};

const addListenerToInput = () => {
  document.querySelector(".search-input").addEventListener("input", (e) => {
    clearTimeout(timeout);
    timeout = window.setTimeout(() => {
      getCityList(e.target.value);
      clearTimeout(timeout);
    }, 2000);
  });
  document.querySelector(".search-input").addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      clearTimeout(timeout);
      getCityList(e.target.value);
      document.querySelector(".search-input").blur();
    }
  });
};

const searchPage = () => {
  const page = document.createElement("div");
  page.classList.add("search-page");
  page.innerHTML = `
        <div class="search-row">
          <img class="icon" src="${loupeIcon.default}" alt="loupe"/>
          <input placeholder="Search" class="search-input" minlength="3"/>
          <img class="icon" src="${pencilIcon.default}" alt="pencil"/>
        </div>
        <div class="cards-block"></div>`;
  document.querySelector(".app").appendChild(page);
  const history = JSON.parse(localStorage.getItem("history")) || {};
  if (Object.keys(history).length !== 0) {
    for (const prop in history) {
      createCard(history[prop], prop);
    }
  } else {
    document.querySelector(
      ".cards-block"
    ).innerHTML = `<span class="no-match">Your history is clean:c</span>`;
  }
  addListenerToInput();
};

export default searchPage;
