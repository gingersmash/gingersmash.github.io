var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL, true);

request.onload = function() {
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