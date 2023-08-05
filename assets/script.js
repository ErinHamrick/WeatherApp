$(document).ready(function (){
const currentDate = dayjs().format("dddd, MMMM D, YYYY");
const apiKey = '1c8255898de80ea443150fc125ae7091';
let city;
let queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

function updateDate(){
    $("#date").text(currentDate);
}

updateDate();

$("#submitBtn").click(function() {
    let value = $(this).siblings("#input").val();
    let key = "City"; 
    localStorage.setItem(key, value);
    city = $(this).siblings("#input").val();

    fetch(queryURL).then(function(response) {
        return response.json();
    })
}) 


console.log(apiKey)
    


 });