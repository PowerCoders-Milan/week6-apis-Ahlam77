fetch('https://api.openweathermap.org/data/2.5/weather?q=Barlin&units=metric&appid=65daeff6b19a4d6bb23b5f9ead176075')
    .then(response => response.json())
    .then( data => {
        var body = document.querySelector("body")
        var p = document.querySelector("div")
        var p1 = document.createElement("p")
        var p2 = document.createElement("p")
        var p3 = document.createElement("p")
        body.appendChild(p)
        p.appendChild(p1)
        p.appendChild(p2)
        p.appendChild(p3)
        p1.innerHTML = data.name
        p2.innerHTML = data.main.temp
        p3.innerHTML = data.weather[0].description
    });

    fetch('https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=65daeff6b19a4d6bb23b5f9ead176075')
    .then(response => response.json())
    .then( data => {
        var body = document.querySelector("body")
        var p = document.querySelector("div")
        var p1 = document.createElement("p")
        var p2 = document.createElement("p")
        var p3 = document.createElement("p")
        body.appendChild(p)
        p.appendChild(p1)
        p.appendChild(p2)
        p.appendChild(p3)
        p1.innerHTML = data.name
        p2.innerHTML = data.main.temp
        p3.innerHTML = data.weather[0].description
        });
        
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Tripoli&units=metric&appid=65daeff6b19a4d6bb23b5f9ead176075')
    .then(response => response.json())
    .then( data => {
        var body = document.querySelector("body")
        var p = document.querySelector ("div")
        var p1 = document.createElement("p")
        var p2 = document.createElement("p")
        var p3 = document.createElement("p")
        body.appendChild(p)
        p.appendChild(p1)
        p.appendChild(p2)
        p.appendChild(p3)
        p1.innerHTML = data.name
        p2.innerHTML = data.main.temp
        p3.innerHTML = data.weather[0].description
        console.log(data)
        console.log(data.main)
        });
