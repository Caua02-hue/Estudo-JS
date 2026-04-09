let btnMassas = document.getElementById("massas")
let btnCarnes = document.getElementById("carnes")
let btnBebidas = document.getElementById("bebidas")
let btnEntradas = document.getElementById("entradas")
let btnSobremesas = document.getElementById("sobremesas")

var Produtos = [
    {
    id : 1,
    nome : "Lasanha",
    tipo : "Massa",
    descricao : "Lasanha à Bolonhesa de carne, feita na pressão, com recheio de três tipos de queijo, massa feita pela própria casa, e temperado com molho de tomate, orégano, salsa, pimenta do reino e sal a gosto.",
    preco : 45.90,
    img : "img/Lasanha.jpg"
},
    {
    id : 2,
    nome : "Lasanha",
    tipo : "Massa",
    descricao : "Lasanha à Bolonhesa de carne, feita na pressão, com recheio de três tipos de queijo, massa feita pela própria casa, e temperado com molho de tomate, orégano, salsa, pimenta do reino e sal a gosto.",
    preco : 45.90,
    img : "img/Lasanha.jpg"
},
    {
    id : 3,
    nome : "Lasanha",
    tipo : "Massa",
    descricao : "Lasanha à Bolonhesa de carne, feita na pressão, com recheio de três tipos de queijo, massa feita pela própria casa, e temperado com molho de tomate, orégano, salsa, pimenta do reino e sal a gosto.",
    preco : 45.90,
    img : "img/Lasanha.jpg"
},
    {
    id : 4,
    nome : "Lasanha",
    tipo : "Massa",
    descricao : "Lasanha à Bolonhesa de carne, feita na pressão, com recheio de três tipos de queijo, massa feita pela própria casa, e temperado com molho de tomate, orégano, salsa, pimenta do reino e sal a gosto.",
    preco : 45.90,
    img : "img/Lasanha.jpg"
},
    {
    id : 5,
    nome : "Lasanha",
    tipo : "Massa",
    descricao : "Lasanha à Bolonhesa de carne, feita na pressão, com recheio de três tipos de queijo, massa feita pela própria casa, e temperado com molho de tomate, orégano, salsa, pimenta do reino e sal a gosto.",
    preco : 45.90,
    img : "img/Lasanha.jpg"
},
    {
    id : 6,
    nome : "Lasanha",
    tipo : "Massa",
    descricao : "Lasanha à Bolonhesa de carne, feita na pressão, com recheio de três tipos de queijo, massa feita pela própria casa, e temperado com molho de tomate, orégano, salsa, pimenta do reino e sal a gosto.",
    preco : 45.90,
    img : "img/Lasanha.jpg"
},
    {
    id : 7,
    nome : "Fatia de bolo de morango",
    tipo : "Sobremesa",
    descricao : "Bolo de morango da casa, feito com massa de baunilha, recheio de morango, cobertura de ninho e morango por cima.",
    preco : 9.50,
    img : "img/Bolo.webp"
},
    {
    id : 8,
    nome : "Fatia de bolo de morango",
    tipo : "Sobremesa",
    descricao : "Bolo de morango da casa, feito com massa de baunilha, recheio de morango, cobertura de ninho e morango por cima.",
    preco : 9.50,
    img : "img/Bolo.webp"
},
    {
    id : 9,
    nome : "Fatia de bolo de morango",
    tipo : "Sobremesa",
    descricao : "Bolo de morango da casa, feito com massa de baunilha, recheio de morango, cobertura de ninho e morango por cima.",
    preco : 9.50,
    img : "img/Bolo.webp"
},
    {
    id : 10,
    nome : "Fatia de bolo de morango",
    tipo : "Sobremesa",
    descricao : "Bolo de morango da casa, feito com massa de baunilha, recheio de morango, cobertura de ninho e morango por cima.",
    preco : 9.50,
    img : "img/Bolo.webp"
},
    {
    id : 11,
    nome : "Fatia de bolo de morango",
    tipo : "Sobremesa",
    descricao : "Bolo de morango da casa, feito com massa de baunilha, recheio de morango, cobertura de ninho e morango por cima.",
    preco : 9.50,
    img : "img/Bolo.webp"
},
    {
    id : 12,
    nome : "Fatia de bolo de morango",
    tipo : "Sobremesa",
    descricao : "Bolo de morango da casa, feito com massa de baunilha, recheio de morango, cobertura de ninho e morango por cima.",
    preco : 9.50,
    img : "img/Bolo.webp"
},
    {
    id : 13,
    nome : "Coca Cola Zero 350ml",
    tipo : "Bebida",
    descricao : "Coca cola zero em lata, 350ml, zero açúcar",
    preco : 5.00,
    img : "img/coca zero.webp"
},
    {
    id : 14,
    nome : "Coca Cola Zero 350ml",
    tipo : "Bebida",
    descricao : "Coca cola zero em lata, 350ml, zero açúcar",
    preco : 5.00,
    img : "img/coca zero.webp"
},
    {
    id : 15,
    nome : "Coca Cola Zero 350ml",
    tipo : "Bebida",
    descricao : "Coca cola zero em lata, 350ml, zero açúcar",
    preco : 5.00,
    img : "img/coca zero.webp"
},
    {
    id : 16,
    nome : "Coca Cola Zero 350ml",
    tipo : "Bebida",
    descricao : "Coca cola zero em lata, 350ml, zero açúcar",
    preco : 5.00,
    img : "img/coca zero.webp"
},
    {
    id : 17,
    nome : "Coca Cola Zero 350ml",
    tipo : "Bebida",
    descricao : "Coca cola zero em lata, 350ml, zero açúcar",
    preco : 5.00,
    img : "img/coca zero.webp"
},
    {
    id : 18,
    nome : "Coca Cola Zero 350ml",
    tipo : "Bebida",
    descricao : "Coca cola zero em lata, 350ml, zero açúcar",
    preco : 5.00,
    img : "img/coca zero.webp"
},
    {
    id : 19,
    nome : "Torradas com patê de atum",
    tipo : "Entrada",
    descricao : "2 Torradinhas com patê de atum, feito com atum, requeijão, maionese e verduras.",
    preco : 7.75,
    img : "img/Patê de atum.webp"
},
    {
    id : 20,
    nome : "Torradas com patê de atum",
    tipo : "Entrada",
    descricao : "2 Torradinhas com patê de atum, feito com atum, requeijão, maionese e verduras.",
    preco : 7.75,
    img : "img/Patê de atum.webp"
},
    {
    id : 21,
    nome : "Torradas com patê de atum",
    tipo : "Entrada",
    descricao : "2 Torradinhas com patê de atum, feito com atum, requeijão, maionese e verduras.",
    preco : 7.75,
    img : "img/Patê de atum.webp"
},
    {
    id : 22,
    nome : "Torradas com patê de atum",
    tipo : "Entrada",
    descricao : "2 Torradinhas com patê de atum, feito com atum, requeijão, maionese e verduras.",
    preco : 7.75,
    img : "img/Patê de atum.webp"
},
    {
    id : 23,
    nome : "Torradas com patê de atum",
    tipo : "Entrada",
    descricao : "2 Torradinhas com patê de atum, feito com atum, requeijão, maionese e verduras.",
    preco : 7.75,
    img : "img/Patê de atum.webp"
},
    {
    id : 24,
    nome : "Torradas com patê de atum",
    tipo : "Entrada",
    descricao : "2 Torradinhas com patê de atum, feito com atum, requeijão, maionese e verduras.",
    preco : 7.75,
    img : "img/Patê de atum.webp"
},
    {
    id : 25,
    nome : "Picanha mal passada",
    tipo : "Carne",
    descricao : "Picanha mal passada, com limão espremido por cima - ou à parte -",
    preco : 18.90,
    img : "img/Picanha.jpg"
},
    {
    id : 26,
    nome : "Picanha mal passada",
    tipo : "Carne",
    descricao : "Picanha mal passada, com limão espremido por cima - ou à parte -",
    preco : 18.90,
    img : "img/Picanha.jpg"
},
    {
    id : 27,
    nome : "Picanha mal passada",
    tipo : "Carne",
    descricao : "Picanha mal passada, com limão espremido por cima - ou à parte -",
    preco : 18.90,
    img : "img/Picanha.jpg"
},
    {
    id : 28,
    nome : "Picanha mal passada",
    tipo : "Carne",
    descricao : "Picanha mal passada, com limão espremido por cima - ou à parte -",
    preco : 18.90,
    img : "img/Picanha.jpg"
},
    {
    id : 29,
    nome : "Picanha mal passada",
    tipo : "Carne",
    descricao : "Picanha mal passada, com limão espremido por cima - ou à parte -",
    preco : 18.90,
    img : "img/Picanha.jpg"
},
    {
    id : 30,
    nome : "Picanha mal passada",
    tipo : "Carne",
    descricao : "Picanha mal passada, com limão espremido por cima - ou à parte -",
    preco : 18.90,
    img : "img/Picanha.jpg"
},
]

