const errorHandler = (inner) => {
  const message = document.querySelector(".message");
  message.innerHTML = inner;
  document.querySelector(".message").classList.add("visible");
  setTimeout(
    () => document.querySelector(".message").classList.remove("visible"),
    3000
  );
};

const setNoMatchHTML = (str) => {
  document.querySelector(
    ".cards-block"
  ).innerHTML = `<span class="no-match">${str}</span>`;
};

const clearCardsBlock = () => {
  document.querySelector(".cards-block").innerHTML = ``;
};

export { errorHandler, setNoMatchHTML, clearCardsBlock };
