//function to set the last visit date in local storage
function setLastVisit(){
    const now = Date.now();
    localStorage.setItem("lastVisit", now)
}

function getLastVisit(){
    let lastVisitTime = localStorage.getItem("lastVisit")
    if (lastVisitTime){
        return new Date.parse(lastVisitTime);
    }
    else{
        return "Welcome! Let us know if you have any questions"
    }
}

const visits = document.querySelector(".visit p").innerHTML = getLastVisit();

let lastVisitTime = getLastVisit();
if (lastVisitTime) {
    console.log("Last visit: " + lastVisitTime);
} else {
    console.log("First time visit.");
    setLastVisitLocalStorage();
}

// document.getElementById('visited').innerHTML=getLastVisit()

