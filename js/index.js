let inputTarefa = document.getElementById("tarefa")
let cont = 0
let btnAdd = document.getElementById("adicionar")
let lista = document.getElementById("conteudo")

function addTarefa(){
    cont++ // incrementa valor de cont
    let valorInput = inputTarefa.value // Pega valor do input
     // 
    if (valorInput !== null && valorInput !== "" && valorInput !== undefined){
    lista.innerHTML += `<div class="flex justify-between w-7xl items-center shadow-black shadow-md rounded-3xl py-7 px-8 font-bold m-5" id = "${cont}">
    <input type="checkbox" onchange="concluir(${cont})" class="cursor-pointer transition transition-transform duration-300 hover:scale-120" >
        <p class="font-bold" id="texto-${cont}">${valorInput}</p>
        <button class="bg-red-600 rounded-3xl px-7 py-3 shadow-black shadow-md transition transition-transform duration-300 hover:scale-120 cursor-pointer" id="deletar" onclick="deletar(${cont})">X</button>
        </div>`
    }
    inputTarefa.value = ""
    inputTarefa.focus();
    salvar()
}

function deletar(id){
    var tarefa = document.getElementById(id)
    tarefa.remove();
    salvar()
}

inputTarefa.addEventListener("keyup", function(event){
    if (event.key === "Enter"){
        addTarefa()
    }
})

function concluir(id){
    let texto = document.getElementById(`texto-${id}`)
    texto.classList.toggle("line-through")
    texto.classList.toggle("text-gray-500")
    texto.classList.toggle("normal")
    let elemento = document.getElementById(id)
    let lista_tarefas = document.getElementById("conteudo")
    elemento.classList.toggle("bg-green-200")
    lista_tarefas.appendChild(elemento);
    salvar()
}

btnAdd.addEventListener("click", addTarefa)

function salvar(){
    localStorage.setItem("conteudo_lista", lista.innerHTML)
}

function carregar(){
    lista.innerHTML = localStorage.getItem("conteudo_lista") || ""
}

window.onload = function (){
    carregar();
}