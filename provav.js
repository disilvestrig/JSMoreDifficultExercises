const fs = require("fs")

const path = ["./testo.txt","./testo1.txt","./testo19.txt","./result.txt"]

fs.readFile(path[0] , (err,data) => {
    let result = ""
    if(err){
        throw err
    }
    else{
        result += data.toString()
        fs.readFile(path[1] , (err,data) => {
            if(err){
                throw err
            }
            else{
                result += data.toString()
                fs.readFile(path[2], (err,data) => {
                    if(err){
                        throw err
                    }
                    else{
                        result += data.toString()
                        fs.writeFile(path[3],result, (err) =>{
                            if(err){
                                throw err;
                            }
                            else{
                                return
                            }
                        } )

                    }
                })
            }
        })
    }
})


  
