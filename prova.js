const fetch = require("node-fetch")


const accreditamento = () => {fetch("http://127.0.0.1:8080/accreditamento",{
    method : "post" ,
    body : JSON.stringify({ nome : "giulio di silvestri"}),
    headers : {"content-type" : "application/json" },
})
.then((response) => response.json())
.then(res => console.log(res))}


const es13 = () =>{
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

const es6 = () => {
    fetch("http://127.0.0.1:8080/esercizi/6",{
        method : "get",
        headers : {"x-data" : "true"}
    })
    .then(response => response.json())
    .then(res => res.data)
    .then(res => {
        results = res.reduce((acc,cur) => {
            return acc+cur
        })
        console.log(results)
        return results
    })
    .then(results => 
        fetch("http://127.0.0.1:8080/esercizi/6",{
        method : "post" ,
        body : JSON.stringify({ data : results}),
        headers : {"content-type" : "application/json" },
    }))
    .then(response => response.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
}
const es7 = () => {
    fetch("http://127.0.0.1:8080/esercizi/7",{
        method : "get",
        headers : {"x-data" : "true"}
    })
    .then(response => response.json())
    .then(res => res.data)
    .then(res => {
        results = res.reduce((acc,cur) => {
            if(cur > 5){
               return acc+cur
            }
            else{
                return acc
            }
        })
        console.log(results)
        return results
    })
    .then(results => 
        fetch("http://127.0.0.1:8080/esercizi/7",{
        method : "post" ,
        body : JSON.stringify({ data : results}),
        headers : {"content-type" : "application/json" },
    }))
    .then(response => response.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

const es8 = () => {
    fetch("http://127.0.0.1:8080/esercizi/8",{
        method : "get",
        headers : {"x-data" : "true"}
    })
    .then(response => response.json())
    .then(res => res.data)
    .then(res => {
        results = res.reduce((acc,cur,idx) => {
            if(idx % 2 == 0){
               return acc+cur
            }
            else{
                return acc
            }
        })
        console.log(results)
        return results
    })
    .then(results => 
        fetch("http://127.0.0.1:8080/esercizi/8",{
        method : "post" ,
        body : JSON.stringify({ data : results}),
        headers : {"content-type" : "application/json" },
    }))
    .then(response => response.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
}


const es9 = () => {
    fetch("http://127.0.0.1:8080/esercizi/9",{
        method : "get",
        headers : {"x-data" : "true"}
    })
    .then(response => response.json())
    .then(res => res.data)
    .then(res => {
        results = res.reduce((acc,cur,idx) => {
            if(cur % 2 == 1){
               return acc+cur
            }
            else{
                return acc
            }
        })
        console.log(results)
        return results
    })
    .then(results => 
        fetch("http://127.0.0.1:8080/esercizi/9",{
        method : "post" ,
        body : JSON.stringify({ data : results}),
        headers : {"content-type" : "application/json" },
    }))
    .then(response => response.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
}
const es10 = () => {
    fetch("http://127.0.0.1:8080/esercizi/10",{
        method : "get",
        headers : {"x-data" : "true"}
    })
    .then(response => response.json())
    .then(res => res.data)
    .then(res => {
        results = res.sort()
        console.log(results)
        return results
    })
    .then(results => 
        fetch("http://127.0.0.1:8080/esercizi/10",{
        method : "post" ,
        body : JSON.stringify({ data : results}),
        headers : {"content-type" : "application/json" },
    }))
    .then(response => response.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

const es11 = () => {
    fetch("http://127.0.0.1:8080/esercizi/11",{
        method : "get",
        headers : {"x-data" : "true"}
    })
    .then(response => response.json())
    .then(res => res.data)
    .then(res => {
        result = res.map( e => e.toLowerCase())
        results = result.sort()
        console.log(results)
        return results
    })
    .then(results => 
        fetch("http://127.0.0.1:8080/esercizi/11",{
        method : "post" ,
        body : JSON.stringify({ data : results}),
        headers : {"content-type" : "application/json" },
    }))
    .then(response => response.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

const es12 = () => {
    fetch("http://127.0.0.1:8080/esercizi/12",{
        method : "get",
        headers : {"x-data" : "true"}
    })
    .then(response => response.json())
    .then(res => res.data)
    .then(res => {
        results = res.map( e => e-1)
        console.log(results)
        return results
    })
    .then(results => 
        fetch("http://127.0.0.1:8080/esercizi/12",{
        method : "post" ,
        body : JSON.stringify({ data : results}),
        headers : {"content-type" : "application/json" },
    }))
    .then(response => response.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

const es14 = () => {
    fetch("http://127.0.0.1:8080/esercizi/14",{
        method : "get",
        headers : {"x-data" : "true"}
    })
    .then(response => response.json())
    .then(res => res.data)
    .then(res => {
        let positivi = 0
        let negativi = 0
        let zeri = 0
        res.forEach( e => {
            if ( e < 0){
                negativi ++
            }
            else if (e == 0){
                zeri ++
            }
            else {
                positivi ++
            }
        })
        results = {
            "positivi" : positivi,
            "negativi" : negativi,
            "zeri" : zeri
        }
        console.log(results)
        return results
    })
    .then(results => 
        fetch("http://127.0.0.1:8080/esercizi/14",{
        method : "post" ,
        body : JSON.stringify({ data : results}),
        headers : {"content-type" : "application/json" },
    }))
    .then(response => response.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

const es15 = () => {
    fetch("http://127.0.0.1:8080/esercizi/15",{
        method : "get",
        headers : {"x-data" : "true"}
    })
    .then(response => response.json())
    .then(res => res.data)
    .then(res => {
        results = res.map( e => {
            if(e.length %2 == 0){
                return e.toUpperCase()
            }
            else{
                return e.toLowerCase()
            }
        })
        console.log(results)
        return results
    })
    .then(results => 
        fetch("http://127.0.0.1:8080/esercizi/15",{
        method : "post" ,
        body : JSON.stringify({ data : results}),
        headers : {"content-type" : "application/json" },
    }))
    .then(response => response.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

const es16 = () => {
    fetch("http://127.0.0.1:8080/esercizi/16",{
        method : "get",
        headers : {"x-data" : "true"}
    })
    .then(response => response.json())
    .then(res => res.data)
    .then(res => {
        results = res.reduce((acc,cur,idx) => {
            if (idx == res.length){
                return acc+cur
            }
            else{
                return acc+" "+cur
            }
        })
        console.log(results)
        return results})
    .then(results => 
        fetch("http://127.0.0.1:8080/esercizi/16",{
        method : "post" ,
        body : JSON.stringify({ data : results}),
        headers : {"content-type" : "application/json" },
    }))
    .then(response => response.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

const es17 = () => {
    fetch("http://127.0.0.1:8080/esercizi/17",{
        method : "get",
        headers : {"x-data" : "true"}
    })
    .then(response => response.json())
    .then(res => res.data)
    .then(res => {
        console.log(res)
        results = res.reduce((acc,cur,idx) => {
            return acc+cur[cur.length-1]
        },"")
        console.log(results)
        return results})
    .then(results => 
        fetch("http://127.0.0.1:8080/esercizi/17",{
        method : "post" ,
        body : JSON.stringify({ data : results}),
        headers : {"content-type" : "application/json" },
    }))
    .then(response => response.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

const es18 = () => {
    fetch("http://127.0.0.1:8080/esercizi/18",{
        method : "get",
        headers : {"x-data" : "true"}
    })
    .then(response => response.json())
    .then(res => res.data)
    .then(res => {
        console.log(res)
        results = res.reduce((acc,cur,idx) => {
            if(cur.length > 4){
                return acc+cur[0]
            }
            else {
                return acc
            }
        },"")
        console.log(results)
        return results})
    .then(results => 
        fetch("http://127.0.0.1:8080/esercizi/18",{
        method : "post" ,
        body : JSON.stringify({ data : results}),
        headers : {"content-type" : "application/json" },
    }))
    .then(response => response.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

const es19 = () => {
    fetch("http://127.0.0.1:8080/esercizi/19",{
        method : "get",
        headers : {"x-data" : "true"}
    })
    .then(response => response.json())
    .then(res => res.data)
    .then(res => {
        console.log(res)
        let array = new Array (0)
        for(let i = 1;i<=res;i++){
                if (res%i == 0){
                    array.push(i)
                }
            }
        console.log(array)
        return array})
    .then(results => 
        fetch("http://127.0.0.1:8080/esercizi/19",{
        method : "post" ,
        body : JSON.stringify({ data : results}),
        headers : {"content-type" : "application/json" },
    }))
    .then(response => response.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
}
const es20 = () => {
    fetch("http://127.0.0.1:8080/esercizi/20",{
        method : "get",
        headers : {"x-data" : "true"}
    })
    .then(response => response.json())
    .then(res => res.data)
    .then(res => {
        console.log(res)
        let array = new Array (0)
        res.forEach( (e,idx) => {
            array[idx] = e.figli.length
        })
        console.log(array)
        return array})
    .then(results => 
        fetch("http://127.0.0.1:8080/esercizi/20",{
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
//es6()
//es7()
//es8()
//es9()
//es10()
//es11()
//es12()
//es14()
//es15()
//es16()
//es17()
//es18()
//es19()
//es20()
