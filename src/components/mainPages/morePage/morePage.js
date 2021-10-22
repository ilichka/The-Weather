import { getMoreCityInfo } from "../../../requester";
import renderMorePage from "./renderMorePage";

const morePage = () => {
  const page = document.createElement("div");
  page.classList.add("more-page");
  const obj = getMoreCityInfo() || {};
  page.innerHTML = renderMorePage(obj);
  return page;
};

module.exports = { morePage };
export default morePage();