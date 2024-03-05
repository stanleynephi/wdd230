//function to set the last visit date in local storage
const option = {
    day: "numeric",
    month : "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
}



const date = new Date().toLocaleDateString(undefined,option) 

function setLastVisit(){
    localStorage.setItem("lastVisit", Date.now())
}
setLastVisit();


let visitsmade = Number(window.localStorage.getItem("Visitsmade-ls")) || 0;
visitsmade++;
localStorage.setItem("Visitsmade-ls",visitsmade)

    

function displayDaysSinceLastVisit() {

const lastVisit = localStorage.getItem('lastVisit');
const currentTime = Date.now();
const oneDayInMilliseconds = 24 * 60 * 60 * 1000; // 1 day in milliseconds



if (visitsmade === 1) {
    localStorage.setItem('lastVisit', currentTime);
    return "Welcome! This is your first time on the website.";
} else {
    // Calculate the time difference between the current visit and the last visit
    const lastVisited = parseInt(lastVisit);
    const timeDifference = currentTime - lastVisited;
    
    if (timeDifference < oneDayInMilliseconds) {
        let visits = parseInt(localStorage.getItem('Visits')) || 0;
        if (visits === 1) {
            visits++;
            localStorage.setItem('Visit', visits);
        }
        return "Back So Soon"
    } else {
        return "Welcome back! It's been more than a day since your last visit.";
    }
}

}


displayDaysSinceLastVisit()
const visit = document.querySelector(".visited").innerHTML = displayDaysSinceLastVisit();


