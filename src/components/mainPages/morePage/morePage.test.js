import renderMorePage from "./renderMorePage";

const data = {
  first: {
    city: "city",
    country: "country",
    temp: "temp",
    humidity: "humidity",
    wind: "wind",
    icon: "04d",
  },
};

describe("More page snapshot", () => {
  it("Renders correctly template with mock data object", () => {
    const template = renderMorePage(data);

    expect(template).toMatchSnapshot();
  });
});
