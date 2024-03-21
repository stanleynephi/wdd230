
const addresses = document.querySelector(".cards");
const baseUrl = "https://stanleynephi.github.io/wdd230/";
const membersAPI = "https://stanleynephi.github.io/wdd230/chamber/data/members.json";
const buttonslist = document.querySelector("#list")
const buttonsgrid = document.querySelector("#grid")


// fucntion to fetch the data from the api
async function getData(){
    const response = await fetch(membersAPI);
    const data = await response.json();
    console.table(data.companies)
    populateData(data.companies)
}

getData()

function populateData(companies){
    companies.forEach((member) => {
        //create a card for each
        let card = document.createElement("div")
        let image = document.createElement("img")
        let names = document.createElement("h4");
        let address1 = document.createElement("h5");
        let web = document.createElement("a");
        let phones = document.createElement("ol")
        let phone1 = document.createElement("li");

    member.details.forEach((detail) => {

        names.textContent = detail.name;
        address1.textContent = detail.address
        web.textContent = detail.website
        web.setAttribute('href',`${detail.website}`)
        phone1.textContent = detail.phonenumbers.number;
        image.setAttribute("src", detail.image)
        image.setAttribute("alt", `Portrait of ${detail.name}`)
        image.setAttribute("loading","lazy")
        image.setAttribute("width","340")
        image.setAttribute("height","440");


    card.appendChild(image)
    card.appendChild(names)
    card.appendChild(address1)
    card.appendChild(web)  


    card.style.margin="3%"
    })

    
    addresses.appendChild(card)

    });

}

buttonslist.addEventListener("click", () => {
	// example using arrow function
	addresses.classList.add("list");
});

buttonsgrid.addEventListener("click", () => {
	// example using arrow function
	addresses.classList.remove("list");
   
});





