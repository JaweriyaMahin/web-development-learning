
async function getWeather(){

let city = document.getElementById("cityInput").value;

let apiKey = "YOUR_API_KEY";

let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

let response = await fetch(url);
let data = await response.json();

document.getElementById("cityName").innerText = data.name;
document.getElementById("temperature").innerText = "Temperature: " + data.main.temp + "°C";
document.getElementById("description").innerText = "Weather: " + data.weather[0].description;

}
