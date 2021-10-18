const getElemHTML = (temp, weather, time) => {
  return `
            <span class="time">${time}:00 h</span>
            <img class="hour-icon" src="http://openweathermap.org/img/wn/${
              weather[0].icon
            }.png" alt="hour icon"/>
            <span class="temp">${Math.round(temp)}°</span>
          `;
};

const createElem = (temp, weather, time) => {
  const elem = document.createElement("div");
  elem.classList.add("hour-block");
  elem.innerHTML = getElemHTML(temp, weather, time);
  document.querySelector(".hourly-weather").appendChild(elem);
};

const renderHourRow = (obj) => {
  for (let i = 0; i <= 5; i++) {
    const { temp, weather } = obj[4 * i];
    const time = (new Date().getHours() + 4 * i) % 24;
    createElem(temp, weather, time);
  }
};

export default renderHourRow;
