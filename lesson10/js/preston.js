function toggleMenu(){
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}



function lastModified(){
    var x = document.lastModified;
    let newDate = new Date(x);

    let options = {
        day: "numeric",
        month: "long",
        year: "numeric",
        weekday:"long"
    }
    var formatted_date = Intl.DateTimeFormat("en-US", options).format(newDate)
    document.write( formatted_date);
}

let dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

let curDate = new Date();
let dayName = dayNames[curDate.getDay()];
let monthName = months[curDate.getMonth()];
let year = curDate.getFullYear();
let currentDate = `${dayName}, ${curDate.getDate()}, ${monthName} ${year}`;

document.getElementById("currentDate").innerHTML = currentDate;

/* display banner only fridays */
if(dayName === "Friday") {
    document.getElementById("banner-top").style.display = "block";
}


function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

function selectResponse() {
	const s = document.querySelector('#selected')
	const sel = document.querySelector('#selectbrowser');
	s.style.display = "block";
	s.textContent = sel.value;
	
}


