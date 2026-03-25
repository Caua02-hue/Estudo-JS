let numero  = 0
const elemento =document.getElementById("valor") 
function attTela(){
    document.getElementById("valor").innerHTML = numero;
    if (numero>0){
        elemento.style.color = "blue"
    } else if  ( numero === 0 ) {
        elemento.style.color = "gold"
    } else {
        elemento.style.color = "red"
    }
} 

function adicionar(){
    numero += 1
}
const add = document.getElementById("somar")
add.addEventListener("click", adicionar)

function retirar(){
    numero -=1
}
const menos = document.getElementById("subtrair")
menos.addEventListener("click", retirar)

attTela()
