let professoraBateAluno = true
let professoraXingaAluno = false
if(professoraBateAluno == true && professoraXingaAluno == true) {
    console.log("A professora foi demitida") // aqui estamos utilizando a estrutura IGUAL (==) e && (E)
}

console.clear()

if(professoraBateAluno == true || professoraXingaAluno == true){ // aqui estamos utilizando a estrutura IGUAL (==) e OU (||)
    console.log("A professora foi demitida")
}

console.clear()

let numero1 = 10
let numero2 = 4

if(numero1 || numero2){
    console.log("Os Numeros são DIFERENTES")
}

let teraComidaTOTVS = false

if(!teraComidaTOTVS == true){
    console.log("não vou nem almoçar, Alexsandro o brabo")
}else{
    console.log("voce vai ter que almoçar, OTARU")
}

console.clear()

let numero = 11

if(numero % 2 == 0){
    console.log("O numero" + " é par " )
}else{
    console.log(`o numero ${numero} é impar`)
}
console.clear()


let morangoMaduro = null
if(morangoMaduro == true){
    console.log("Puede Coumer")
}else if(morangoMaduro == false){
    console.log("NO COME")
}else{
    console.log("esse morango esta mais mofado que as suas roupas no guarda roupa.")
}

console.clear()

var raizQuadrada = Math.sqrt(15)
console.log(raizQuadrada)
console.clear()

let fase2 = 70
let fase3 = false
let inscricao = true

if(inscricao == true){
    console.log("Parabens voce esta na fase 2 ");
    if(fase2 >= 70){
        console.log("QUESTIONARIO DE LOGICA E LEITURA")
    }else if (fase2 >= 65 || fase <= 69){
        console.log("voce tem uma segunda chance")
    }else{
        console.log("voce não passou na fase 2")
    }
}else{
    
}

console.clear()

let pipoca1 = 10
let pipoca2 = 56

if (pipoca1 > pipoca2){
    console.log(pipoca1 + " é maior")
}else{
    console.log(pipoca2 + " é maior")
}

console.clear()

pipoca1 > pipoca2 ? console.log(pipoca1 + " é Maior") :
console.log(pipoca2 + " é Maior");

console.clear()

let mes = 3
switch(mes){
   case 3:
    console.log("Março")
    break;
    case 4:
     console.log("Abril")
    break;
     case 10:
     console.log("Outubro")
    break;
    case 12:
    console.log("Dezembro")
     break;
     default:
        console.log("Não encontrei o seu mês")
}

console.clear()

var data = new Date
console.log(`Estamos no ano `, data.getFullYear())
console.clear()

// Laço While

