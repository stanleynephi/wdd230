

const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=b2f21d334d4a4feb8a2dffa3560b3b92";


//async function to call the  api
async function apiFetch(){
    //try catch for the function
    try{
        const response = await fetch (url)
        if(response.ok){
            const data = await response.json()
            console.log(data)
            displayResults(data)
        }
        else{
            throw Error(await response.text())
        }
    }
    catch(error){
        console.log(error)
    }
}

apiFetch()


function displayResults(data){
    // curentTemp.innerHTML = `${data.temp}`
     const curentTemp = document.querySelector("#current-temp");
     const weatherIcon = document.querySelector("#weather-icon");
     const captionDesc = document.querySelector("figcaption");
     const iconsSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`


    curentTemp.innerHTML =  (`${data.main.temp}&deg;F`);
    weatherIcon.setAttribute("src",iconsSrc)
    weatherIcon.setAttribute( "alt",`Image Icon For ${data.weather[0].description}`)
    captionDesc.innerHTML = (`${data.weather[0].description}`).toUpperCase()
}
