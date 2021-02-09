const util = require("util")
const fs = require("fs")
const fetch = require("node-fetch")
// Richiamo le librerie che mi servono, ovviamente segui la procedura npm install node-fetch, npm init -y 

fetch("https://jsonplaceholder.typicode.com/posts",{
    method : "get" 
})
  .then(response => response.json())
  .then(response => {
      response.forEach((e) => {
        if (e.id % 2 == 1) {
            console.log("Titolo "+(e.id+1)+" : "+ e.title)  }
        })
  })
// Stampa i titoli di tutti i post con id dispari
fetch("https://jsonplaceholder.typicode.com/posts",{
    method : "get" 
})
  .then(response => response.json())
  .then(response => { 
      let words = 1
      let text
      response.forEach((e) => {
          text = e.body 
          for( let i = 0;i < text.length ; i++){
              if (text[i] == " " || text[i] == "\n"){
                  words ++
              }
          }
          console.log(e.title +" words  : "+words)
          words = 1
})})
