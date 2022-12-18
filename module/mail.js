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

		let mailBody = `<!DOCTYPE html>
		<html lang="en">
			<head>
				<meta charset="UTF-8" />
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Good Morning, Jonathan!</title>
			</head>
			<style>
				:root {
					font-family: system-ui, -apple-system, BlinkMacSystemFont,
						"Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
						"Helvetica Neue", sans-serif;
					/* background-color: #000000; */
					/* color: white; */
				}
				header {
					text-align: center;
				}
				main {
					font-weight: bolder;
				}
				hr {
					border: none;
					height: 4px;
					width: 100%;
					background-color: rgb(152, 152, 152);
				}

				strong {
					position: relative;
				}
		
				strong::before {
					/* Highlight color */
					background-color: #46b96c;
		
					content: "";
					position: absolute;
					width: calc(100% + 4px);
					height: 60%;
					left: -2px;
					bottom: 0;
					z-index: -1;
					transform: rotate(-2deg);
				}
		
		
				* {
					box-sizing: border-box;
					font-family: sans-serif;
				}
		
				.content {
					display: flex;
					margin: 40px auto;
					min-height: 100vh;
					max-width: 450px;
					justify-content: center;
					align-items: center;
					flex-direction: column;
				}
		
				.content > * {
					width: 100%;
				}
			</style>
			<body>
				<header>
					<h1>Good Morning, Jonathan!</h1>
				</header>
				<hr />
				<main>
					<h2>
${mealBody} <br /><br />
${weatherBody}<br /><br />
${covidBody}
					</h2>
				</main>
			</body>
		</html>
`;
		console.log("body: " + mailBody);
		var mailOptions = {
			from: process.env.address,
			to: "limjunehyeop@gmail.com",
			subject: head, // Mail Subject
			html: mailBody, // Mail body
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
