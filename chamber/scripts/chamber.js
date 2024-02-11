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



theme.addEventListener("change",() => {
    if(theme.checked){
        body.style.backgroundColor = "black";
        body.style.color = "white";
        header.style.backgroundColor = "black";
        navigation.style.backgroundColor = "black";
}
    else{
        body.style.backgroundColor = "white";
        body.style.color = "black";
        header.style.backgroundColor = "white"
        navigation.style.backgroundColor = "white";
    }
})


