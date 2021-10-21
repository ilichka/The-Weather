import renderCard from "./renderCard";
import { getLocalStorageField } from "../../../utils/localStorageManager";
import { LOCAL_STORAGE_KEYS } from "../../../utils/consts";

export default () => {
  const cardsWrapper = document.createElement("div");
  cardsWrapper.classList.add("cards-block");
  cardsWrapper.id = "cards-block";
  const history =
    JSON.parse(getLocalStorageField(LOCAL_STORAGE_KEYS.HISTORY)) || {};
  if (Object.keys(history).length !== 0) {
    for (const prop in history) {
      cardsWrapper.appendChild(renderCard(history[prop], prop));
    }
    return cardsWrapper;
  }
  cardsWrapper.innerHTML = `<span class="no-match">Your history is clean:c</span>`;
  return cardsWrapper;
};
