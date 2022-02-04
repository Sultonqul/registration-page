city.onkeyup = async (e) =>{
    if(e.keyCode == 13){
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=f112da231bcd38755773da4d6df73794`)
        response = await response.json()
        console.log(response);
        //img.src = `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`
        heding.textContent = response.name
        degree.textContent = `${response.main.temp - 273 | 0} C`
        descript.textContent = `description: ${response.weather[0].description}`
        deg.textContent = `wind speed: ${response.wind.speed} m/s`
        hand.textContent = `humidity: ${response.main.humidity} %`
    }
}