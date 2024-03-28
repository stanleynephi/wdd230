//elements
const temp = document.getElementById("temperature");
const wind = document.getElementById("windspeed");
const result = document.getElementById( "results" );

const url = "https://api.openweathermap.org/data/2.5/weather?lat=5.55&lon=0.19&appid=b2f21d334d4a4feb8a2dffa3560b3b92&units=metric";


//function for url
export async function getData(){
    try{
        const response = await fetch(url)
        if(response.ok){
            const data  = await response.json()
            displayResults(data)
            console.log(data)
        }
        else{
            throw Error(await response.text())
        }
    }
    catch(error){
        console.log(error)
    }
}

getData();


function displayResults(data){
    const weather = document.querySelector("figure img")
    const weather1 = document.querySelector("figure p")
    const temp = document.querySelector(".tempinfo span")
    const iconsSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`

    weather.setAttribute("src",iconsSrc)
    weather.setAttribute("width",100)
    weather1.textContent = data.weather[0].main
    temp.innerHTML = `${data.main.temp} &deg;C`

}


