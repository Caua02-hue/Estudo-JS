inputTarefa = document.getElementById("tarefa")


btnAdd = document.getElementById("adicionar")

function addTarefa(){
    valorInput = inputTarefa.value
    lista = document.getElementById("conteudo")
    lista.innerHTML += `<div class="flex justify-center items-center ">
    <input type="checkbox">
        <p class="w-2xl">${valorInput}</p>
        <button class="bg-red-700 rounded-3xl px-10 py-3 shadow-black shadow-xl transition transition-transform duration-300 hover:scale-120 ">Deletar</button>
        </div>`

    
}

btnAdd.addEventListener("click", addTarefa)