let inputTarefa = document.getElementById("tarefa")
let cont = 0
let btnAdd = document.getElementById("adicionar")


function addTarefa(){
    cont++ // incrementa valor de cont
    valorInput = inputTarefa.value // Pega valor do input
    let lista = document.getElementById("conteudo") // 
    if (valorInput !== null && valorInput !== "" && valorInput !== undefined){
    lista.innerHTML += `<div class="flex justify-between w-7xl items-center shadow-black shadow-md rounded-3xl py-7 px-8 font-bold m-5" id = "${cont}">
    <input type="checkbox" onchange="concluir(${cont})">
        <p class="w-2xl" id="texto-${cont}">${valorInput}</p>
        <button class="bg-red-700 rounded-3xl px-10 py-3 shadow-black shadow-md transition transition-transform duration-300 hover:scale-120" id="deletar" onclick="deletar(${cont})">Deletar</button>
        </div>`
    }
    inputTarefa.value = ""
    inputTarefa.focus()
}

function deletar(id){
    var tarefa = document.getElementById(id)
    tarefa.remove()
}

inputTarefa.addEventListener("keyup", function(event){
    if (event.key === "Enter"){
        addTarefa()
    }
})

function concluir(id){
    let texto = document.getElementById(`texto-${id}`)
    texto.classList.toggle("line-through")
    texto.classList.toggle("opcaity-50")
    let elemento = document.getElementById(id)
    elemento.classList.toggle("bg-green-200")
}

btnAdd.addEventListener("click", addTarefa)