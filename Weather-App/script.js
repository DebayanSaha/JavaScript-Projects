let cityname = document.querySelector("#inp");
let btn = document.querySelector("#result-btn");
let showError = document.querySelector("p");

cityname.addEventListener("keyup",function(e){
    if(e.key === "Enter"){
        btn.click();
    }
});

btn.addEventListener("click", function (e) {
  e.preventDefault();
  const city = cityname.value.trim();
  if (city === "") {
    showError.textContent = "Please enter a city name in the input field";
  } else {
    showError.textContent = "Loading...";
    getWeather(city);
  }
});

function getWeather(city) {
  const apiKey = "b19949ae7fa96f90013c53d5df14ade0";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod !== 200) {
        throw new Error(data.message);
      }
      showError.textContent = "";
      document.querySelector("#location").textContent = `${data.name} , ${data.sys.country}`;
     
      document.querySelector("#Temp").textContent = `${data.main.temp}°C`;
      document.querySelector(
        "#feels"
      ).textContent = `${data.main.feels_like}°C`;
      document.querySelector("#hum").textContent =
        data.main.humidity !== undefined
          ? `${data.main.humidity}%`
          : "Non humid";
      document.querySelector("#vis").textContent =
        data.visibility !== undefined ? `${data.visibility / 1000}km` : "Clear";
      document.querySelector("#rain").textContent = data.rain
        ? `${data.rain["1h"] || data.rain["3h"]} mm`
        : "Little - No rainfall";
      document.querySelector(
        "#cndt"
      ).textContent = `${data.weather[0].description}`;
    })
    .catch((error) => {
      showError.textContent = `Error fetching weather: ${error.message}`;
    });
}
