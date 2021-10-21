import { clearBlockById, renderPageById } from "./utils";

function renderPage(routes) {
  clearBlockById("root");
  const { hash } = location;
  const route = routes.find((obj) => obj.route === hash);
  renderPageById("root", route.content());
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
