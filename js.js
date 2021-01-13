<!DOCTYPE html>
<html>
<head>
<style>
h1 {
  text-align: center ;
  border: 5px solid rgb(0, 0, 0);
  background-color: rgb(255, 255, 255);
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  margin-right: 20%;
  margin-left: 20%;
}
.right{
    margin-right: 20%;
    margin-left: 20%;
}

</style>
<title>File html essenziale per testare nozioni da principiante in javascript</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</head>
<body>


<div class = "container">
<br>
<h1>SITO DI PROVA PER JAVASCRIPT PRINCIPIANTI 3.0</h1>
<br>
<br>
<script>
const getName =  () => {
    const name = prompt("Quale è il tuo nome","")
    return name
}
const hello = ( name = getName()) => {
    alert("ciao " + name)
}
</script>
<script>
let getAge = () => {
    let age = prompt("Quanti anni hai?","")
    return age
}
let checkAge = (age = getAge()) => {
    while (+age < 0 || +age > 100){
        alert("Impossibile riinserisci la tua età reale")
        age = getAge()
    }
}
</script>
<script >
const getValues = () =>{
    let a = +prompt("Inserisci coefficiente a ","")
    let b = +prompt("Inserisci coefficiente b ","")
    let c = +prompt("Inserisci coefficiente c ","")
    const values = [a,b,c]
    return values
}
const delta = (values) => {
    let delta = (values[1]**2-4*values[0]*values[2])
    alert("Delta : " + delta)
    return delta
}
const soluzioni = () =>{
    let values = getValues()
    let del = delta(values)
    if( del >= 0){
        alert("Sol 1 :"+ ((-values[1]+Math.sqrt(del))/2/values[0] ))
        alert("Sol 1 :"+ ((-values[1]-Math.sqrt(del))/2/values[0] ))
        if (((-values[1]+del)/2/values[0] ) == ((-values[1]-del)/2/values[0] )){
            alert("Le soluzioni sono uguali")
        }
    }
    else {
        alert("Non ci sono soluzioni reali")
    }
}
</script>
<script>
let x = [0,0,0,0]
for( let i = 0;i<4;i++){
    x[i] = +prompt("Insert number ","")
}
for( let i = 0;i<4;i++){
    let max = x[i]
    if(x[i] > max){
        max = x[i]
    } 
}
alert("Max : "+max)
let media = 0
for( let i = 0;i<4;i++){
    media += x[i]
}
alert("media :" +x[i]/4)
for( let i = 0;i<4;i++){
    let somma = 0
    if(x[i] < 0){
        somma += x[i]
    } 
}
alert("Somma negativi : "+somma)
</script>
