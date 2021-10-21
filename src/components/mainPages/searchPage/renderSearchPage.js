import addListenerToInput from "./addListenerToInput";

const renderInput = () => {
  const input = document.createElement("input");
  input.classList.add("search-input");
  input.minLength = 3;
  input.placeholder = "Search";
  addListenerToInput(input);
  return input;
};

export default () => {
  const searchRow = document.createElement("div");
  searchRow.classList.add("search-row");
  searchRow.innerHTML = `<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"/></svg>`;
  searchRow.prepend(renderInput());
  return searchRow;
};
