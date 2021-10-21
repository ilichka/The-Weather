const getElemHTML = (temp, weather, time) => `<div class="hour-block">
            <span class="time">${time}:00 h</span>
            <img class="hour-icon" src="http://openweathermap.org/img/wn/${
              weather[0].icon
            }.png" alt="hour icon"/>
            <span class="temp">${Math.round(temp)}°</span>
            </div>
          `;

const renderHourRow = (obj) => {
  let row = ``;
  for (let i = 0; i <= 5; i++) {
    const { temp, weather } = obj[4 * i];
    const time = (new Date().getHours() + 4 * i) % 24;
    row += getElemHTML(temp, weather, time);
  }
  return row;
};

export default renderHourRow;
