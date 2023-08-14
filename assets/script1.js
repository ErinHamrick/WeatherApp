const currentDate = dayjs().format("MMMM D, YYYY");
const apiKey = "1c8255898de80ea443150fc125ae7091";

// console.log(currentDate);
// function updateDate(){
// let date = document.getElementById('date');
// date.textContent = currentDate;
// }

// updateDate();

const submitBtn = document.getElementById("submitBtn");

function storeCity() {
	let city = document.getElementById("input");
	let cityName = city.value;
	let key = "City";
	localStorage.setItem(key, cityName);
	city.value = "";
	return cityName;
}

function fetchCurrentAPI(city) {
	fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`
	)
		.then((data) => {
			return data.json();
		})
		.then((response) => {
			// console.log(response);
			// do something
			let cityName = response.name;
			let icon = response.weather[0].icon;
			let temp = response.main.temp;
			let humidity = response.main.humidity;
			let wind = response.wind.speed;
			let iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;
			// console.log(cityName, iconURL, temp, humidity, wind);
			let resultsEl = document.getElementById("results");

			let dateEl = document.createElement("span");
			dateEl.innerHTML = currentDate;
			dateEl.setAttribute("class", "col-2");

			let cityEl = document.createElement("span");
			cityEl.innerHTML = cityName;
			cityEl.setAttribute("class", "col-2");

			let iconEl = document.createElement("img");
			iconEl.setAttribute("class", "icon");
			iconEl.src = iconURL;

			let tempEl = document.createElement("span");
			tempEl.setAttribute("class", "col-2");
			tempEl.innerHTML = temp + "\u00B0";

			let humidEl = document.createElement("span");
			humidEl.setAttribute("class", "col-2");
			humidEl.innerHTML = humidity + "% humidity";

			let windEl = document.createElement("span");
			windEl.setAttribute("class", "col-2");
			windEl.innerHTML = "Wind Speed: " + wind + " " + "mph";

			resultsEl.textContent = "";

			resultsEl.append(cityEl, dateEl, iconEl, tempEl, humidEl, windEl);
		});
}

function fetchForecastAPI(city) {
	fetch(
		`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`
	)
		.then((data) => {
			return data.json();
		})
		.then((response) => {
			console.log(response);
			for (i = 0; i < 40; i += 8) {
				let div = document.createElement("div");

				let icon = response.list[i].weather[0].icon;
				let iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;
				let iconEl = document.createElement("img");
				iconEl.src = iconURL;

				let milliseconds = response.list[i].dt_txt;
				let date = new Date(milliseconds).toDateString();
				let dateEl = document.createElement("p");
				dateEl.innerHTML = date;

				let temp = response.list[i].main.temp;
				let tempEl = document.createElement("p");
				tempEl.innerHTML = "Temp: " + temp + "\u00B0";

				let wind = response.list[i].wind.speed;
				let windEl = document.createElement("p");
				windEl.innerHTML = "Wind Speed: " + wind + " mph";

				let humid = response.list[i].main.humidity;
				let humidEl = document.createElement("p");
				humidEl.innerHTML = "Humidity: " + humid + "%";

				div.append(dateEl, iconEl, tempEl, windEl, humidEl);
				let forecastEl = document.getElementById("forecast");
				div.setAttribute("class", "days");
				forecastEl.append(div);
			}
			console.log(response);
			console.log(iconURL);
			console.log(response.list[0].dt);
			console.log(response.list[0].main.temp);
			console.log(response.list[0].wind.speed);
			console.log(response.list[0].main.humidity);
		});
}

submitBtn.addEventListener("click", () => {
	const cityName = storeCity();
	fetchCurrentAPI(cityName);
	fetchForecastAPI(cityName);
});
