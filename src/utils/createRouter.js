import homePage from "../components/mainPages/home/home";
import searchPage from "../components/mainPages/searchPage/searchPage";
import morePage from "../components/mainPages/morePage/morePage";

const routes = [
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

const onHashChangeHandler = (hash) => {
  const page = routes.find((obj) => {
    if (obj.route === hash) {
      return obj;
    }
  });
  page.content();
};

export default onHashChangeHandler;
