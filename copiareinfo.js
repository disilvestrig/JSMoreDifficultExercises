//npm init -y
//npm i node-fetch
//touch index.js

const fetch = require("node-fetch")

const accreditamento = () => {fetch("http://192.168.1.231:8080/accreditamento",{
    method : "post" ,
    body : JSON.stringify({ nome : "giulio di silvestri"}),
    headers : {"content-type" : "application/json" },
})
.then((response) => response.json())
.then(res => console.log(res))}

const es1 = () => {
    fetch("http://192.168.1.231:8080/esercizi/1",{
        method : "get",
        headers : {"x-data" : "true"}
    })
    .then(response => response.json())
    .then(res => console.log(res))
    .then(results => 
        fetch("http://192.168.1.231:8080/esercizi/1",{
        method : "post" ,
        body : JSON.stringify({ data : results}),
        headers : {"content-type" : "application/json" },
    }))
    .then(response => response.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
    
}

const es2 = () => {
    fetch("http://192.168.1.231:8080/esercizi/2",{
        method : "get",
        headers : {"x-data" : "true"}
    })
    .then(response => response.json())
    .then(res => console.log(res))
    .then(results => 
        fetch("http://192.168.1.231:8080/esercizi/2",{
        method : "post" ,
        body : JSON.stringify({ data : results}),
        headers : {"content-type" : "application/json" },
    }))
    .then(response => response.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
    
}
const es3 = () => {
    fetch("http://192.168.1.231:8080/esercizi/3",{
        method : "get",
        headers : {"x-data" : "true"}
    })
    .then(response => response.json())
    .then(res => console.log(res))
    .then(results => 
        fetch("http://192.168.1.231:8080/esercizi/3",{
        method : "post" ,
        body : JSON.stringify({ data : results}),
        headers : {"content-type" : "application/json" },
    }))
    .then(response => response.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
    
}

//accreditamento()
//es1()
//es2()
//es3()
