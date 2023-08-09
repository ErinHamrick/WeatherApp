const currentDate = dayjs().format("MMMM D, YYYY");
const apiKey = '1c8255898de80ea443150fc125ae7091';

// console.log(currentDate);
// function updateDate(){
    // let date = document.getElementById('date');
    // date.textContent = currentDate;
// }

// updateDate();

const submitBtn = document.getElementById('submitBtn');

function storeCity () {
    let city = document.getElementById('input').value;
    let key = "City";
    localStorage.setItem(key, city);
    return city;
}




function fetchCurrentAPI (city){
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`).then((data) => {
    return data.json()
}).then((response) => {
// console.log(response);
    // do something
let cityName = response.name;
let icon = response.weather[0].icon;
let temp = response.main.temp;
let humidity = response.main.humidity;
let wind = response.wind.speed;
let iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;
// console.log(cityName, iconURL, temp, humidity, wind);
let resultsEl = document.getElementById('results');


let dateEl = document.createElement('span');
dateEl.innerHTML = currentDate;
dateEl.setAttribute('class', 'col-2');

let cityEl = document.createElement('span');
cityEl.innerHTML = cityName;
cityEl.setAttribute('class', 'col-2')

let iconEl = document.createElement('img');
iconEl.setAttribute('class', 'icon');
// iconEl.setAttribute('class', 'col-2');
iconEl.src =  iconURL;

let tempEl = document.createElement('span');
tempEl.setAttribute('class', 'col-2');
tempEl.innerHTML = temp + '\u00B0';

let humidEl = document.createElement('span');
humidEl.setAttribute('class', 'col-2')
humidEl.innerHTML = humidity + '% humidity'; 

let windEl = document.createElement('span');
windEl.setAttribute('class', 'col-2')
windEl.innerHTML = 'Wind Speed: ' + wind + ' ' + 'mph';

resultsEl.append(cityEl, dateEl, iconEl, tempEl, humidEl, windEl);
})};

function fetchForecastAPI (city) {
 fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Nashville&appid=${apiKey}&units=imperial`).then((data) => {
    return data.json();
    }).then((response) =>{
      console.log(response)
    //   let date = ;
    } ) 
}



submitBtn.addEventListener('click', () => {
    const cityName = storeCity();
    fetchCurrentAPI(cityName); 

});



// write function to fetch current weather data
// append current weather data to page

// write function to fetch forecast 
// append forecast to page

// create buttons that will pull up previous searches
 
