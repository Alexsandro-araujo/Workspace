var numeros = [54,111,58,853,17,75,30]
// esses são os Arrays Unidimensionais

console.log(numeros) //console.log(numeros[2]) aqui estou querendo saber apenas um valor do meu array
// hora do lache
console.log("Antes " + numeros)
numeros[3] = "Hora do lanche"
console.log("Depois " + numeros)
console.clear()


//Array Bidimensionais
//Cria um Array com tres dimensoes
var matrix = [
    ["ICarly" , 2011, 10], // 0
    //   0        1    2
    ["Os Fet de EveryPlace", 2009, 10 ], // 1
            //0                1    2 
    ["Doug", 1999, 8.7] // 2
    // 0       1    2
]
//console.log(matrix)

//console.log(matrix[0] [2]) //console.log(matrix[1]) aqui estou querendo saber apenas um valor do meu array

console.log("Antes " + matrix) //Aqui estamos concatenando os valores.

matrix [2][1] = 1800 //aqui estamos alterando o valor do nosso array selecionando o que queremos alterar, sendo o exemplo : a segunda coluna e o primeiro indice

console.log("Depois " + matrix)  //Aqui estamos concatenando os valores.


console.clear()


var numArray = [2,3,6,7,45,86]
console.log(numArray)
//metodo Join
let testJoin = numArray.join(" . ")
console.log(testJoin)

//metodo ToString()
//let receba = numArray.toString()
//console.log(receba)
console.clear()

let array = [0,1,2,3,4,5]
console.log(array.length) //estamos contando as strings do nosso array
console.clear()

//Metodo para retirar o ultimo elemento
var numArray = [2,3,6,7,45,86]
let retiraUltimoElemento = numArray.pop() //iremos remover o 86
console.log(retiraUltimoElemento)
console.log(numArray)
console.clear()

//Metodo ADD nova informação no final do array
var numArray = [2,3,6,7,45,86]
let novaInformalcao = numArray.push("Kiwi")
console.log(numArray)
console.log(novaInformalcao)
console.clear()
//Metodor Retirar uma informação no inicio do array
var numArray = [2,3,6,7,45,86]
console.log(numArray)
let retiraInicio = numArray.shift() // iremos retirar o 2
console.log(numArray)
console.log(retiraInicio)
console.clear()

//Metodo ADD no inicio
var numArray = [2,3,6,7,45,86]
console.log(numArray)
let inserirInicio = numArray.unshift("Pipoca") //Iremos acrescentar a pipoca no nosso inicio do array
console.log(numArray)
console.log(inserirInicio)
console.clear()

//Metodo Delete serve para remover um elento da posição deseja no array
var numArray = [2,3,6,7,45,86]
console.log(numArray)
delete numArray[3]
console.log(numArray)
