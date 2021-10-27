import noMatch from "./noMatch";

describe("No match page snapshot", () => {
  it("Renders correctly template", () => {
    const template = noMatch();

    expect(template).toMatchSnapshot();
  });
});
