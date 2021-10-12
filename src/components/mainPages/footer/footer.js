import "./style.scss";
import * as homeIcon from "../../../assets/img/home-icon.svg";
import * as likeIcon from "../../../assets/img/like-icon.svg";
import * as moreIcon from "../../../assets/img/more-icon.svg";

const pageHash = ["home", "search", "more"];

const appendFooter = () => {
  const footer = document.createElement("div");
  footer.classList.add("footer");
  footer.innerHTML = `
        <img class="icon" src="${homeIcon.default}" alt="home"/>
        <img class="icon" src="${likeIcon.default}" alt="like"/>
        <img class="icon" src="${moreIcon.default}" alt="more"/>
      `;
  document.querySelector(".app").appendChild(footer);
  document.querySelectorAll(".footer .icon").forEach((icon, index) => {
    icon.addEventListener("click", () => {
      location.hash = pageHash[index];
    });
  });
};

export default appendFooter;
