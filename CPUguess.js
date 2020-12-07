function think(min,max){
    return(Math.round((min+max)/2))
}

function checkWin (){
    return confirm("Ho vinto ?")
}
function check2(){
    let help
    alert("Fammi riprovare")
    help = prompt("È minore o maggiore ?","")
    return ("maggiore" == help.toLowerCase()) ? ">" : "<" 
    }
function brain(help,guess,first,second,choice){
    switch(help){
        case (">"):
            if(guess > first){ 
               second = first
               first = guess
            }
            else if (guess > second && guess < first){
                second = guess
            }
            break
        case("<"):
            if (guess < second){
                first = second
                second = guess
            }
            else if (guess < first && guess > second){
                first = guess
            }
            break
    }
    return choice == 1 ? first : second
}

function Game(){
    let help 
    let guess
    let second = 0
    let first= 1000
    let first2
    alert("Pensa ad un numero da 1 a 1000, vai avanti quando hai fatto, avrò 10 tentativi per indovinarlo")
    for (let i = 0;i< 10;i++){
        guess = think(first,second)
        alert("Secondo me è...")
        alert(guess)
        if(checkWin()){
            alert("Non avevo dubbi")
            break
        }
        else{
            help = check2()
            first1 = brain(help,guess,first,second,1)
            second = brain(help,guess,first,second,2)
            first = first1
        }
        alert("Mi sono rimasti "+ String(9-i)+ " tentativi")
    }

}
Game()
