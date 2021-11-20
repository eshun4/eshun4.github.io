// This is to call the data from the API
let cityId = 5604473;
const apiKey = '5283d5540266ec837780c1439b818074'

const prestonPath = `https://api.openweathermap.org/data/2.5/weather?units=imperial&id=${cityId}&appid=${apiKey}`;

const apiURL = prestonPath;
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    // jsObject = jsObject;
    
    document.querySelector('#temp').textContent = Math.floor(jsObject.main.temp);
    document.querySelector('#humidity').textContent = jsObject.main.humidity;
    document.querySelector('#wind_speed').textContent = Math.floor(jsObject.wind.speed);
    document.querySelector('#current_weather').textContent = jsObject.weather[0].main;
  });

  // For 5 day weather forecast

const apiURL_forecast = `https://api.openweathermap.org/data/2.5/forecast?units=imperial&id=${cityId}&appid=${apiKey}`;

fetch(apiURL_forecast)
    .then(response => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const forecastData = jsObject.list.filter((element)=>element.dt_txt.includes('18:00:00'));

	console.log(forecastData);

	const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

    let day = 0;
	forecastData.forEach(forecast => {
	  let x = new Date(forecast.dt_txt);
    document.getElementById('temp'+(day+1)).textContent = Math.round(forecast.main.temp) + ' °F';
    document.getElementById('img'+(day+1)).src = "https://openweathermap.org/img/w/" + forecast.weather[0].icon + ".png";
    document.getElementById('img'+(day+1)).alt = forecast.weather[0].description
	document.getElementById('day'+(day+1)).textContent = weekdays[x.getDay()];
	day++;	  
	});
});