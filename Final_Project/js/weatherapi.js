// This is to call the data from the API
let cityId = 4794457;
const apiKey = '5283d5540266ec837780c1439b818074';
let lat = 38.6582;
let lon = -77.2497;

const woodbridgePath = `https://api.openweathermap.org/data/2.5/onecall?units=imperial&id&lat=${lat}&lon=${lon}&id=${cityId}&appid=${apiKey}`;

const apiURL = woodbridgePath;
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.querySelector('#temp').textContent = Math.floor(jsObject.current.temp);
    document.querySelector('#humidity').textContent = jsObject.current.humidity;
    document.querySelector('#wind_speed').textContent = Math.floor(jsObject.current.speed);
    document.querySelector('#current_weather').textContent = jsObject.current.weather[0].main;
  });

  // For 5 day weather forecast

const apiURL_forecast = `https://api.openweathermap.org/data/2.5/onecall?units=imperial&id&lat=${lat}&lon=${lon}&id=${cityId}&appid=${apiKey}`;

fetch(apiURL_forecast)
    .then(response => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        // const forecastData = jsObject.list.filter((element)=>element.dt_txt.includes('18:00:00'));
	let dailyForecast = jsObject.daily;
  console.log(dailyForecast)
	const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

    let day = 0;
	  dailyForecast.forEach(forecast => {
	  let x = new Date(forecast.dt);
    document.getElementById('temp'+(day+1)).textContent = Math.round(forecast.temp.max) + ' °F';
    document.getElementById('img'+(day+1)).src = "https://openweathermap.org/img/w/" + forecast.weather[0].icon + ".png";
    document.getElementById('img'+(day+1)).alt = forecast.weather[0].description
	  document.getElementById('day'+(day+1)).textContent = weekdays[x.getDay()];
	day++;	  
  
	});
});

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 10000); // Change image every 2 seconds
} 