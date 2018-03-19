//wu-information

//observation

var requestURL = '//api.wunderground.com/api/2a31b8649cea9b36/conditions/q/MN/franklin.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL, true);

request.onload = function() {
	var weatherInfo = JSON.parse(request.responseText);
	console.log(weatherInfo);
	 
	document.getElementById('currentTemp').innerHTML =weatherInfo.current_observation.temp_f ;
	document.getElementById('currentConditions').innerHTML =weatherInfo.current_observation.weather;
	
	document.getElementById('windSpeed').innerHTML =weatherInfo.current_observation.wind_mph;
	
	document.getElementById('windChill').innerHTML =weatherInfo.current_observation.windchill_f;
	
	var icon_path = weatherInfo.current_observation.icon_url;
	var urlString =document.location.href;
	console.log(urlString);
	if(found>=0){
		icon_path = icon_path.replace("http","https");
	}
	
	var  found = urlString.indexOf("https");
	console.log(found);
	document.getElementById('weather_icon').src = icon_path;
	
	
}//end of onload

request.send(); 



//forecast

var requestURL_1 = '//api.wunderground.com/api/2a31b8649cea9b36/forecast/q/MN/franklin.json';
var request_1 = new XMLHttpRequest();
request_1.open('GET', requestURL_1, true);

request_1.onload = function() {
	var weatherInfo = JSON.parse(request_1.responseText);
	//console.log(weatherInfo);
	
	document.getElementById('textForecast').innerHTML =weatherInfo.forecast.txt_forecast.forecastday["0"].fcttext;
	
	document.getElementById('hiTemp').innerHTML =weatherInfo.forecast.simpleforecast.forecastday["0"].high.fahrenheit;
	
	document.getElementById('loTemp').innerHTML =weatherInfo.forecast.simpleforecast.forecastday["0"].low.fahrenheit;
	
	
	
	
	
	document.getElementById('pop').innerHTML =weatherInfo.forecast.simpleforecast.forecastday["0"].pop;
	
	
}//end of onload

request_1.send(); 


//10 day forecast - forecast10day
var requestURL_2 = '//api.wunderground.com/api/2a31b8649cea9b36/forecast10day/q/MN/franklin.json';

var request_2 = new XMLHttpRequest();
request_2.open('GET', requestURL_2, true);

request_2.onload = function() {
	var weatherInfo = JSON.parse(request_2.responseText);
	console.log(weatherInfo);
	
	//day 1 
	document.getElementById('day0hi').innerHTML=weatherInfo.forecast.simpleforecast.forecastday["0"].high.fahrenheit;
	document.getElementById('day0lo').innerHTML =weatherInfo.forecast.simpleforecast.forecastday["0"].low.fahrenheit;
	
	//day 2 
	document.getElementById('day1hi').innerHTML=weatherInfo.forecast.simpleforecast.forecastday["1"].high.fahrenheit;
	document.getElementById('day1lo').innerHTML =weatherInfo.forecast.simpleforecast.forecastday["1"].low.fahrenheit;
	
	//day 3
	document.getElementById('day2hi').innerHTML=weatherInfo.forecast.simpleforecast.forecastday["2"].high.fahrenheit;
	document.getElementById('day2lo').innerHTML =weatherInfo.forecast.simpleforecast.forecastday["2"].low.fahrenheit;
	
	//day 4
	document.getElementById('day3hi').innerHTML=weatherInfo.forecast.simpleforecast.forecastday["3"].high.fahrenheit;
	document.getElementById('day3lo').innerHTML =weatherInfo.forecast.simpleforecast.forecastday["3"].low.fahrenheit;
	
	//day 5
	document.getElementById('day4hi').innerHTML=weatherInfo.forecast.simpleforecast.forecastday["4"].high.fahrenheit;
	document.getElementById('day4lo').innerHTML =weatherInfo.forecast.simpleforecast.forecastday["4"].low.fahrenheit;
	
	//day 6
	document.getElementById('day5hi').innerHTML=weatherInfo.forecast.simpleforecast.forecastday["5"].high.fahrenheit;
	document.getElementById('day5lo').innerHTML =weatherInfo.forecast.simpleforecast.forecastday["5"].low.fahrenheit;
	
	//day 7
	document.getElementById('day6hi').innerHTML=weatherInfo.forecast.simpleforecast.forecastday["6"].high.fahrenheit;
	document.getElementById('day6lo').innerHTML =weatherInfo.forecast.simpleforecast.forecastday["6"].low.fahrenheit;
	
	//day 8
	document.getElementById('day7hi').innerHTML=weatherInfo.forecast.simpleforecast.forecastday["7"].high.fahrenheit;
	document.getElementById('day7lo').innerHTML =weatherInfo.forecast.simpleforecast.forecastday["7"].low.fahrenheit;
	
	//day 9
	document.getElementById('day8hi').innerHTML=weatherInfo.forecast.simpleforecast.forecastday["8"].high.fahrenheit;
	document.getElementById('day8lo').innerHTML =weatherInfo.forecast.simpleforecast.forecastday["8"].low.fahrenheit;
	
	//day 10
	document.getElementById('day9hi').innerHTML=weatherInfo.forecast.simpleforecast.forecastday["9"].high.fahrenheit;
	document.getElementById('day9lo').innerHTML =weatherInfo.forecast.simpleforecast.forecastday["9"].low.fahrenheit;
	
}//end of onload_2

request_2.send();