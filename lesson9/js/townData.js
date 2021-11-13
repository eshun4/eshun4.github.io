// This is to display the data from the JSON file on the page
const requestURL = '/lesson9/json/towndata.json';
const towns2get = [
    'Preston',
    'Fish Haven',
    'Soda Springs'
]

fetch(requestURL)
    .then((response) => {
        return response.json()
    })
    .then((jsonData) => {
        jsonData['towns'].filter(item => towns2get.includes(item.name))
            .forEach(town => {
                let i = town.photo
                let n = town.name
                let m = town.motto
                let f = town.yearFounded
                let p = town.currentPopulation
                let r = town.averageRainfall
                
                let div = document.createElement('div')
                let img = document.createElement('img')
                let sect = document.createElement('section')
                let h2 = document.createElement('h2')
                let spn = document.createElement('span')
                let p1 = document.createElement('p')
                let p2 = document.createElement('p')
                let p3 = document.createElement('p')
                div.classList.add("townCard");
                img.setAttribute('src','/lesson9/images/'+ i)
                img.setAttribute('alt','header image for '+ n)
                h2.textContent = n
                spn.textContent = m
                p1.textContent = 'Year Founded: '+ f
                p2.textContent = 'Population: '+ p
                p3.textContent = 'Annual Rain Fall: '+ r
                div.appendChild(sect)
                sect.appendChild(h2)
                sect.appendChild(spn)
                sect.appendChild(p1)
                sect.appendChild(p2)
                sect.appendChild(p3)
                div.appendChild(img)
                document.querySelector("#towns").appendChild(div)
            })
    })
