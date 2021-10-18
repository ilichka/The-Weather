import { errorHandler } from "./utils/utils";

const getMoreCityInfo = () => {
  const lastClicked = localStorage.getItem("lastClicked");
  if (lastClicked) {
    return JSON.parse(lastClicked);
  }
  const history = JSON.parse(localStorage.getItem("history"));
  if (history) {
    return JSON.parse(history[0]);
  }
  return null;
};

const getCityListByName = (cityName, callback) => {
  console.log(cityName, callback);
  const key = "d0b9cf5011a1d4ea6ac31f2492fda53d";
  fetch(
    `https://api.openweathermap.org/data/2.5/find?q=${cityName}&type=like&units=metric&sort=population&cnt=3&appid=${key}`
  )
    .then((resp) => resp.json()) // Convert data to json
    .then((data) => {
      callback(data);
    })
    .catch((err) => {
      console.log(err);
      errorHandler(`${err}`);
    });
};

const getCityListByCoordinates = (lat, long, callback) => {
  if (!lat || !long) {
    lat = 43.10535;
    long = -75.29128;
  }
  const key = "d0b9cf5011a1d4ea6ac31f2492fda53d";
  fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${key}&units=metric`
  )
    .then((resp) => resp.json()) // Convert data to json
    .then((data) => {
      callback(data);
    })
    .catch((err) => {
      errorHandler(`${err}`);
    });
};

const getLocation = (callback) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (cb) => {
        getCityListByCoordinates(
          cb.coords.latitude,
          cb.coords.longitude,
          callback
        );
      },
      () => {
        getCityListByCoordinates(43.10535, -75.29128, callback);
      }
    );
  }
};

export { getMoreCityInfo, getCityListByName, getLocation };
