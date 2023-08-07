const currentDate = dayjs().format("dddd, MMMM D, YYYY");
const apiKey = '1c8255898de80ea443150fc125ae7091';

function updateDate(){
    let date = document.getElementById('date');
    date.textContent = currentDate;
}

updateDate();

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
}).then((response) =>{
console.log(response);
    // do something
let cityName = response.name;
// let icon = response.weather[1];
let temp = response.main.temp;
let humidity = response.main.humidity;
let wind = response.wind.speed;
console.log(cityName, temp, humidity, wind)
 

})};

submitBtn.addEventListener('click', () => {
    const cityName = storeCity();
    fetchCurrentAPI(cityName); 

});



// write function to fetch current weather data
// append current weather data to page

// write function to fetch forecast 
// append forecast to page

// create buttons that will pull up previous searches
 
