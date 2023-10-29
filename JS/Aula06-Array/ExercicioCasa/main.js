var ex06 = ["html",1993,"BootsTrap",2011,"JS",1995,"React",2013,"Java",1995] //Array Unidimensional
var receba  = ex06.join(' / ') //Covertendo o array em string
var novaInfo =  ex06.unshift("IOS") //Mostrando uma nova informação no inicio do array
console.log(ex06) //Mostrando toto meu Array
console.log(`aqui estou mostrando o tamanho do array que é de :  ${ex06.length}`) //Mostrando o tamanho (10)
console.log(ex06[4]) //Mostrando apenas a palavra JS
console.log(receba) //Mostrando o Array em string

console.log(novaInfo) //Mostrando nova informação no array

//console.log("FIM DO MEU ARRAY UNIDIMENSIONAL")

console.clear()

var matrix = [
    ["HTML" , 1993, "CSS", 1996], // 0
    //   0        1    2
    ["Bootstrap", 2011, "JS", 1995 ], // 1
            //0                1    2 
    ["React", 2013, "Java", 1993] // 2
    // 0       1    2
]
var novaMat = matrix.push("Pipoca")
console.log(matrix) //Mostrando o meu array
console.log(matrix.length) //Mostrando o tamanho do meu array
console.log(matrix[0][1]) //Mostrando apenas 1993
//Abaixo esta a troca de informações entre os array : de JS -- JAVASCRIPT

console.log("Antes " + matrix)  //Mostrando o antigo valor do meu array - JS
matrix [1][2] = "JavaScript"  // Alterando os valores do meu array

console.log("Depois " + matrix)//Mostrando o valor atual do meu array - Javascript

delete matrix[2][2] //Deletando informação do meu arrau
console.log(matrix) //Mostrando Informação deletada

console.log(novaMat) //Mostrando a infromção no final do array