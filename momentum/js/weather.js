import langObject from './languageObj.js';
import { language, langs } from './settings.js';

// ------- weather -------

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const city = document.querySelector('.city');
const weatherDescription = document.querySelector('.weather-description');
const humidity = document.querySelector('.humidity');
const speedWind = document.querySelector('.speedWind');

// получить информацию о погоде
async function getWeather() {  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${language}&appid=f88d8ce92815ace0f687319f76b83882&units=metric`;
  const res = await fetch(url);
  const data = await res.json(); 

  weatherIcon.className = 'weather-icon owf';
  
  if (data.cod !== '404' && data.cod !== '400') { // вывести виджет с погодой в зависимости от введенного города
    weatherIcon.classList.add(`owf-${data.weather[0].id}`); // иконка
    temperature.textContent = `${data.main.temp.toFixed(0)}°C`; // температура
    weatherDescription.textContent = data.weather[0].description; // описание погоды
    humidity.textContent = `${langObject[language].humidity} :  ${data.main.humidity.toFixed(0)}%`; // влажность воздуха
    speedWind.textContent =  `${langObject[language].wind}: ${data.wind.speed.toFixed(0)} ${langObject[language].windMs}`; // скорость ветра 
  } else if (city.value === '') { // если пустая строка
    temperature.textContent = langObject[language].notFound;
    weatherDescription.textContent = '';
    humidity.textContent = '';
    speedWind.textContent = ''; 
  } else { // если такого города не cуществует 
    temperature.textContent = `${langObject[language].cantFind} "${city.value}" !`;
    weatherDescription.textContent = '';
    humidity.textContent = '';
    speedWind.textContent = ''; 
  }
}

// сохранить введенный город в Local Storage
function setCity() {
  localStorage.setItem('city', city.value);
  getWeather();
  city.blur();
}

// получить сохраненный город из Local Storage
function getCity() {
  if (localStorage.getItem('city')) {
    city.value = localStorage.getItem("city");
  } else { 
    city.value = 'Minsk' // если не введен город, по умолчанию город - Минск
  }  
  getWeather();
}

// переключение языка в настройках меняет язык виджета погоды и placeholder
langs.forEach(el => {
  el.addEventListener('change', (e) => {
    city.setAttribute('placeholder', langObject[language].placeholderCity);
    localStorage.setItem('city_placeholder', langObject[language].placeholderCity);
    getWeather();
  })
})

city.addEventListener('change', setCity);
window.addEventListener('beforeunload', setCity);
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('city_placeholder')) {
    city.placeholder = langObject[language].placeholderCity;
  } 
  getCity();
});

