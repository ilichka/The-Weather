import appendFooter from "./src/components/mainPages/footer/footer";
import appendMessage from "./src/components/helpers/message/message";
import "./src/assets/normalize.css";
import onHashChangeHandler from "./src/utils/createRouter";

const setDefaultHash = () => {
  location.hash = "home";
};

window.onload = () => {
  appendFooter();
  appendMessage();
  const { hash } = location;
  if (!location.hash) {
    setDefaultHash();
    return;
  }
  onHashChangeHandler(hash);
};

window.onhashchange = () => {
  const { hash } = location;
  document
    .querySelector(".app")
    .removeChild(document.querySelector(".app").lastChild);
  onHashChangeHandler(hash);
};
