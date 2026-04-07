let tituloFilme = document.getElementById("tituloFilme")

let selectGenero = document.getElementById("selectGenero")

let addNota = document.getElementById("addNota")

let btnAddLista = document.getElementById("addLista")

let filtrarTodos = document.getElementById("filtrarTodos")

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
    let lista = filmes 
    if (filtro === "assistidos"){
        lista = filmes.filter(f => f.assistido)
    }
    if (filtro === "Ficção"){
        lista = filmes.filter(f => f.genero === "Ficção")
    }
    if (filtro === "Ação"){
        lista = filmes.filter(f => f.genero === "Ação")
    }
    if (filtro === "Terror"){
        lista = filmes.filter(f => f.genero === "Terror")
    }
    if (filtro === "Romance"){
        lista = filmes.filter(f => f.genero === "Romance")
    }

    listaFilmes.innerHTML = lista.map(filme =>{
        return `<div class="flex border justify-around px-20 py-7 font-bold w-full  bg-[#FFFFFF] rounded-xl">
  <div class="flex text-4xl gap-20">
    <span>${filme.titulo}</span>
    <span>${filme.genero}</span>
  </div>

  <div class="flex gap-25">
    <p class="text-3xl">${filme.nota}</p>
    ${ filme.assistido?
        `<button class= "border p-2 rounded-lg transform transition duration-300 hover:scale-115 cursor-pointer px-10 hover:bg-[#EF4444] hover:text-white" onclick="concluir(${filme.id})">Assistido ✅</button>` :
    `<button class="border p-2 rounded-lg transform transition duration-300 hover:scale-115 cursor-pointer px-10 hover:bg-[#10B981] hover:text-white" onclick="concluir(${filme.id})">Marcar como assistido</button>`
}   
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

function deletar(id){
    filmes = filmes.filter(filme => filme.id !== id)
    render()
}

function concluir(id){
    filmes = filmes.map(filme =>{
        if (filme.id === id){
            return {...filme, assistido : !filme.assistido}
        } else{
           return filme
        }
    })
    render()
}

let filtro = "todos"

function mostrarTodos(){
    filtro= "todos"
    render()
}

function mostrarAssistidos(){
    filtro = "assistidos"
    render()
}

function mostrarFiccao(){
    filtro = "Ficção"
    render()
}

function mostrarAcao(){
    filtro = "Ação"
    render()
}

function mostrarTerror(){
    filtro = "Terror"
    render()
}

function MostrarRomance(){
    filtro = "Romance"
    render()
}

filtrarTodos.addEventListener("click", mostrarTodos)
filtrarAssistidos.addEventListener("click", mostrarAssistidos)
filtficcao.addEventListener("click", mostrarFiccao)
filtAcao.addEventListener("click", mostrarAcao)
filtTerror.addEventListener("click", mostrarTerror)
filtRomance.addEventListener("click", MostrarRomance)