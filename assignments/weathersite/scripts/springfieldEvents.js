var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL, true);

request.onreadystatechange = function() {
	if(request.readyState == 4 && request.status == 200){
	var townObject = JSON.parse(request.responseText);
	var townInfo = '<br>';
		
			townInfo += 'Name: ' + townObject.towns[3].name +'<br>';
			townInfo += 'Motto: ' + townObject.towns[3].motto +'<br>';
			townInfo += 'Year Founded: ' + townObject.towns[3].yearFounded +'<br>';
			townInfo += 'Population: ' + townObject.towns[3].currentPopulation + '<br>';
			townInfo += 'Annual Rainfall: ' + townObject.towns[3].averageRainfall + '<br>';
			
		for (i = 0; i<townObject.towns.length; i++) {
			townInfo += townObject.towns[3].events[i] + '<br>';
		}//end of 'for' loop
		//townInfo += '<br>' + '<br>';
	console.log(townObject);
	
	
	 
	document.getElementById('events').innerHTML = townInfo;
	
	
	
	
}//end of onload

request.send(); 


//wu-information

//observation

/*var requestURL = '//api.wunderground.com/api/2a31b8649cea9b36/conditions/q/OR/springfield.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL, true);

request.onload = function() {
	var franklinWeather = JSON.parse(request.responseText);
	console.log(franklinWeather);
	 
	document.getElementById('currentTemp').innerHTML =franklinWeather.current_observation.temp_f ;
	document.getElementById('currentConditions').innerHTML =franklinWeather.current_observation.weather;
	
	document.getElementById('windSpeed').innerHTML =franklinWeather.current_observation.wind_mph;
	
	document.getElementById('windChill').innerHTML =franklinWeather.current_observation.windchill_f;
	
document.getElementById('imgIcon').innerHTML ='<img src="' + franklinWeather.current_observation.icon_url + '">';
	
}//end of onload

request.send(); 



//forecast

var requestURL_1 = '//api.wunderground.com/api/2a31b8649cea9b36/forecast/q/OR/springfield.json';
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


//10 day forecast - forecast10day
var requestURL_2 = '//api.wunderground.com/api/2a31b8649cea9b36/forecast10day/q/OR/springfield.json';

var request_2 = new XMLHttpRequest();
request_2.open('GET', requestURL_2, true);

request_2.onload = function() {
	var franklinWeather = JSON.parse(request_2.responseText);
	console.log(franklinWeather);
	
	//day 1 
	document.getElementById('day0hi').innerHTML=franklinWeather.forecast.simpleforecast.forecastday["0"].high.fahrenheit;
	document.getElementById('day0lo').innerHTML =franklinWeather.forecast.simpleforecast.forecastday["0"].low.fahrenheit;
	
	//day 2 
	document.getElementById('day1hi').innerHTML=franklinWeather.forecast.simpleforecast.forecastday["1"].high.fahrenheit;
	document.getElementById('day1lo').innerHTML =franklinWeather.forecast.simpleforecast.forecastday["1"].low.fahrenheit;
	
	//day 3
	document.getElementById('day2hi').innerHTML=franklinWeather.forecast.simpleforecast.forecastday["2"].high.fahrenheit;
	document.getElementById('day2lo').innerHTML =franklinWeather.forecast.simpleforecast.forecastday["2"].low.fahrenheit;
	
	//day 4
	document.getElementById('day3hi').innerHTML=franklinWeather.forecast.simpleforecast.forecastday["3"].high.fahrenheit;
	document.getElementById('day3lo').innerHTML =franklinWeather.forecast.simpleforecast.forecastday["3"].low.fahrenheit;
	
	//day 5
	document.getElementById('day4hi').innerHTML=franklinWeather.forecast.simpleforecast.forecastday["4"].high.fahrenheit;
	document.getElementById('day4lo').innerHTML =franklinWeather.forecast.simpleforecast.forecastday["4"].low.fahrenheit;
	
	//day 6
	document.getElementById('day5hi').innerHTML=franklinWeather.forecast.simpleforecast.forecastday["5"].high.fahrenheit;
	document.getElementById('day5lo').innerHTML =franklinWeather.forecast.simpleforecast.forecastday["5"].low.fahrenheit;
	
	//day 7
	document.getElementById('day6hi').innerHTML=franklinWeather.forecast.simpleforecast.forecastday["6"].high.fahrenheit;
	document.getElementById('day6lo').innerHTML =franklinWeather.forecast.simpleforecast.forecastday["6"].low.fahrenheit;
	
	//day 8
	document.getElementById('day7hi').innerHTML=franklinWeather.forecast.simpleforecast.forecastday["7"].high.fahrenheit;
	document.getElementById('day7lo').innerHTML =franklinWeather.forecast.simpleforecast.forecastday["7"].low.fahrenheit;
	
	//day 9
	document.getElementById('day8hi').innerHTML=franklinWeather.forecast.simpleforecast.forecastday["8"].high.fahrenheit;
	document.getElementById('day8lo').innerHTML =franklinWeather.forecast.simpleforecast.forecastday["8"].low.fahrenheit;
	
	//day 10
	document.getElementById('day9hi').innerHTML=franklinWeather.forecast.simpleforecast.forecastday["9"].high.fahrenheit;
	document.getElementById('day9lo').innerHTML =franklinWeather.forecast.simpleforecast.forecastday["9"].low.fahrenheit;
	
}//end of onload_2

request_2.send();*/