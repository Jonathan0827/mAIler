require("dotenv").config({ path: ".env" });
const api = process.env.neis;
const schoolInfo = require("../config/school.json");
const fs = require("fs");
const axios = require("axios").default;
const today = new Date();
const year = today.getFullYear();
const date = `${year}${
	today.getMonth() < 10 ? `0${today.getMonth() + 1}` : today.getMonth() + 1
}${today.getDate() < 10 ? `0${today.getDate()}` : today.getDate()}`;
// console.log(date);
const mealUrl = `https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=${api}&Type=json&pIndex=1&pSize=10&ATPT_OFCDC_SC_CODE=${schoolInfo.sc_code}&SD_SCHUL_CODE=${schoolInfo.sd_schul_code}&MLSV_YMD=${date}`;
// console.log(mealUrl);
async function mealInfo() {
	const mealJson = await axios.get(mealUrl);
	const file = "./module/data/meal.dat";
	try {
		let meal = await mealJson.data.mealServiceDietInfo[1].row[0].DDISH_NM;
		meal = meal.replaceAll("<br/>", "");
		meal = meal.replaceAll(".", " ");
		meal = meal.replaceAll("*", " ");
		meal = meal.replaceAll("밥", "밥, ");
		meal = meal.replaceAll(")", "), ");
		fs.writeFile(
			file,
			`School lunch information<br/><strong>${meal}</strong>`,
			(err) => console.log(err)
		);
	} catch (error) {
		let meal = "No School Lunch";
		fs.writeFile(
			file,
			`School lunch information<br /><strong>${meal}</strong>`,
			(err) => console.log(err)
		);
	}
}
mealInfo();
