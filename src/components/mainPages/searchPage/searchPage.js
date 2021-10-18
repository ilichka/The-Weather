import "./index.scss";
import renderSearchPage from "./renderSearchPage";
import addListenerToInput from "./addListenerToInput";
import initialCardsRender from "./initialCardsRender";

const searchPage = () => {
  const page = document.createElement("div");
  page.classList.add("search-page");
  page.innerHTML = renderSearchPage();
  document.querySelector(".app").appendChild(page);
  initialCardsRender();
  addListenerToInput();
};

export default searchPage;
