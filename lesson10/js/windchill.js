// Calculate the Windchill
function buildWC(speed, temp) {
    let wcTemp = document.getElementById('windchill');
   
    // Compute the windchill
    let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    console.log(wc);
   
    // Round the answer down to integer
    winc = Math.floor(wc);
   
    // If chill is greater than temp, return the temp
    wc = (winc > temp)?temp:winc= "N/A";
   
    // Display the windchill
    console.log(winc);
    wcTemp.innerHTML = winc;
}

let windspeed = document.getElementById('wind_speed').innerHTML;
let temp = document.getElementById('temp').innerHTML;


buildWC(windspeed,temp);