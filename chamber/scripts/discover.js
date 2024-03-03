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

function displayDaysSinceLastVisit() {

  const lastVisit = localStorage.getItem('lastVisit');
  if (lastVisit) {
      const lastVisited = parseInt(lastVisit);
      const currentTime = Date.now();
      const timeDifference = currentTime - lastVisit;
      const oneDayInMilliseconds = 24 * 60 * 60 * 1000; // 1 day in milliseconds

      if (timeDifference < oneDayInMilliseconds) {
          return "Back so soon! Awesome!";
      } else {
          const daysDifference = Math.floor(timeDifference / oneDayInMilliseconds);
          if (daysDifference === 1) {
              return "You last visited 1 day ago.";
          } else {
              return "You last visited " + daysDifference + " days ago.";
          }
      }
  } else {
      return "Welcome! Let us know if you have any questions.";
  }
}


// displayDaysSinceLastVisit()
const visit = document.querySelector(".visit").innerHTML = displayDaysSinceLastVisit();


