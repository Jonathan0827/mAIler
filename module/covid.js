const fs = require("fs");
const axios = require("axios");
require("dotenv").config({ path: ".env" });
const api = process.env.covid;
const covidUrl = `https://api.corona-19.kr/korea/country/new/?serviceKey=${api}`;
axios.get(covidUrl).then((res) => {
	const data = res.data;
	console.log(data.daejeon);
	const file = "./module/data/covid.dat";
	const msg = `Covid Information<br />Daejeon got <strong>${data.daejeon.newCase}</strong> new cases and <strong>${data.daejeon.newFcase}</strong> deaths today.<br />Total cases are ${data.daejeon.totalCase} and total deaths are ${data.daejeon.death}.`;
	fs.writeFile(file, msg, (err) => {
		console.log(err);
	});
});
