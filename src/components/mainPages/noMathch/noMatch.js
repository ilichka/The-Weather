import "./index.scss";

export default () => {
  const noMatch = document.createElement("div");
  noMatch.classList.add("no-match-page");
  noMatch.innerHTML = `404 Page not found`;
  return noMatch;
};
