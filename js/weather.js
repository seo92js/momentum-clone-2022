const API_KEY = "f0ee5df6040252226a85e99b0aa83ebf";

const city = document.querySelector("#weather span:first-child");
const weather = document.querySelector("#weather span:nth-child(2)");
const temp = document.querySelector("#weather span:last-child");

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
      temp.innerText = data.main.temp;
    });
}

function onGeoError() {
  city.innerText = "Can't find you. No weather for you.";
  weather.innerText = "";
  temp.innerText = "";
}

function getWeather() {
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
}

getWeather();

setInterval(getWeather, 300000);
