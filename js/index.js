// Utilizando getElementById para pegar uma tag HTML e inserir texto através de um Id, declarado na tag HTML, no arquivo HTML
document.getElementById("texto").innerHTML = "Texto com <b>JavaScript</b>"

// Declaração e atribuição de variável
var pote = "bombom";

// Declaração de variavéis 
var nome, sobrenome, Nome_Completo;

// Atribuição de variavéis
nome = "Cauã";
sobrenome = "Carlos";

// Declaração de variavéis através da concatenação de variavéis definidas anteriormente
// Uso de aspas para atribuir um espaço em branco em forma de string e separar os nomes das variavéis
Nome_Completo = nome + " " + sobrenome;

// Exibição de variavel através da tag p por ElementById 
document.getElementById("texto").innerHTML = Nome_Completo;

/* 
var -> Varia conforme a ordem do código. O último valor atribuido será o considerado pela máquina.
Ex.: 
var x = 10

var x = 5
5 é o valor que será considerado.

let -> Invariavel a menos que o código seja construído de formas específicas. Caso esteja dentro de um escopo, por exemplo, o valor considerado fora do escopo é o definido fora, e dentro, é o valor definido dentro do escopo. Respeita a "hierarquia".
let x = 10 
x igual a 10 aqui

{
    let x = 20
    aqui, no escopo, será 20
}

const -> Totalmente invariavel. Caso definido uma vez, não pode ser mudado, mesmo que use, por exemplo, um escopo. Caso tente ser atribuido outro valor, ocasionará em erro. Caso seja definido algo fora do escopo, e depois dentro, será válido o valor fora do escopo.

const x = 10

const x = 20

Dará erro. Só pode ser definida uma vez.
*/

var valor1, valor2, valorTotal;

valor1 = 5
valor2 = 2
valorTotal = valor1 * valor2

console.log(valorTotal) 

// O ++ é um incremento, ou seja, adição de 1. O -- é um decremento, uma subtração de 1. É muito usado para, por exemplo, um evento de adição de 1 número, como adicionar item ao carrinho

// Uma forma de não precisar repetir variavél é utilizar +=, que faz com que uma variavel seja somada a ela mesma + a outra variável. Ex.: valor1 += valor2. Mesma coisa ocorre com outros operadores, como -=, *=, /=

// O operador == significa igual, porém não leva em conta, por exemplo, tipos de dados (string, number), já === significa estritamente igual, então tem que ser igual até em tipo de dado. O != significa diferente, porém não leva em conta tipo de dados, como o ==, o que faz isso é !==. Todos eles geram um True ou False, dependendo se são iguais ou diferentes.

// Operadores ternários são para gerar variavéis com condições e gerar determinadas respostas com base na condição. 
var idade, eleitor, resultado;

idade = 25
eleitor = (idade >= 18) ? 'ele é um eleitor' : 'ele não é um eleitor' // Foi gerada uma condicional e o ? foi utilizado para "verificar" esta condição. Dependendo da condição, o primeiro resultado (antes dos dois pontos :)vai ser exibido caso seja verdadeiro, caso seja falso, o segundo resultado (depois dos dois pontos :) será exibido.

console.log("De acordo com a análise de idade, " + eleitor + ". A idade dele é de " + idade + " anos")

resultado = (idade > 60 && idade < 70); //&& serve como "e", adicionar outra condição a ser analisada.
// || é usado como "ou". Ex.: resultado = (idade === 60 || idade === 70). Se idade for igual a 60 OU 70, true. Se idade for diferente de 60 OU 70, false. Há também a negação. Ex.: resultado = !(idade === 65), se idade é diferente de 65, resultado é true.

console.log(resultado)

// FUNÇÃO
function soma(v1, v2) {
    return v1 + v2;

} // Inicia-se uma função com function, e depois dá um nome a ela. Após o nome, os parâmetros vão dentro de parênteses e o bloco de código, em seguida, dentro de chaves.

function RealDolar (real, cotacaoDolar) {
    return real * cotacaoDolar
}

var valorReal = 25
var cotacao = 6 

var total = RealDolar (valorReal, cotacao)

document.getElementById("função").innerHTML = soma(10, 10)

console.log("O valor em real é R$ " + valorReal + ". O valor em dólar é U$ " + total)

function alertaHello (){
    alert("Hello, world!");
}

function paraCelsius(valorFahrenheit) {
    return (5/9) * (valorFahrenheit - 32);
}

var Celsius = paraCelsius(77);

console.log("A temperatura é de " + Celsius + " graus celsius")

/* Objetos são, resumidamente, variáveis que possuem vários valores atribuidos. É quase um consenso entre programadores o uso de const para definir um objeto 
Método é basicamente uma função.

EX.:*/
const carro = {marca : "ford", modelo : "ka", ano : 2015, placa : "ABC-1234",
    buzina : function () {alert("BIIIIIIII")},
    completo : function (){
        return "A marca deste carro é " + this.marca + " e o modelo é " + this.modelo
    }
};
console.log(carro);

//carro.buzina(); 

console.log(carro.completo());

// EVENTOS - Ações disparadas a partir da interação do usuário com a página//
//onclick => disparado quando recebe um click
function EventoClick(){
    alert("Você clicou no botão!")
    document.body.style.backgroundColor = "yellow";
};

//ondblclick => disparado quando click duplo
function clicar2x(){
    alert("Você ativou um alerta com dois cliques!")

};

