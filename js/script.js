const cityInputEl = document.querySelector('#city-input');
const checkWeatherBtn = document.querySelector('.weather-button');
const cityOutputEl = document.querySelector('.city-output');
const skyOutputEl = document.querySelector('.sky');
const temperatureOtputEl = document.querySelector('.temp');
const windOutputEl = document.querySelector('.wind');

const apiKey = "b9650586ad76890d40ec8480cbcca50f"

function convert(val) {
	return (val - 273).toFixed();
}

checkWeatherBtn.addEventListener('click', onCheckWeatherBtnClick);

function onCheckWeatherBtnClick() {
	// fetch('https://api.openweathermap.org/data/2.5/weather?q=cityInputEl.value&appid=apiKey')
	fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityInputEl.value+'&appid='+apiKey+'&lang=ua')
	.then(res => res.json())
	// .then(data => console.log(data))
	.then(data => {
		const cityName = data['name'];
		const description = data['weather'][0]['description'];
		const temperature = data['main']['temp'];
		const windspd = data['wind']['speed'];

		cityOutputEl.innerHTML = `Погода в місті <span>${cityInputEl.value.toUpperCase()}</span>`;
		skyOutputEl.innerHTML = `Погодні умови: <span>${description}</span>`;
		temperatureOtputEl.innerHTML = `Температура: <span>${convert(temperature)} C</span>`;
		windOutputEl.innerHTML = `Швидкість вітру складає <span>${windspd}</span> кілометрів на годину`;
	})
	.catch(err => alert('Ви ввели неправильну назву міста. Спробуйте ще раз.'))
}