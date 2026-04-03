function adicionar(){
    let nomeAlimento = document.getElementById("nomeAlimento").value

    let cal = Number(document.getElementById("caloriasAlimento").value)

    let prot = Number(document.getElementById("proteinasAlimento").value) 

    let carbo = Number(document.getElementById("carboidratosAlimento").value)

    let gord = Number(document.getElementById("gordurasAlimento").value)

    let tipo = document.getElementById("tipoAlimento").value

    let cardRefeicao = document.getElementById("card"+tipo)

    if (!cardRefeicao){
        cardRefeicao = document.createElement("div")
        cardRefeicao.id = "card"+tipo
        cardRefeicao.className = "border rounded-xl shadow-black shadow-2xl text-xl font-bold pb-20 text-center"

        const titulo = document.createElement("h1")
        titulo.className = "text-3xl bg-yellow-500 p-10 rounded-xl"
        titulo.textContent = tipo

        const corpoCard = document.createElement("div")
        corpoCard.id = "corpo"+tipo
        corpoCard.className = "p-4"
        

        cardRefeicao.appendChild(titulo);
        cardRefeicao.appendChild(corpoCard)

        document.getElementById("listaRef").appendChild(cardRefeicao)

    }
        const divItem = document.createElement("div")
        divItem.className = "flex justify-between items-center bg-gray-100 p-3 rounded border-l-4 border-yellow-500"
        divItem.innerHTML = `
        <p class= "text-2xl text-black">${nomeAlimento}<p><br>
        <div class="text-sm text-gray-600">
        <p  >Calorias: ${cal}kcal</p  >
        <p  >Proteinas: ${prot}g</p   >
        <p  >Carboidratos: ${carbo}g</p   >
        <p  >Gorduras: ${gord}g</p    >
        </div>
        `

    const btnDel = document.createElement("button")
    btnDel.textContent = "Deletar"
    btnDel.className = "bg-red-600 text-white p-2 rounded-full cursor-pointer ml-4"

    btnDel.onclick = function (){
        divItem.remove()
    }
    divItem.appendChild(btnDel)
    document.getElementById("corpo"+tipo).appendChild(divItem)
}

const btnAdd = document.getElementById("add")
btnAdd.addEventListener("click", adicionar)