import { clearBlockById, renderPageById } from "./utils";
import noMatch from "../components/mainPages/noMathch/noMatch";

function renderPage(routes) {
  clearBlockById("root");
  const { hash } = location;
  const route = routes.find((obj) => obj.route === hash);
  renderPageById("root", route ? route.content() : noMatch());
}

const initialRender = (routes, config) => {
  if (!location.hash) {
    location.hash = config.initialHash;
  } else {
    renderPage(routes);
  }
};

export default (routes, config) => {
  window.addEventListener("hashchange", renderPage.bind(this, routes));
  initialRender(routes, config);
};
