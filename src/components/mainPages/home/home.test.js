import { getHomeHTML } from "./home";

const generateTestData = () => {
  const data = {
    city: "city",
    country: "country",
    status: "status",
    temp: "temp",
    humidity: "humidity",
    wind: "wind",
    icon: "04d",
    hourly: [],
    daily: [],
  };
  for (let i = 0; i < 48; i++) {
    if (i % 6 === 0) {
      data.daily.push({
        weather: [{ icon: "04d" }],
        temp: { max: 8.67, min: 2.37 },
      });
    }
    data.hourly.push({ weather: [{ icon: "04d" }], temp: 7.99 });
  }
  return data;
};

describe("Home page snapshot", () => {
  it("Renders correctly template with mock data object", () => {
    const template = getHomeHTML(generateTestData());

    expect(template).toMatchSnapshot();
  });
});
