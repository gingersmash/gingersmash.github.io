var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL, true);

//request.onreadystatechange = function() {
request.onload = function() {
	
	//if(request.readyState === 4 && request.status === 200){
	var townObject = JSON.parse(request.responseText);
	var townInfo = '<br>';
		
			townInfo += 'Name: ' + townObject.towns[3].name +'<br>';
			townInfo += 'Motto: ' + townObject.towns[3].motto +'<br>';
			townInfo += 'Year Founded: ' + townObject.towns[3].yearFounded +'<br>';
			townInfo += 'Population: ' + townObject.towns[3].currentPopulation + '<br>';
			townInfo += 'Annual Rainfall: ' + townObject.towns[3].averageRainfall + '<br>';
			
		for (i = 0; i<townObject.towns[3].events.length; i++) {
			townInfo += townObject.towns[3].events[i] + '<br>';
		}//end of 'for' loop
		//townInfo += '<br>' + '<br>';
	
	
	
	 
	document.getElementById('events').innerHTML = townInfo;
	
	
	//}//end of if
	
}//end of onload
	console.log(request.readyState);
	console.log(request.status);
request.send(); 


