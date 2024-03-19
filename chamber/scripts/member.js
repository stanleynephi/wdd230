const address = document.querySelector(".directory");
const baseUrl = "https://stanleynephi.github.io/wdd230/";
const membersAPI = "https://stanleynephi.github.io/wdd230/chamber/data/members.json";


// fucntion to fetch the data from the api
async function getData(){
    const response = await fetch(membersAPI);
    const members = await  response.json();
    console.log(members.companies)
}