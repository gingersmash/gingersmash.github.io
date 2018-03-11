var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL, true);

request.onload = function() {
	var townObject = JSON.parse(request.responseText);
	var townInfo = '<br>';
		
			townInfo += 'Name: ' + townObject.towns[1].name +'<br>';
			townInfo += 'Motto: ' + townObject.towns[1].motto +'<br>';
			townInfo += 'Year Founded: ' + townObject.towns[1].yearFounded +'<br>';
			townInfo += 'Population: ' + townObject.towns[1].currentPopulation + '<br>';
			townInfo += 'Annual Rainfall: ' + townObject.towns[1].averageRainfall + '<br>';
			
		for (i = 0; i<townObject.towns.length; i++) {
			townInfo += townObject.towns[1].events[i] + '<br>';
		}//end of 'for' loop
		//townInfo += '<br>' + '<br>';
	console.log(townObject);
	
	
	 
	document.getElementById('events').innerHTML = townInfo;
	
	
	
	
}//end of onload

request.send(); 