let menu = document.getElementById("menu")


function mostrarProdutos (filtro){
    let cards = filtro.map(function(prato){
    return  `<div class="border roundex-xl w-90 rounded-xl">
      <img src="${prato.img}" alt="" class="w-88 h-auto">
      <h1 class="text-2xl font-bold text-center mt-5">${prato.nome}</h1>
      <p class="max-w-80 p-3 text-center  ">${prato.descricao}</p>
      <div class="flex justify-around text-3xl px-3 mb-5 items-center">
      <span class="font-bold">R$ ${prato.preco}</span>
      <button class="border p-3 rounded-2xl bg-[#FF9F1C] font-bold transform transition duration-300 hover:scale-110 cursor-pointer" onclick="addCarrinho(${prato.id})">Adicionar</button>
      </div>
    </div>`
}).join("")
    menu.innerHTML += cards
}

let Entradas = Produtos.filter(valor => valor.tipo == "Entrada")

btnEntradas.addEventListener("click", ()=> {
    menu.innerHTML = '';
    mostrarProdutos(Entradas)
})

let Massas = Produtos.filter(valor => valor.tipo == "Massa")
btnMassas.addEventListener("click", ()=> {
    menu.innerHTML = "";
    mostrarProdutos(Massas)
})

let Carnes = Produtos.filter(valor => valor.tipo == "Carne")
btnCarnes.addEventListener("click", ()=>{
    menu.innerHTML = ""
    mostrarProdutos(Carnes)
})

let Sobremesas = Produtos.filter(valor => valor.tipo == "Sobremesa")
btnSobremesas.addEventListener("click", ()=>{
    menu.innerHTML = ""
    mostrarProdutos(Sobremesas) 
})

let Bebidas = Produtos.filter(valor => valor.tipo == "Bebida")
btnBebidas.addEventListener("click", ()=>{
    menu.innerHTML = "";
    mostrarProdutos(Bebidas)
})

window.onload = function(){
    mostrarProdutos(Entradas)
}

let carrinho = []

function addCarrinho(id){
    const produtoEncontrado = Produtos.find(p => p.id === id);
    if (produtoEncontrado){
        carrinho.push(produtoEncontrado);
        mostrarAviso()
    }
}

function mostrarAviso(){
    const divAviso = document.createElement('div')
    divAviso.className = 'flex fixed top-5 right-5 z-50 font-bold justify-center text-center text-3xl p-10 border m-5 w-2xl bg-white rounded-2xl'
    const aviso = document.createElement('p')
    aviso.textContent = "O item foi adicionado ao carrinho"
    divAviso.appendChild(aviso)

    document.body.appendChild(divAviso);

    setTimeout(()=> {
        divAviso.remove();
    }, 3000)
}