const api = {
	key: "f74bb33dffe3ae30b7fc422de4196bb8",
	base: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function pos (){
    getResults("Port of Spain");
}
function scar (){
  getResults("Scarborough,TT");
}
function king(){
  getResults("Kingston");
}
function george(){
  getResults("GeorgeTown");
}
function nas(){
  getResults("Nassau");
}
function pop(){
  getResults("Port-au-Prince");
}
function belmo(){
  getResults("Belmopan");
}
function santo(){
  getResults("Santo Domingo");
}
function stg(){
  getResults("Saint George's");
}
function ros(){
  getResults("Roseau");
}
function hav(){
  getResults("Havana");
}
function fdf(){
  getResults("Fort-de-France");
}function cas(){
  getResults("Castries");
}
function stj(){
  getResults("Saint John's");
}
function cock(){
  getResults("Cockburn");
}
function road(){
  getResults("Road town");
}

function setQuery(evt) {
	if (evt.keyCode == 13) {
		getResults(searchbox.value);
		console.log(searchbox.value);
	}

}
function getResults(query) {
	fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
		.then(weather => {
			return weather.json();
		}).then(displayResults);
	console.log(query);
}

function displayResults(weather) {
	console.log(weather);
	let city = document.querySelector(' .city');
	city.innerText = `${weather.name}, ${weather.sys.country}`;

let now = new Date();
let date = document.querySelector(' .dates');
date.innerText = dateBuilder (now);

let dates = document.querySelector(' .date');
dates.innerText = dateBuilder (now);

let temp = document.querySelector(' .temp');
temp.innerHTML= `${Math.round(weather.main.temp)}<span>°C</span>`;
let temps = document.querySelector(' .temps');
temps.innerHTML= `${Math.round(weather.main.temp)}<span>°C</span>`;

    let weather_el = document.querySelector('#summary');
		let weather_ell = document.querySelector('.weathers');
		weather_ell.innerText= weather.weather[0].description;

    //weather_el.innerText= weather.weather[0].description;
		//if ('weathers' = scattered clouds){click= "wi wi-sunny"}
//else ()
    let hilow= document.querySelector('.hilo');
    hilow.innerText = `${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`;

    let pressure = document.querySelector(' .section2 .pressures');
    pressures.innerText = ` ${weather.main.pressure} hPa`;

    let humidity = document.querySelector('.humidity');
    humidity.innerText = `Humidity: ${weather.main.humidity} % `;

    let wind = document.querySelector(' .section2.winds');
    winds.innerText = `Wind Speed: ${weather.wind.speed} m/s `;

    let rain = document.querySelector('.section2 .rains');
    rains.innerText = `${weather.rain}`;
      if(weather.rain == null){
        rains.innerText = ("No rainfall at present");
      }
      else{
        rains.innerText = ("Rainfall to be expected");
      }
}

function dateBuilder(d){
	let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", 
    "Thursday", "Friday", "Saturday"];
    
		let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}

/* wi wi-snow
wi wi-strong-winds
wi wi-rain
wi wi-lightning
wi wi-sun*/



