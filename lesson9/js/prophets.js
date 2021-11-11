const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';


fetch(requestURL)
  .then(function (response) {
     if(response.ok) {
         return response.json();
     }
    throw new ERROR('Network response was not ok');
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const prophets = jsonObject['prophets'];
     // temporary checking for valid response and data parsing
    for (let i = 0; i < prophets.length; i++ ) {
      
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    let h3b = document.createElement('h3');
    let img = document.createElement('img');
    
    h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
    h3.textContent = 'Date of Birth: ' + prophets[i].birthdate 
    h3b.textContent = 'Place of Birth: ' + prophets[i].birthplace
    img.src = prophets[i].imageurl
    
    
    card.appendChild(h2);
    card.appendChild(h3);
    card.appendChild(h3b);
    card.appendChild(img);
    document.querySelector('div.cards').appendChild(card);
  }
  })
.catch(function(error){
   console.log('Fetch error: ', error.message);
})