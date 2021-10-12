import getLocation from "./src/components/mainPages/home/home";
import searchPage from "./src/components/mainPages/searchPage/searchPage";
import appendFooter from "./src/components/mainPages/footer/footer";
import appendMsg from "./src/components/helpers/msg/msg";
import morePage from "./src/components/mainPages/morePage/morePage";
import "./src/assets/normalize.css";

const setDefaultHash = () => {
  location.hash = "home";
};

window.onload = () => {
  appendFooter();
  appendMsg();
  const { hash } = location;
  if (!location.hash) {
    setDefaultHash();
    return;
  }

  hash === "#home" && getLocation();
  hash === "#search" && searchPage();
  hash === "#more" && morePage();
};

window.onhashchange = () => {
  document
    .querySelector(".app")
    .removeChild(document.querySelector(".app").lastChild);
  location.hash === "#home" && getLocation();
  location.hash === "#search" && searchPage();
  location.hash === "#more" && morePage();
};
