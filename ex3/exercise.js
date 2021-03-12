fetch('https://www.omdbapi.com/?s=harry potter&apikey=5a217d93')
    .then(response => response.json())
    .then( data => {
        console.log(data)
            data.Search.forEach(function(elem) {   
            var body = document.querySelector("body")
            var main = document.createElement("div")
            var Title = document.createElement("p")
            var Year = document.createElement("p")
            var image = document.createElement("img")
            Title.innerHTML = elem.Title
            Year.innerHTML = elem.Year
            image.setAttribute("src", elem.Poster)
            body.appendChild(main)
            main.appendChild(Title)
            main.appendChild(Year)
            main.appendChild(image)
         })
    
    })

 var searchBox = document.querySelector("#t") 

function change() {
    
    var inputText = document.querySelector("#t").value
    console.log(inputText)
    fetch("https://www.omdbapi.com/?s="+ inputText +"&apikey=5a217d93")
    .then(response => response.json())
    .then( data => {
        console.log(data)
        if (data.Search) {
            var div = document.querySelectorAll("div")
            div.forEach( function (item){
                item.remove();
                console.log("text")
            })
            data.Search.forEach(function(item) {   
            var body = document.querySelector("body")
            var p = document.createElement("div")
            var p1 = document.createElement("p")
            var p2 = document.createElement("p")
            var image = document.createElement("img")
            p1.innerHTML = item.Title
            p2.innerHTML = item.Year
            image.setAttribute("src", item.Poster)
            body.appendChild(p)
            p.appendChild(p1)
            p.appendChild(p2)
            p.appendChild(image)
            console.log(item.Title)
        })} 
    
    })
} 
  
searchBox.addEventListener("keyup",change)