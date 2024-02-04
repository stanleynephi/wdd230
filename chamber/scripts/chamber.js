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

