import { days } from "../../../utils/consts";

const getElemHTML = (weather, temp, day) => {
  return `
             <span class="day">${days[day]}</span>
            <img class="day-icon" src="http://openweathermap.org/img/wn/${
              weather[0].icon
            }.png" alt="day icon"/>
            <span class="max-temp">${Math.round(temp.max)}°</span>
            <span class="min-temp">${Math.round(temp.min)}°</span>
          `;
};

const createElem = (weather, temp, day) => {
  const elem = document.createElement("div");
  elem.classList.add("day-row");
  elem.innerHTML = getElemHTML(weather, temp, day);
  document.querySelector(".next-days").appendChild(elem);
};

const renderDayRow = (obj) => {
  for (let i = 0; i <= 2; i++) {
    const { weather, temp } = obj[i];
    const day = new Date().getDay() + 1 + i;
    createElem(weather, temp, day);
  }
};

export default renderDayRow;
