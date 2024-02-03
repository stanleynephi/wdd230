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

