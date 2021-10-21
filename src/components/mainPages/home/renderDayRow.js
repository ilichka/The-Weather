import { DAY_NAMES } from "../../../utils/consts";

const getElemHTML = (weather, temp, day) => ` <div class="day-row">
             <span class="day">${DAY_NAMES[day]}</span>
            <img class="day-icon" src="http://openweathermap.org/img/wn/${
              weather[0].icon
            }.png" alt="day icon"/>
            <span class="max-temp">${Math.round(temp.max)}°</span>
            <span class="min-temp">${Math.round(temp.min)}°</span>
            </div>
          `;

const renderDayRow = (obj) => {
  let row = ``;
  for (let i = 0; i <= 2; i++) {
    const { weather, temp } = obj[i];
    const day = (new Date().getDay() + 1 + i) % 7;
    row += getElemHTML(weather, temp, day);
  }
  return row;
};

export default renderDayRow;
