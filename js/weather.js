const API_KEY = "f0ee5df6040252226a85e99b0aa83ebf";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weater span:first-child");
      const city = document.querySelector("#weater span:nth-child(2)");
      const temp = document.querySelector("#weater span:last-child");

      city.innerText = data.weather[0].main;
      weather.innerText = data.name;
      temp.innerText = data.main.temp;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
