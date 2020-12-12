function getMail(){
    return prompt("Insert your mail address","")
}

function convalidateEmail(email){
    let valid = (new RegExp("@")).test(email)
    return valid
}

function process(){
    while (true){
        if(convalidateEmail(getMail())){
            alert("Valid email address, continue") 
            break
        }
        else{
            alert("Wrong email address, maybe you committed a mistake while writing it. Please insert a new one")
        }
    }
}
