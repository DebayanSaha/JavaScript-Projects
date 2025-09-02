
let cityname = document.querySelector("#inp");
let btn = document.querySelector("#result-btn");
let showError = document.querySelector("p");


btn.addEventListener("click",function(e){
    e.preventDefault();
    if(cityname.value === ""){
        showError.textContent = "Please enter a city name in the input field";
    }
    else{
        getWeather(cityname.value);
    }
});

function getWeather(city){
    const apiKey = "b19949ae7fa96f90013c53d5df14ade0";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    console.log(fetch(url));

    fetch(url)
    .then(response=>{
        if(!response.ok){
            throw new Error("City not found");
        }
        return response.json();
    })
    .then(data=>{
        document.querySelector("#Temp").textContent =`${data.main.temp}°C`;
        document.querySelector("#feels").textContent =`${data.main.feels_like}°C`;

        if(data.main.humidity === undefined){
            document.querySelector("#hum").textContent = "Not humid"
        }
        else{
            document.querySelector("#hum").textContent =`${data.main.humidity}% `;
        }
        
        if(data.main.visibility === undefined){
            document.querySelector("#vis").textContent = "Clear";
        }
        else{
            document.querySelector("#vis").textContent =`${data.main.visibility}%`;
        }
        if(data.main.rain === undefined){
            document.querySelector("#rain").textContent = "Little - No rainfall"
        }
        else{
            document.querySelector("#rain").textContent =`${data.main.rain}%`;
        }
        document.querySelector("#cndt").textContent =`${data.weather[0].description}`;
    })
    .catch(error=>{
    showError.textContent = `Error fetching weather: ${error.message}`;
    })
};