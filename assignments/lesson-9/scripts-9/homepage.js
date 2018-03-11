var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL, true);

request.onload = function() {
	var townObject = JSON.parse(request.responseText);
	var townInfo = '<br>';
	
		for (i = 0; i < townObject.towns.length; i++) {
			if (i == 2){}
			
			else {
			townInfo += 'Name: ' + townObject.towns[i].name +'<br>';
			townInfo += 'Motto: ' + townObject.towns[i].motto +'<br>';
			townInfo += 'yearFounded: ' + townObject.towns[i].yearFounded +'<br>';
			townInfo += 'Population: ' + townObject.towns[i].currentPopulation +'<br>';
			townInfo += 'Annual Rainfall: ' + townObject.towns[i].averageRainfall +'<br>' + '<br>';
			}//end of 'if' 'else'
		}//end of 'for' loop
	console.log(townInfo);
	
	
	 
	document.getElementById('place').innerHTML = townInfo;
	//document.getElementById('currentConditions').innerHTML =townObject.current_observation.weather;
	
	//document.getElementById('windSpeed').innerHTML =townObject.current_observation.wind_mph;
	
	
	
}//end of onload

request.send(); 
