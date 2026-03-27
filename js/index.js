let numero  = 0

let nMax = 10

let nMin = -10

const elemento =document.getElementById("valor") 

const tipoNumero = document.getElementById("tipo")




function alterarNumero(valor){
    if (numero >= nMax && valor > 0){
        add.disabled = true
        return
    }
    if (numero <= nMin && valor < 0){
        alert("Limite atingido")
        return
    }
    numero += valor 
    attTela()
}

const add = document.getElementById("somar")

add.addEventListener("click", () => alterarNumero(1))


const menos = document.getElementById("subtrair")

menos.addEventListener("click", () => alterarNumero(-1))

function resetar(){
    numero = 0
    attTela()
}

const resetBtn = document.getElementById("reset")

resetBtn.addEventListener("click", resetar)


function attValor(){
    elemento.textContent = numero
}

function attTipo(){
    if (numero>0){
        elemento.style.color = "green"
        tipoNumero.textContent = "Positivo"
    } else if (numero === 0){
        elemento.style.color = "gold"
        tipoNumero.textContent = "Neutro"
    } else{
        elemento.style.color = "red"
        tipoNumero.textContent = "Negativo"
    }
}

function attTela(){
    attValor()
    attTipo()
} 


