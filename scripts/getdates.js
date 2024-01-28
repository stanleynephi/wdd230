const name = document.querySelector("footer p");
const student = "Nuley Stanley Nephi";
const lastmod = document.querySelector("#lastmodified")
const visit = document.querySelector(".card p:nth-child(3)");

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
function getCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5/9);}

let temperature = getCelsius(84);

// last modified
const modified = new Date(document.lastModified)
const showmodified = modified.getDate()

lastmod.innerHTML = `Last Modified:`+` `+`${modified.toLocaleDateString("en-UK", option2)}`;




    // Select the second section with class "card"
    const secondSection = document.querySelector('.card p:nth-child(4)');

    // populate
    secondSection.innerHTML =  `&#127774;`+" "+`Temperature` + " "+ `${Math.floor(temperature,1)}` +`&deg;`+ "-" + "F";




    // create the count visit
    let count = parseInt(localStorage.getItem("visitorCounter") || "0");

    count++;

    localStorage.setItem("visitorCounter",count);

    visit.innerHTML = `Page Visits: ` + `${count}`


const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});