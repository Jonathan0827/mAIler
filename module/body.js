const body = (meal, weather, covid) => {
	let head = `Good Morning, Jonathan!`;
	// meal: rsdata.mealServiceDietInfo[1].row[0].DDISH_NM;
	let mealBody = `Today's school lunch is ${meal}`;
	let weatherBody = `Weather is ${weather.weather[0].main} right now, current tempreture is ${weather.main.temp}°C and it feels like ${weather.main.feels_like}°C.`;
	// weather: res.data
	let covidBody = `COVID Information: Daejeon got ${covid.newCase} cases, ${covid.newFcase} deaths today.\nTotal cases are ${covid.totalCase} and total deaths are ${covid.death}.`;
	// covid: data.daejeon
	let mailBody = `<!DOCTYPE html>
	<html>
		<head>
			<title>Good Morning!</title>
			<meta charset="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link
				rel="stylesheet"
				href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
			/>
		</head>
		<body>
			<div class="container">
			<p>
			${head}
			${mealBody}
			${weatherBody}
			${covidBody}
			</p>	
			</div>
		</body>
	</html>`;
	return mailBody;
};
