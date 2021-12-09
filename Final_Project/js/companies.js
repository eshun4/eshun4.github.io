const requestURL = '/Final_Project/json/companies.json';


fetch(requestURL)
  .then(function (response) {
     if(response.ok) {
         return response.json();
     }
    throw new ERROR('Network response was not ok');
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const companies = jsonObject['companies'];
    console.log(companies)
     // temporary checking for valid response and data parsing
    for (let i = 0; i < companies.length; i++ ) {
      
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    let h3a = document.createElement('h3');
    let h3b = document.createElement('h3');
    let img = document.createElement('img');
    
    h2.textContent = companies[i].name;
    h3.textContent = 'Phone: ' + companies[i].phone
    h3a.textContent = 'Email: ' + companies[i].email
    h3b.textContent = 'Address: ' + companies[i].address
    img.src = companies[i].logo_url
    
    
    card.appendChild(h2);
    card.appendChild(h3);
    card.appendChild(h3a);
    card.appendChild(h3b);
    card.appendChild(img);
    document.querySelector('div.cards').appendChild(card);
  }
  })
.catch(function(error){
   console.log('Fetch error: ', error.message);
})