import { LOCAL_STORAGE_KEYS } from "./utils/consts";
import { getLocalStorageField } from "./utils/localStorageManager";
import request from "./utils/request";

const API_KEY = "d0b9cf5011a1d4ea6ac31f2492fda53d";

const getMoreCityInfo = () => {
  const lastClicked = getLocalStorageField(LOCAL_STORAGE_KEYS.LAST_CLICKED);
  if (lastClicked) {
    return JSON.parse(lastClicked);
  }
  const history = JSON.parse(getLocalStorageField(LOCAL_STORAGE_KEYS.HISTORY));
  if (history) {
    return JSON.parse(history[0]);
  }
  return null;
};

const getCityListByName = (cityName) =>
  request(
    `https://api.openweathermap.org/data/2.5/find?q=${cityName}&type=like&units=metric&sort=population&cnt=3&appid=${API_KEY}`
  );

const getCityListByCoordinates = (lat, long) => {
  if (!lat || !long) {
    lat = 43.10535;
    long = -75.29128;
  }
  return request(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
  );
};

const getLocation = () => {
  if (navigator.geolocation) {
    return new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition(
        (cb) => {
          getCityListByCoordinates(
            cb.coords.latitude,
            cb.coords.longitude
          ).then(resolve);
        },
        () => {
          getCityListByCoordinates(43.10535, -75.29128).then(resolve);
        }
      );
    });
  }

  return undefined;
};

export { getMoreCityInfo, getCityListByName, getLocation };
