const DAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const BUTTON_ROWS = [
  { name: "Temperature", value: "celcius" },
  { name: "Wind speed", value: "km/s" },
  { name: "Source", value: "openWeatherAPI" },
];

const LOCAL_STORAGE_KEYS = {
  LAST_CLICKED: "lastClicked",
  HISTORY: "history",
};

export { DAY_NAMES, BUTTON_ROWS, LOCAL_STORAGE_KEYS };
