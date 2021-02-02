const util = require("util")
const fs = require("fs")
// Richiamo le librerie che mi servono, ovviamente segui la procedura npm install node-fetch, npm init -y 

const load = util.promisify(fs.readFile)
//Promisifico la funzione

const paths = ["./text1.txt","./text2.txt","./text3.txt"]
const promise = Promise.allSettled([
    load(paths[0]).then((data) => data.toString()),
    load(paths[1]).then((data) => data.toString()),
    load(paths[2]).then((data) => data.toString())
])
.then((results) => console.log("Raccolta testi : "+results[0].value+" "+results[1].value+" "+results[2].value))