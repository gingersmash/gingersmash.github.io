var d = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var year = d.getFullYear();
var month = d.getMonth();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var dd = d.getDate();
var dateoutput = days[d.getDay()] + ", " + dd + " " + months[month] + " " + year;
document.getElementById("currentdate").innerHTML = dateoutput;

//hamburger button
