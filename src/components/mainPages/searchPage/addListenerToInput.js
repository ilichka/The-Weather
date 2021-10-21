import { getCityListByName } from "../../../requester";
import {
  clearBlockById,
  renderPageById,
  setInnerHTMLById,
} from "../../../utils/utils";
import renderCard from "./renderCard";
import { addNotification } from "../../../utils/notificationService/notificationService";

let timeout;

const processPromise = (promise) => {
  promise.then((data) => {
    if (+data.cod === 200) {
      clearBlockById("cards-block");
      if (data.list.length) {
        const fragment = document.createDocumentFragment();
        data.list.forEach((elem) => {
          fragment.appendChild(
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
            )
          );
        });
        renderPageById("cards-block", fragment);
      } else {
        setInnerHTMLById(
          "cards-block",
          `<span class="no-match">There is no such city:c</span>`
        );
      }
    } else {
      addNotification("error", data.message);
    }
  });
};

const addListenerToInput = (input) => {
  input.addEventListener("input", (e) => {
    clearTimeout(timeout);
    timeout = window.setTimeout(() => {
      processPromise(getCityListByName(e.target.value));
      clearTimeout(timeout);
    }, 2000);
  });
  input.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      clearTimeout(timeout);
      processPromise(getCityListByName(e.target.value));
    }
  });
};

export default addListenerToInput;
