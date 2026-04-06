let tituloFilme = document.getElementById("tituloFilme")

let selectGenero = document.getElementById("selectGenero")

let addNota = document.getElementById("addNota")

let btnAddLista = document.getElementById("addLista")

let filtrarTodos = document.getElementById("filtrarTodos")

let filtrarPendente = document.getElementById("filtrarPendente")

let filtrarAssistidos = document.getElementById("filtrarAssistidos")

let filtficcao = document.getElementById("filtficcao")

let filtAcao = document.getElementById("filtAcao")

let filtTerror = document.getElementById("filtTerror")

let filtRomance = document.getElementById("filRomance")

let filtStars = document.getElementById("filtStars")

let buscaTitulo = document.getElementById("buscaTitulo")

let btnAssistido = document.getElementById("assistido")

let cont = 0

let filmes = []


function render(){
    listaFilmes.innerHTML = filmes.map(filme =>{
        return `<div class="flex border justify-around px-20 py-7 font-bold w-full  bg-[#FFFFFF] rounded-xl">
  <div class="flex gap-50 text-4xl">
    <span>${filme.titulo}</span>
    <span>${filme.genero}</span>
  </div>

  <div class="flex gap-10">
    <p class="text-3xl">${filme.nota}</p>
    <button class="border p-2 rounded-lg transform transition duration-300 hover:scale-115 cursor-pointer px-10 hover:bg-[#10B981] hover:text-white" onclick="concluir(${filme.id})">Marcar como assistido</button>
    <button class="border p-2 rounded-lg transform transition duration-300 hover:scale-115 cursor-pointer px-10 hover:bg-[#EF4444] hover:text-white" onclick="deletar(${filme.id})">X</button>
  </div>
  </div>`
    }).join("")
}

function add(){
    cont += 1
    const novoFilme = {
        id : cont,
        titulo : tituloFilme.value,
        genero : selectGenero.value,
        nota : addNota.value,
        assistido : false
    }
    filmes.push(novoFilme)
    render()
    tituloFilme.value = ""
}

btnAddLista.addEventListener("click", add)

function deletar(a){
    filmes = filmes.filter(filme => filme.id !== a)
    render()
}


