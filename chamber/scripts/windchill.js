//elements
const temp = document.getElementById("temperature");
const wind = document.getElementById("windspeed");
const result = document.getElementById( "results" );


//function
export function display(){
    const tempLimit = 50;
    const speedLimit = 3.0;

    const temp1 = parseFloat(temp.value);
    const wind1 = parseFloat(wind.value);

    if(tempLimit <= temp1 && wind1 > speedLimit){
        let windChill = 35.74 + (0.6215 * temp1) - (35.75 * Math.pow(wind1, 0.16)) + (0.4275 * temp1 * Math.pow(wind1, 0.16));
        result.innerHTML = windChill.toFixed(2); 
        temp.focus();
        temp.value ="";
        wind.focus();
        wind.value ="";
    }
    else {
        result.innerHTML = "N/A";
        temp.focus();
        temp.value ="";
        wind.focus();
        wind.value ="";
    }


}


