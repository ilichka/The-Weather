import { getMoreCityInfo } from "../../../requester";
import renderMorePage from "./renderMorePage";

export default () => {
  const page = document.createElement("div");
  page.classList.add("more-page");
  const obj = getMoreCityInfo() || {};
  page.innerHTML = renderMorePage(obj);
  return page;
};
