import { getMoreCityInfo } from "../../../requester";
import { renderMorePage, renderButtonRows } from "./renderMorePage";

const morePage = () => {
  const page = document.createElement("div");
  page.classList.add("more-page");
  const obj = getMoreCityInfo() || {};
  page.innerHTML = renderMorePage(obj);
  page.appendChild(renderButtonRows());
  document.querySelector(".app").appendChild(page);
};

export default morePage;
