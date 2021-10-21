import "./index.scss";
import renderSearchPage from "./renderSearchPage";
import initialCardsRender from "./initialCardsRender";

const searchPage = () => {
  const page = document.createElement("div");
  page.classList.add("search-page");
  page.appendChild(renderSearchPage());
  page.appendChild(initialCardsRender());
  return page;
};

export default searchPage;
