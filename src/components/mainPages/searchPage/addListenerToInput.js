import { getCityListByName } from "../../../requester";
import {
  errorHandler,
  clearCardsBlock,
  setNoMatchHTML,
} from "../../../utils/utils";
import renderCard from "./renderCard";

let timeout;

const callBackFunction = (data) => {
  console.log(data);
  if (+data.cod === 200) {
    clearCardsBlock();
    if (data.list.length) {
      data.list.forEach((elem) => {
        renderCard(
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
      setNoMatchHTML(`There is no such city:c`);
    }
  } else {
    errorHandler(data.message);
  }
};

const addListenerToInput = () => {
  document.querySelector(".search-input").addEventListener("input", (e) => {
    clearTimeout(timeout);
    timeout = window.setTimeout(() => {
      getCityListByName(e.target.value, callBackFunction);
      clearTimeout(timeout);
    }, 2000);
  });
  document.querySelector(".search-input").addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      clearTimeout(timeout);
      getCityListByName(e.target.value, callBackFunction);
      document.querySelector(".search-input").blur();
    }
  });
};

export default addListenerToInput;
