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

const es21 = () => {
    fetch("http://127.0.0.1:8080/esercizi/21",{
        method : "get",
        headers : {"x-data" : "true"}
    })
    .then(response => response.json())
    .then(res => res.data)
    .then(res => {
        results = res.reduce((acc,cur) => {
            if (cur <= 5){
                acc.push(cur)
                return acc
            }
            else{
                return acc
            }
        }
    ,[])
    return results    
    })
    .then(results => 
        fetch("http://127.0.0.1:8080/esercizi/21",{
        method : "post" ,
        body : JSON.stringify({ data : results}),
        headers : {"content-type" : "application/json" },
    }))
    .then(response => response.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

const es22 = () => {
    fetch("http://127.0.0.1:8080/esercizi/22",{
        method : "get",
        headers : {"x-data" : "true"}
    })
    .then(response => response.json())
    .then(res => res.data)
    .then(res => {
        results = res.reduce((acc,cur) => {
            if(cur >= 3 && cur <= 6){
                acc.push(cur)
                return acc
            }
            else{
                return acc
            }
        }
    ,[])
    return results    
    })
    .then(results => 
        fetch("http://127.0.0.1:8080/esercizi/22",{
        method : "post" ,
        body : JSON.stringify({ data : results}),
        headers : {"content-type" : "application/json" },
    }))
    .then(response => response.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

const es23 = () => {
    fetch("http://127.0.0.1:8080/esercizi/23",{
        method : "get",
        headers : {"x-data" : "true"}
    })
    .then(response => response.json())
    .then(res => res.data)
    .then(res => {
        results = res.reduce((acc,cur) => {
            return acc+cur.anni
        }
    ,0)
    return results    
    })
    .then(results => 
        fetch("http://127.0.0.1:8080/esercizi/23",{
        method : "post" ,
        body : JSON.stringify({ data : results}),
        headers : {"content-type" : "application/json" },
    }))
    .then(response => response.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

const es24 = () => {
    fetch("http://127.0.0.1:8080/esercizi/24",{
        method : "get",
        headers : {"x-data" : "true"}
    })
    .then(response => response.json())
    .then(res => res.data)
    .then(res => {
        results = res.reduce((acc,cur) => {
            if ( cur.cognome[0] == "C"){
                acc.push(cur.nome)
                return acc
            }
            else{
                return acc
            }
        }
    ,[])
    return results    
    })
    .then(results => 
        fetch("http://127.0.0.1:8080/esercizi/24",{
        method : "post" ,
        body : JSON.stringify({ data : results}),
        headers : {"content-type" : "application/json" },
    }))
    .then(response => response.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

const es25 = () => {
    fetch("http://127.0.0.1:8080/esercizi/25",{
        method : "get",
        headers : {"x-data" : "true"}
    })
    .then(response => response.json())
    .then(res => res.data)
    .then(res => {
        results = res.reduce((acc,cur) => {
            for(let i = 0;i< cur.length;i++){
                if(cur[i] == "a" || cur[i] == "A"){
                    acc++
                }
            }
            return acc
        }
    ,0)
    return results    
    })
    .then(results => 
        fetch("http://127.0.0.1:8080/esercizi/25",{
        method : "post" ,
        body : JSON.stringify({ data : results}),
        headers : {"content-type" : "application/json" },
    }))
    .then(response => response.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

const es26 = () => {
    fetch("http://127.0.0.1:8080/esercizi/26",{
        method : "get",
        headers : {"x-data" : "true"}
    })
    .then(response => response.json())
    .then(res => res.data)
    .then(res => {
        results = res.map( e => e*-1)
    return results    
    })
    .then(results => 
        fetch("http://127.0.0.1:8080/esercizi/26",{
        method : "post" ,
        body : JSON.stringify({ data : results}),
        headers : {"content-type" : "application/json" },
    }))
    .then(response => response.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

const es27 = () => {
    fetch("http://127.0.0.1:8080/esercizi/27",{
        method : "get",
        headers : {"x-data" : "true"}
    })
    .then(response => response.json())
    .then(res => res.data)
    .then(res => {
        let array = res.magazzino.concat(res.negozio)
        console.log(array)
        results2 = array.sort()
        console.log(results2)
        results1 = results2.map( (e,idx) => {
            if(e == results2[idx+1]){
                e = undefined
                return e
            }
            else{
                return e
            }
        })
        console.log(results1)
        results = results1.filter(function (el) {
            return el != null;
          });
        console.log(results)
        return results
    })
    .then(results => 
        fetch("http://127.0.0.1:8080/esercizi/27",{
        method : "post" ,
        body : JSON.stringify({ data : results}),
        headers : {"content-type" : "application/json" },
    }))
    .then(response => response.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

const es28 = () => {
    fetch("http://127.0.0.1:8080/esercizi/28",{
        method : "get",
        headers : {"x-data" : "true"}
    })
    .then(response => response.json())
    .then(res => res.data)
    .then(res => {
        let array = res.negozio
        let count = 0
        let results = {}
        array.forEach( e => {
            count = 0
            for(let i = 0;i<array.length;i++){
                if ( e == array[i]){
                    count ++
                }
            }
            for(let i = 0;i<res.magazzino.length;i++){
                if ( e == res.magazzino[i]){
                    count ++
                }
            }    
            eval("results."+e+" = "+count)
        })
        console.log(results) 
        return results
    })
    .then(results => 
        fetch("http://127.0.0.1:8080/esercizi/28",{
        method : "post" ,
        body : JSON.stringify({ data : results}),
        headers : {"content-type" : "application/json" },
    }))
    .then(response => response.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

const es29 = () => {
    fetch("http://127.0.0.1:8080/esercizi/29",{
        method : "get",
        headers : {"x-data" : "true"}
    })
    .then(response => response.json())
    .then(res => res.data)
    .then(res => {
        let results = 1
        for(let i = 1;i<=res;i++){
            results *= i
        }
        console.log(results)
        return results
    })
    .then(results => 
        fetch("http://127.0.0.1:8080/esercizi/29",{
        method : "post" ,
        body : JSON.stringify({ data : results}),
        headers : {"content-type" : "application/json" },
    }))
    .then(response => response.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

const es30 = () => {
    fetch("http://127.0.0.1:8080/esercizi/30",{
        method : "get",
        headers : {"x-data" : "true"}
    })
    .then(response => response.json())
    .then(res => res.data)
    .then(res => {
        let x= 0
        let y= 0
        for(let i = 0;i<= res.length;i++){
            if (res[i] == "X"){
                return {"x" : x, "y":y}
            }
            else if (res[i] == "."){
                x++
            }
            else{
                x = 0
                y++
            }
        }
    })
    .then(results => 
        fetch("http://127.0.0.1:8080/esercizi/30",{
        method : "post" ,
        body : JSON.stringify({ data : results}),
        headers : {"content-type" : "application/json" },
    }))
    .then(response => response.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
}
const es2a = () => {
    fetch("http://127.0.0.1:8080/esercizi/10",{
        method : "get",
        headers : {"x-data" : "true"}
    })
    .then(response => response.json())
    .then(res => res.data)
    .then(res => {
        res = [1,4,2,3,8,5,3,1,0,9]
        results = res.filter( (e) => e>=5)
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

accreditamento()
//es13()
//es1()
es2a()
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
//es21()
//es22()
//es23()
//es24()
//es25()
//es26()
//es27()
//es28()
//es29()
//es30()
