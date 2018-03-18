//forecast

var requestURL_1 = 'http://api.wunderground.com/api/2a31b8649cea9b36/forecast/q/TX/greenville.json';
var request_1 = new XMLHttpRequest();
request_1.open('GET', requestURL_1, true);

request_1.onload = function() {
	var franklinWeather = JSON.parse(request_1.responseText);
	console.log(franklinWeather);
	
	document.getElementById('textForecast').innerHTML =franklinWeather.forecast.txt_forecast.forecastday["0"].fcttext;
	
	document.getElementById('hiTemp').innerHTML =franklinWeather.forecast.simpleforecast.forecastday["0"].high.fahrenheit;
	
	document.getElementById('loTemp').innerHTML =franklinWeather.forecast.simpleforecast.forecastday["0"].low.fahrenheit;
	
	
	
	
	
	document.getElementById('pop').innerHTML =franklinWeather.forecast.simpleforecast.forecastday["0"].pop;
	
	
}//end of onload

request_1.send(); 