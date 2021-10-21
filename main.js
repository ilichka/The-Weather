import appendFooter from "./src/components/mainPages/footer/footer";
import "./src/assets/normalize.css";
import router from "./src/utils/router";
import homePage from "./src/components/mainPages/home/home";
import searchPage from "./src/components/mainPages/searchPage/searchPage";
import morePage from "./src/components/mainPages/morePage/morePage";
import initializeNotifications from "./src/utils/notificationService/notificationService";

const ROUTES = [
  {
    route: "#home",
    content: homePage,
  },
  {
    route: "#search",
    content: searchPage,
  },
  {
    route: "#more",
    content: morePage,
  },
];

window.onload = () => {
  appendFooter(ROUTES);
  initializeNotifications();
  router(ROUTES, { initialHash: "home" });
};
