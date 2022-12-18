const nodemailer = require("nodemailer");
require("dotenv").config({ path: ".env" });

const mailSender = {
	sendEmail: function (meal, weatherinfo, covid) {
		var transporter = nodemailer.createTransport({
			service: "gmail", // Mail service
			prot: 587,
			host: "smtp.gmail.com",
			secure: true,
			requireTLS: true,
			auth: {
				user: process.env.address, // Sender address
				pass: process.env.pass, // Sender password
			},
		});
		// 메일 옵션
		let head = `Good Morning, Jonathan!`;
		// meal: rsdata.mealServiceDietInfo[1].row[0].DDISH_NM;
		let mealBody = meal;

		let weatherBody = weatherinfo;
		// weather: res.data
		let covidBody = covid;
		// covid: data.daejeon

		let mailBody = `${head}\n
${mealBody}\n
${weatherBody}\n
${covidBody}`;
		console.log(mailBody);
		var mailOptions = {
			from: process.env.address,
			to: "limjunehyeop@gmail.com",
			subject: head, // Mail Subject
			text: mailBody, // Mail body
		};
		// send mail
		transporter.sendMail(mailOptions, function (error, info) {
			if (error) {
				console.log(error);
			} else {
				console.log("Email sent: " + info.response);
			}
		});
	},
};
module.exports = mailSender;
