var requestURL = 'https://gingersmash.github.io/assignments/final_mt_spoke/data/services.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL, true);

request.onload = function() {
	var jsonObject = JSON.parse(request.responseText);
	var serviceInfo = '<br>';
	
		for (i = 0; i < jsonObject.services.length; i++) {
			if (i == 2){}
			
			else {
			serviceInfo += 'Service: ' + jsonObject.services[i].service +'<br>';
			serviceInfo += 'Price: ' + jsonObject.services[i].price +'<br>';
			
			}//end of 'if' 'else'
		}//end of 'for' loop
	console.log(townInfo);
	
	
	 
	document.getElementById('place').innerHTML = townInfo;
	//document.getElementById('currentConditions').innerHTML =townObject.current_observation.weather;
	
	//document.getElementById('windSpeed').innerHTML =townObject.current_observation.wind_mph;
	
	
	
}//end of onload

request.send(); 
