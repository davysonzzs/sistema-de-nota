let nota = parseFloat(prompt("qual a sua nota?"))

if(nota >= 7 && nota <= 10){
    alert("vc foi aprovado")
} else {
    if(nota >= 5 && nota <= 6.9){
        alert("recuperação")
    }else {
        if(nota >= 0 && nota < 5 ){
            alert("reprovado")
        } else {
            alert("resposta invalida")
        }
    }
}