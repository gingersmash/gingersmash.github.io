function calculateWindChill(hiTemp, loTemp, windSpeed) {
	
	var avgTemp = (hiTemp + loTemp)/ 2;	
	var chillFactor = (35.74) + (0.6215 * avgTemp)- (35.75 *  Math.pow(windSpeed, .16)) + (0.4275 * avgTemp * Math.pow(windSpeed, .16));
	var factor = chillFactor.toFixed(2);
	var factorText = factor + "°F";
	document.getElementById("output").innerHTML=factorText;
	

}

	
	
	