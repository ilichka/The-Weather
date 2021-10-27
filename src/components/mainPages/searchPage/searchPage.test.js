import searchPage from "./searchPage";

describe("Search page snapshot", () => {
  it("Renders correctly template", () => {
    const template = searchPage();

    expect(template).toMatchSnapshot();
  });
});
