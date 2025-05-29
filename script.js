let inputbox = document.querySelector(".input-box");
let searchbutton = document.getElementById("search-button");
let weather_img = document.getElementById("weather-img");
let temperature = document.querySelector(".temperature");
let description = document.querySelector(".description");
let humidity = document.getElementById("humidity");
let wind_speed = document.querySelector(".wind-speed");



async function checkWeather(city) {
    let api_key = '3e4e26789dba42b601e65fc45666659f';
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    let weather_data = await fetch(url)
    .then(response => response.json());
    console.log(weather_data);


    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`


    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}km/h`;



    switch (weather_data.weather[0].main) {
        case 'Clouds':
            weather_img.src = "./Assets/cloud.jpeg";
            break;
        case 'Clear':
            weather_img.src = "./Assets/clear.jpeg";
            break;
        case 'Mist':
            weather_img.src = "./Assets/mist.jpeg";
            break;
        case 'Rain':
            weather_img.src = "./Assets/rain.jpeg";
            break;
        case 'Snow':
            weather_img.src = "./Assets/snow.jpeg";
            break;
        case 'Thunderstorm':
            weather_img.src = "./Assets/thunderstorm.jpeg";
            break;
            case 'Haze':
                weather_img.src = "./Assets/haze.png";
                break;
                
        }


}


searchbutton.addEventListener("click", () => {

    checkWeather(inputbox.value);

    let image;
    image=document.getElementById('image-body').style.display='block';

})    
    
inputbox.addEventListener('keydown', (event) => {
    if (event.key === 'Enter')
    checkWeather(inputbox.value);
    
})

