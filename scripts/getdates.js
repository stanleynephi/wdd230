const name = document.querySelector("footer p");
const student = "Nuley Stanley Nephi";
const lastmod = document.querySelector("#lastmodified")
const visit = document.querySelector(".visits");

// creaate the date and time object
const option = {
    day: "numeric",
    month: "short",
    year: "numeric"
};

const option2 = {
    day: "numeric",
    month : "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
}

// copyright
name.innerHTML = `&copy` +" "+ `${new Date().getFullYear()}`+" "+ `${student}`

// temperature
// function getCelsius(fahrenheit) {
//     return (fahrenheit - 32) * (5/9);}

// let temperature = getCelsius(84);

// last modified
const modified = new Date(document.lastModified)
const showmodified = modified.getDate()

lastmod.innerHTML = `Last Modified:`+` `+`${modified.toLocaleDateString("en-UK", option2)}`;




    // // Select the second section with class "card"
    // const secondSection = document.querySelector('.weather p');

    // // populate
    // secondSection.innerHTML =  `&#127774;`+" "+`Temperature` + " "+ `${Math.floor(temperature,1)}` +`&deg;`+ "-" + "F";


    let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

    if(numVisits !== 0) {
        visit.textContent = numVisits;
    }
    else{
        visit.textContent = `This is your first visit. 🥳 Welcome!`;
    }

    numVisits++;

    localStorage.setItem("numVisits-ls", numVisits);


const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});





const url = "https://api.openweathermap.org/data/2.5/weather?lat=5.55&lon=0.19&appid=b2f21d334d4a4feb8a2dffa3560b3b92&units=metric";


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


    curentTemp.innerHTML = `${Math.ceil(data.main.temp,1)}.0 &deg;C`;
    weatherIcon.setAttribute("src",iconsSrc)
    weatherIcon.setAttribute( "alt",`Image Icon For ${data.weather[0].description}`)
    captionDesc.innerHTML = (`${data.weather[0].description}`).toUpperCase()
}


