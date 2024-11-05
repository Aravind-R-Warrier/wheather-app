

const apiKey="2bb45338e4455344faf6b03c1abcf69d"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
const searchBox=document.querySelector(".search input")
const searchButton=document.querySelector(".search button")



async function checkWeather(city){
    const response=fetch(apiUrl + city +`&appid=${apiKey}`)

    if((await response).status==404){
        document.querySelector(".error").style.display="block"
        document.querySelector(".weather").style.display="none"
    }else{

        var data=await (await response).json()
  
  
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+`°C`; 
    document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`; 
    document.querySelector(".wind").innerHTML = `${data.wind.speed}km/h`
    weatherIcon=document.querySelector(".weather-icon")

    if (data.weather[0].main === 'Clouds') {
        weatherIcon.src = "./images/clouds.png";
    } else if (data.weather[0].main === 'Clear') {
        weatherIcon.src = './images/clear.png';
    } else if (data.weather[0].main === 'Rain') {
        weatherIcon.src = "./images/rain.png";
    } else if (data.weather[0].main === 'Drizzle') {
        weatherIcon.src = "./images/drizzle.png"; 
    } else if (data.weather[0].main === 'Snow') {
        weatherIcon.src = "./images/snow.png";
    }else if (data.weather[0].main === 'mist') {
        weatherIcon.src = "./images/mist.png";
    }

    // updating weather display
    weatherBlock=document.querySelector(".weather")
    if(weatherBlock){
        document.querySelector(".weather").style.display="block"
    }else{
        alert('find wrong')
    }
    }

    

}


// button clicked
searchButton.addEventListener("click",()=>{
    checkWeather(searchBox.value)
})