//work on last modified
const option = {
    day: "numeric",
    month : "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
}

const lastmod = document.querySelector("#lastmodified");
const modifieddate = new Date(document.lastModified)
const showmodified = modifieddate.getDate()

lastmod.innerHTML = `Last Modified:`+` `+`${modifieddate.toLocaleDateString("en-UK", option)}`;


const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

//popup to ask user for a theme change.
const body = document.querySelector("html");
const theme =document.querySelector("input");
const header = document.querySelector("header");
const purpose = document.querySelector(".purpose")
const mail = document.querySelector("#footer");



theme.addEventListener("change",() => {
    if(theme.checked){
        body.style.backgroundColor = "black";
        body.style.color = "white";
        header.style.backgroundColor = "black";
        navigation.style.backgroundColor = "black";
        purpose.style.backgroundColor = "black";
        purpose.style.color = "white";
        mail.style.backgroundColor = "black";
        mail.style.color = "white";
        document.querySelector(".calltoaction p").style.color = "white";
        document.querySelector("footer").style.borderTop = "3px solid white"; 
}
    else{
        body.style.backgroundColor = "white";
        body.style.color = "black";
        header.style.backgroundColor = "white"
        navigation.style.backgroundColor = "white";
        purpose.style.backgroundColor ="aliceblue";
        purpose.style.color = "black";
        mail.style.backgroundColor = "white";
        mail.style.color = "black";
        document.querySelector(".calltoaction p").style.color = "black";
        document.querySelector("footer").style.borderTop = "3px solid black"; 
    }
})




import{
    getData
} from "./windchill.js";


const buttons = document.getElementById("btn1");
buttons.addEventListener("click" , getData);


//remove banner if day is not tuesday
const banner = document.querySelector("article");

const day = new Date();
let days = day.getDay();
console.log(days)
// conditional statement

if (days === 1 || days === 2 || days === 3){
    banner.classList.add(".banner")
}
else{
    //do nothing
    banner.style.display = "none"
}






