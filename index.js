const submit = document.getElementById("search");
const img = document.getElementById("img")
const weatherPlace = document.getElementById("weatherPlace");

const temp = document.getElementById("temp");
const windSpeed = document.getElementById("windSpeed");
const windPressure = document.getElementById("windPressure");
const humidityChances = document.getElementById("humidityChances");
const data = document.querySelector(".data");
const mainData = document.getElementById("mainData");

window.addEventListener("load", async () => {
    data.style.display = "flex";
    mainData.style.display = "grid";

    try {
        const city = "Nagpur";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=03e0153a9a12f107c81b395fd8b825a1`;
        const response = await fetch(url);
        const data = await response.json();
        
        const imgCode = data.weather[0].icon;
        img.src = `https://openweathermap.org/img/wn/${imgCode}@2x.png`;
        
        const countryCode = data.sys.country;
        const countryName = new Intl.DisplayNames(['en'], { type: 'region' }).of(countryCode);

        if (countryName.trim().toLowerCase() === city.trim().toLowerCase()) weatherPlace.innerText = countryName;
        else weatherPlace.innerText = data.name + ", " + countryName;
        
        temp.innerText = (data.main.temp - 273.15).toFixed(2) + " °C";
        windSpeed.innerText = (data.wind.speed * 3.6).toFixed(2) + " Km/hr";
        windPressure.innerText = (data.main.pressure) + " hPa";
        humidityChances.innerText = (data.main.humidity) + " %";

    } catch (error) {
        console.error("Fetch failed:", error);
    }
})

submit.addEventListener("click", async () => {

    try {
        
        const city = document.getElementById("text").value;
        
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=03e0153a9a12f107c81b395fd8b825a1`;
        
        const response = await fetch(url);
        // console.log(response);
        const data = await response.json();
        // console.log("Data: ", data);
        
        const imgCode = data.weather[0].icon;
        img.src = `https://openweathermap.org/img/wn/${imgCode}@2x.png`;
        
        const countryCode = data.sys.country;
        const countryName = new Intl.DisplayNames(['en'], { type: 'region' }).of(countryCode);
        console.log(countryName);

        if (countryName.trim().toLowerCase() === city.trim().toLowerCase()) weatherPlace.innerText = countryName;
        else weatherPlace.innerText = data.name + ", " + countryName;
        
        temp.innerText = (data.main.temp - 273.15).toFixed(2) + " °C";
        windSpeed.innerText = (data.wind.speed * 3.6).toFixed(2) + " Km/hr";
        windPressure.innerText = (data.main.pressure) + " hPa";
        humidityChances.innerText = (data.main.humidity) + " %";

    } catch (error) {
        console.error("Fetch failed:", error);
    }
})