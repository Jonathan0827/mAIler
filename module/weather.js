require("dotenv").config({ path: ".env" });
const axios = require("axios");
const api = process.env.openweatherapi;
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=daejeon&units=metric&lang=kr&appid=${api}`;
const fs = require("fs");
axios.get(weatherUrl).then(async (res) => {
	console.log(res.data.weather);
	const file = "./module/data/weather.dat";
	const msg = `Weather information<br /><strong>${res.data.weather[0].main}</strong> right now.<br />Current tempreture is <strong>${res.data.main.temp}°C</strong>. But it feels like <strong>${res.data.main.feels_like}°C</strong>.`;
	fs.writeFile(file, msg, (err) => {
		console.log(err);
	});
});
