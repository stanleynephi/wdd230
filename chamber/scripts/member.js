
const addresses = document.querySelector(".directory");
const baseUrl = "https://stanleynephi.github.io/wdd230/";
const membersAPI = "https://stanleynephi.github.io/wdd230/chamber/data/members.json";


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
        let card = document.createElement("p");
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
        phone1.textContent = detail.phonenumbers.number1

     
        // web.href = detail.website
    })


    phones.appendChild(phone1)

    card.append(names,address1,web,phones)

    addresses.appendChild(card)
    });

}
