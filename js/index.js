let contador = 0
let input = document.getElementById("addTarefa")

let btnAdd = document.getElementById("add")

let main = document.getElementById("lista")

function addTarefa(){
    let valorInput = input.value; //Pegar o valor dado no input

    if (valorInput !=="" && valorInput !== null && valorInput !== undefined){
        ++contador //Cada vez que um item é criado, ele precisa de um indice. Cada vez q a função for chamada, o contador aumenta.
        let novoItem = `<div class="item" id="${contador}">
            <div class="item-icone" onclick="marcarTarefa(${contador})">
                <span class="material-symbols-outlined">circle</span>
            </div>

            <div class="item-nome" >
                ${valorInput} <!-- pegar a variavel-->
            </div>

            <div class="item-botao">
                
                <button class="delete" onclick="deletar(${contador})"><span class="material-symbols-outlined">delete</span>Deletar</button>
            </div>
        </div>`

        main.innerHTML += novoItem // Adiciona tudo ao main

        input.value = "" //Limpa o input após o click

        input.focus() // Faz com que após clicar pra adicionar algo no input, o foco volte ao input automaticamente. Unido ao input.value = "", ele volta e o campo já está limpo
    }
        
}

btnAdd.addEventListener("click", addTarefa)

input.addEventListener("keyup", function(event){ // Função pra conseguir utilizar entender ao invés de clicar no botão
    if (event.key === "Enter") { 
        addTarefa() //Se o usuário clicar em enter, vai disparar a função addTarefa()
    }
})

function deletar(id){
    var tarefa = document.getElementById(id)
    tarefa.remove()
}

function marcarTarefa(id){
    let item = document.getElementById(id)

    item.classList.toggle("done")
}