const fetch = require("node-fetch")


const accreditamento = () => {fetch("http://127.0.0.1:8080/accreditamento",{
    method : "post" ,
    body : JSON.stringify({ nome : "giulio di silvestri"}),
    headers : {"content-type" : "application/json" },
})
.then((response) => response.json())
.then(res => console.log(res))}


const sommacolsuccessivo = () =>{
    fetch("http://127.0.0.1:8080/esercizi/13",{
        method : "get",
        headers : {"x-data" : "true"}
    })
    .then(response => response.json())
    .then(res => {
        console.log(res)
        for(let i = 0;i<res.data.length;i++){
            if(i < res.data.length-1){
                res.data[i] += res.data[i+1]
            }
        }
        console.log(res.data)
        return res.data
    })
.then(results => 
    fetch("http://127.0.0.1:8080/esercizi/13",{
    method : "post" ,
    body : JSON.stringify({ data : results}),
    headers : {"content-type" : "application/json" },
}))
.then(response => response.json())
.then(res => console.log(res))
.catch(err => console.log(err))
}

const es1 = () => {
    fetch("http://127.0.0.1:8080/esercizi/1",{
        method : "get",
        headers : {"x-data" : "true"}
    })
    .then(response => response.json())
    .then(res => res.data.toLowerCase())
    .then(results => 
        fetch("http://127.0.0.1:8080/esercizi/1",{
        method : "post" ,
        body : JSON.stringify({ data : results}),
        headers : {"content-type" : "application/json" },
    }))
    .then(response => response.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
    
}
const es2 = () => {
    fetch("http://127.0.0.1:8080/esercizi/2",{
        method : "get",
        headers : {"x-data" : "true"}
    })
    .then(response => response.json())
    .then(res => res.data*res.data)
    .then(results => 
        fetch("http://127.0.0.1:8080/esercizi/2",{
        method : "post" ,
        body : JSON.stringify({ data : results}),
        headers : {"content-type" : "application/json" },
    }))
    .then(response => response.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

const es3 = () => {
    fetch("http://127.0.0.1:8080/esercizi/3",{
        method : "get",
        headers : {"x-data" : "true"}
    })
    .then(response => response.json())
    .then(res => res.data.cognome)
    .then(results => 
        fetch("http://127.0.0.1:8080/esercizi/3",{
        method : "post" ,
        body : JSON.stringify({ data : results}),
        headers : {"content-type" : "application/json" },
    }))
    .then(response => response.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

const es4 = () => {
    fetch("http://127.0.0.1:8080/esercizi/4",{
        method : "get",
        headers : {"x-data" : "true"}
    })
    .then(response => response.json())
    .then(res => res.data.length)
    .then(results => 
        fetch("http://127.0.0.1:8080/esercizi/4",{
        method : "post" ,
        body : JSON.stringify({ data : results}),
        headers : {"content-type" : "application/json" },
    }))
    .then(response => response.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

const es5 = () => {
    fetch("http://127.0.0.1:8080/esercizi/5",{
        method : "get",
        headers : {"x-data" : "true"}
    })
    .then(response => response.json())
    .then(res => res.data)
    .then(res => {
        results = res.map(e => {
            return e.toUpperCase()
        })
        console.log(results)
        return results
    })
    .then(results => 
        fetch("http://127.0.0.1:8080/esercizi/5",{
        method : "post" ,
        body : JSON.stringify({ data : results}),
        headers : {"content-type" : "application/json" },
    }))
    .then(response => response.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
}


//accreditamento()
//es13()
//es1()
//es2()
//es3()
//es4()
//es5()