import * as loupeIcon from "../../../assets/img/loupe.svg";
import * as pencilIcon from "../../../assets/img/pencil.svg";

const renderSearchPage = () => {
  return `
        <div class="search-row">
          <img class="icon" src="${loupeIcon.default}" alt="loupe"/>
          <input placeholder="Search" class="search-input" minlength="3"/>
          <img class="icon" src="${pencilIcon.default}" alt="pencil"/>
        </div>
        <div class="cards-block"></div>`;
};

export default renderSearchPage;
