const baseURL = "https://stanleynephi.github.io/wdd230/";
const linksURL = "https://stanleynephi.github.io/wdd230/data/links.json";
const main = document.querySelector(".card")

async function getLinks(){
    const response = await fetch(linksURL);
    const weeks = await response.json();
    console.table(weeks.lessons)
    displayLinks(weeks.lessons);
}

getLinks();


function displayLinks(weeks){
    weeks.forEach((lesson) => {
        // create a list and a elements
        let list = document.createElement("ul");
        lesson.links.forEach(link =>{
            let item = document.createElement("li");
            let urls = document.createElement("a");

            urls.textContent =link.title
            urls.href = baseURL + link.url

            item.appendChild(urls)
            list.appendChild(item)
        })

        main.appendChild(list)
        
    });
}