//onmouseover => disparado quando o mouse está sobre
function mudarCor(){
    let div = document.getElementById("teste")
    div.style.backgroundColor = "red"
}

//onmouseout => disparado quando o mouse sai do objeto
function voltarCor() {
    let div = document.getElementById("teste")
    div.style.backgroundColor = "blue"
}

//onmousemove => disparado quando o mouse é movido no elemento
function addTexto(){
    let p = document.getElementById("texto");
   // p.append("O mouse moveu")
}

//onmousedown => disparado quando o click do botão for pressionado
//onmouseup = > disparado quando o click do mouse é solto

//onfocus => disparado quando o elemento recebe o foco. Válido para input7
function limparTexto(){
    document.getElementById("campo").value = "";

}

//onchange => disparado quando há uma mudança no conteúdo. "Ao mudar"
function mudar(){
    console.log("Mudou")
}

//onblur => disparado quando o elemento perde o foco
function mudar(){
    let itens = document.getElementById("itens")
    itens.style.background = "green"
    itens.style.color = "white"
    
}

//onkeydown => disparado quando uma tecla é pressionada 
function Pressionada(){
    let campoTexto = document.getElementById("campo").value;
    console.log(campoTexto)
}

//onkeypress => disparado quando uma tecla é pressionada e solta
//onkeyup => disparado quando uma tecla é solta sobre o elemento
//onload => disparado quando a página terminou de ser carregada. Body
//onresize => disparado quando há um redimencionamento da janela

//                 ARRAYS 
//Array é, basicamente, uma lista de itens. É uma váriavel que guarda vários valores numerados, iniciando por 0.

const lista = ["arroz", "feijão", "macarrão", "leite"]
lista[0] = "cafe" //substitui o item 0, arroz, por café

console.log(lista) //mostra todos os itens da lista

const pessoa = ["Dimitri", "Teixeira", 30] //Array
const Pessoa = {nome : "Dimitri", sobrenome : "Teixeira", idade : 30} //Objeto

pessoa.length; //Retorna o valor de itens presentes na Array

console.log(pessoa[pessoa.length - 1]) //Retorna o último valor da lista. Já que começa em zero, e nessa conta, não se considera isto, subtrai 1
pessoa.push("brasileiro") //Adiciona item

// alert(Array.isArray(pessoa)) //Método para verificar se realmente é uma variável

pessoa.push("Array") // Adição de item a Array

pessoa.pop() // Remoção de último item

pessoa.shift() // Remoção de primeiro item da lista. Muda as posições de todos os itens já que um é alterado

delete pessoa[0]; //Remove o item 0, porém não altera a ordem. O primeiro item só vai ser undefined

// pessoa.splice(1, 0, "item adicionado1", "item adicionado 2") -> esse método pega a posição que você quer adicionar os itens, nesse caso, 1, quantos você quer excluir, nesse caso, nenhum, e quais você quer adicionar

// document.getElementById("teste").innerHTML = pessoa.join(" * ") -> join troca os "separadores" dentro da array

const lista1 = ["arroz", "feijão", "macarrão"]
const lista2 = ["suco", "água com gás", "refrigerante"]
const lista3 = ["frango", "carne", "peixe"]

const superlista = lista1.concat(lista2, lista3); //junta duas listas

//document.getElementById("teste").innerHTML = superlista.join(" - ")

const jogadores = [ "Neymar", "Messi", "Maradona", "Pelé", "Cr7", "Vampeta", "Cauã"]
const craques = jogadores.slice(2) // Pega os valores da lista a partir de certo ponto. Neste caso, do item 2. "Fatia" os itens

const muitobons = jogadores.slice(2, 6) // -> "Fatia" a array de um ponto a outro. Primeiro valor, onde começa, e o segundo, onde termina. Porém, ele não vai até o valor requerido como último, vai até um atrás. Ou seja, até o 5

const playersOrdem = jogadores.sort(); // -> Jogadores em ordem alfabetica
muitobons.reverse() // -> Coloca a ordem ao contrário

const numeros = [1, 10, 35, 7, 23, 115, 2]
numeros.sort(function(a, b) { return a - b}) // -> Números em ordem crescente
numeros.sort(function(a, b){return b -a }) // -> Numeros em ordem decrescente

function MaiorNumero(array){
    return Math.max.apply(null, array); // -> Pegar o maior número
}

function MenorNumero(array){
    return Math.min.apply(null, array) // -> Pegar o menor número
}

const maior20 = numeros.filter(filtragem)

function filtragem(value, index, array){
    return value> 20           // -> Filtragem de números. Nesse caso, números maiores que 20
}

// document.getElementById("teste").innerHTML = maior20

//                         IF E ELSE
var interruptor = "off";
if (interruptor == "on"){
    console.log("A lampada está ligada")
} else{
    console.log("A lampada está desligada")
}

var hora = new Date().getHours(); // -> Pega a hora do dia


if (hora <= 12){
    console.log("Bom dia")
} else if ( hora < 18){
    console.log("Boa tarde")
} else if (hora > 18){
    console.log("Boa noite")
}


let p = document.getElementById("teste")
function Verificar(){
    let nome = document.getElementById("nome").value;
    if (nome == "" || nome == null){
        p.innerHTML = "O campo não pode ser vazio"
        p.style.color = "red"
    } else {
        p.innerHTML = "Perfeito! Campo preenchido corretamente!"
        p.style.color = "gold"
    }
}




