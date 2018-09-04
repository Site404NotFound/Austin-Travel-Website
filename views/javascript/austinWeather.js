var apiKey = '&APPID=cbdd063579bbf3ba8cee3b42b9565906';
// var url = 'http://api.openweathermap.org/data/2.5/weather?q=Austin,tx' + apiKey + '&units=imperial';
var url = 'http://api.openweathermap.org/data/2.5/weather?zip=78723,us' + apiKey + '&units=imperial';

document.addEventListener('DOMContentLoaded', openWeatherCall);

function openWeatherCall (){
	var req = new XMLHttpRequest();
	req.open('GET', url, true);

	req.addEventListener('load', function (){
		if(req.status >= 200 && req.status < 400) {
				displayWeather(JSON.parse(req.responseText));
		} else {
			console.log("Error in network request: " + req.statusText);
		}
	});
	req.send(null);
	event.preventDefault();
}

function displayWeather (responseText) {
	document.getElementById("austinWeather").textContent = 'Current Weather: ' + (responseText.main.temp.toFixed(0)) + '°F';
	event.preventDefault();
}

// EXAMPLE OPEN WEATHER JSON RESPONSE:
// {"coord":{"lon":-122.09,"lat":37.39},
// "sys":{"type":3,"id":168940,"message":0.0297,"country":"US","sunrise":1427723751,"sunset":1427768967},
// "weather":[{"id":800,"main":"Clear","description":"Sky is Clear","icon":"01n"}],
// "base":"stations",
// "main":{"temp":285.68,"humidity":74,"pressure":1016.8,"temp_min":284.82,"temp_max":286.48},
// "wind":{"speed":0.96,"deg":285.001},
// "clouds":{"all":0},
// "dt":1427700245,
// "id":0,
// "name":"Mountain View",
// "cod":200}
