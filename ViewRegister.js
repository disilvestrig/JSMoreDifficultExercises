const visual = () =>{
    return ltr = prompt("Inserisci numero elenco dello studente(da 1 a 5) e ti fornirò nome e cognome")-1
}

const students = [
"Qwe Rty",
"Uio Pas",
"Dfg Hjk",
"Lzx Vbn",
"Mqw Ert",
]
while (true){
    ltr = visual();
    while(ltr < 1 || ltr > 5){
        alert("Non esiste uno studente che corrisponde a quel numero")
        ltr = visual()
    }
    alert(students[ltr]);
    if(confirm("Vuoi uscire dal programma?")){
        break
    }
}
