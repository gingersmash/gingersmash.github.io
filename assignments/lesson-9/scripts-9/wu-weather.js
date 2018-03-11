var requestURL = 'http://api.wunderground.com/api/2a31b8649cea9b36/conditions/q/MN/franklin.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL, true);

request.onload = function() {
	var franklinWeather = JSON.parse(request.responseText);
	//console.log(franklinWeather);
	 
	document.getElementById('currentTemp').innerHTML =franklinWeather.current_observation.temp_f ;
	document.getElementById('currentConditions').innerHTML =franklinWeather.current_observation.weather;
	
	document.getElementById('windSpeed').innerHTML =franklinWeather.current_observation.wind_mph;
	
	
	
}//end of onload

request.send(); 


var requestURL_1 = 'http://api.wunderground.com/api/2a31b8649cea9b36/forecast/q/MN/franklin.json';
var request_1 = new XMLHttpRequest();
request_1.open('GET', requestURL_1, true);

request_1.onload = function() {
	var franklinWeather = JSON.parse(request_1.responseText);
	console.log(franklinWeather);
	
	document.getElementById('textForecast').innerHTML =franklinWeather.forecast.txt_forecast.forecastday["0"].fcttext;
	
	
}//end of onload

request_1.send(); 

