
const api = "a8e71c9932b20c4ceb0aed183e6a83bb"

const searchBtn = document.getElementById('srchBtn')
searchBtn.onclick = () => {
    const city = document.getElementById('city-inp').value
    getWeatherData(city)
    //.then(data => console.log(data))
    .then((res)=> {showWeatherData(res)} )
    .catch((error)=>{
      console.log(error)
      console.log("Something happend")
    })
}


const getWeatherData = (city) => {
  const url = "https://api.openweathermap.org/data/2.5/weather"
  const full_url = `${url}?q=${city}&appid=${api}&units=imperial`
  const weatherPromise  = fetch(full_url)
  return weatherPromise.then((response) => {
    return response.json()
  })
}


showWeatherData = (weatherData) => {
    console.log(weatherData.cod)
    if(weatherData.cod == 200) {
  document.getElementById("city-name").innerText = `${weatherData.name}`
  document.getElementById("weather-type").innerText = weatherData.weather[0].main
  document.getElementById("weather-type").style.fontSize = '2.5rem'
  document.getElementById("temp").innerText = `Temp : ${weatherData.main.temp}°`
  document.getElementById("min-temp").innerText = `Temp : ${weatherData.main.temp_min}°` 
  document.getElementById("max-temp").innerText = `Temp : ${weatherData.main.temp_max}°`
  document.getElementById("humidity").innerText = `Humidity : ${weatherData.main.humidity} ᵍᵐ⁻³`
    }
    else {
        document.getElementById("city-name").innerText = 'Invalid Input'
        document.getElementById("weather-type").innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i>`
        document.getElementById("weather-type").style.fontSize = '6rem'
        document.getElementById("temp").innerText = ''
        document.getElementById("min-temp").innerText = ''
        document.getElementById("max-temp").innerText = ''
        document.getElementById("humidity").innerText = ''
    }
}

