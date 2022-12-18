const fs = require("fs");

const mailMod = require("./module/mail.js");
const mealMod = require("./module/meal.js");
const covidMod = require("./module/covid.js");
const weatherMod = require("./module/weather.js");
mealMod;
covidMod;
weatherMod;
const meal = fs.readFileSync("./module/data/meal.dat", { encoding: "utf-8" });
const covid = fs.readFileSync("./module/data/covid.dat", { encoding: "utf-8" });
const weather = fs.readFileSync("./module/data/weather.dat", {
	encoding: "utf-8",
});
console.log("message: " + meal + "\n" + covid + "\n" + weather);
mailMod.sendEmail(meal, weather, covid);
