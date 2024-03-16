const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector("#cards");


async function getProphetData(){
    const response = await fetch(url)
    const data = await response.json()
    // const prophet = data.prophets;
    console.table(data.prophets)
    displayProphets(data.prophets)
}

getProphetData();




const displayProphets = (data) => {
    data.forEach((prophet) => {
        let card = document.createElement("section");
        let portrait = document.createElement("img");
        let fullname = document.createElement("h2");
        let dates = document.createElement("dates");

        fullname.style.marginTop="60px";
        dates.style.marginBottom="20px"
        
        dates.textContent = `Born on ${prophet.birthdate} and Died on ${prophet.death}`;
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${prophet.name}`)
        portrait.setAttribute("loading","lazy")
        portrait.setAttribute("width","340")
        portrait.setAttribute("height","440");
        fullname.textContent=`${prophet.name}  ${prophet.lastname}`;

        card.appendChild(fullname)
        card.appendChild(dates)
        card.appendChild(portrait)


        cards.appendChild(card)
    });
}

// function displayProphets(prophets){
//         prophets.foreach((prophet) => {
//             let card = document.createElement("section");
//             let fullname = document.createElement("h2");
//             let portrait = document.createElement("img");
            
//             fullname.textContent=`${prophet["name"]}`;
//             portrait.setAttribute("src", prophet.imageurl);
//             portrait.setAttribute("alt", `Portrait of ${prophet.name}`)
//             portrait.setAttribute("loading","lazy")
//             portrait.setAttribute("width","340")
//             portrait.setAttribute("height","440");
    
//             card.appendChild(fullname)
//             card.appendChild(portrait)
        
//     });
// }