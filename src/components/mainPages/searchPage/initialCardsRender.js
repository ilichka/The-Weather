import renderCard from "./renderCard";
import { setNoMatchHTML, clearCardsBlock } from "../../../utils/utils";

const initialCardsRender = () => {
  clearCardsBlock();
  const history = JSON.parse(localStorage.getItem("history")) || {};
  if (Object.keys(history).length !== 0) {
    for (const prop in history) {
      renderCard(history[prop], prop);
    }
  } else {
    setNoMatchHTML(`Your history is clean:c`);
  }
};

export default initialCardsRender;
