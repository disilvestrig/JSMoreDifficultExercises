const getCode = () => {
    let code = prompt("Inserisci qui il tuo codice fiscale (3 caratteri per il nome, 3 per il cognome 2 per l'anno di nascita,1 per il mese , 2 per il giorno,4 per il comune e 1 come codice di controllo","");
    return code;
}
const checkLen = (string) =>{
    string.length != 16 ? alert("La lunghezza non è valida : ",string.length) : alert("La lunghezza è valida")
    return string.length != 16
}

const checkName = (chars) =>{
    if (!isNaN(+chars)) {
        alert("I caratteri nome non sono validi : ",chars);
    }
    return (!isNaN(+chars));
}

const checkSur = (chars) =>{
    if (!isNaN(+chars)){
        alert("I caratteri cognome non sono validi : ",chars);
    }
    return (!isNaN(+chars));
}
const checkBirthYear = (chars) =>{
    if (isNaN(+chars)) {
        alert("I caratteri anno di nascita non sono validi : ",chars);
    }
    return (isNaN(+chars));
}

const checkBirthMonth = (chars) =>{
    if (!isNaN(+chars)) {
        alert("Il carattere mese di nascita non è valido : ",chars);
    }
    return (!isNaN(+chars));
}
const checkBirthDay = (chars) =>{
    if (isNaN(+chars)) {
        alert("I carattere giorno di nascita non sono validi : ",chars)
    }
    return (isNaN(+chars))
}
const checkFinal = (chars) =>{
    if (!isNaN(+chars)) {
        alert("Il carattere finale non è valido : ",chars)
    }
    return (!isNaN(+chars))
}
const convalidateCode = (string) =>{
    let name = "" 
    for(let i = 0;i<3;i++){
        name += string.charAt(i)
    }
    let surname = "" 
    for(let i = 3;i<6;i++){
        surname += string.charAt(i)
    }
    let year = "" 
    for(let i = 6;i<8;i++){
        year += string.charAt(i)
    }
    let month = "" 
    for(let i = 8;i<9;i++){
        month += string.charAt(i)
    }
    let day = ""
    for(let i = 9;i<11;i++){
        day += string.charAt(i)
    }
    let final = ""
    for(let i = 15;i<16;i++){
        final += string.charAt(i)
    }
    while (checkName(name) || checkSur(surname) || checkBirthYear(year) || checkBirthMonth(month) ||
           checkBirthDay(day) || checkFinal(final) || checkLen(string)){
               string = getCode();
               name = "" 
               for(let i = 0;i<3;i++){
                   name += string.charAt(i)
               }
               surname = "" 
               for(let i = 3;i<6;i++){
                   surname += string.charAt(i)
               }
               year = "" 
               for(let i = 6;i<8;i++){
                   year += string.charAt(i)
               }
               month = "" 
               for(let i = 8;i<9;i++){
                   month += string.charAt(i)
               }
               day = ""
               for(let i = 9;i<11;i++){
                   day += string.charAt(i)
               }
               final = ""
               for(let i = 15;i<16;i++){
                   final += string.charAt(i)
               }

        }
    alert("Valid Code")
}

