function imparPar(num) { //Aqui estamos fazendo uma função com IF e ELSE. na função devemos sempre declarar um parametro dentro do parenteses()
    if (num % 2 == 0) {  //Verificando se (if) o resto da divisão foi de 2 ai retornar o valor PAR
        return `O número ${num} é Par` //Retornar o valor
    } else if (num % 2 == 1) { //Verificando se (elseIF) não for igual a 0 retorna IMPAR 
        return `O número ${num} é Impar`
    } else {
        return `Não conseguir indentificar se esse numero é impar ou par` //Verificando se (else) não for nem 0 e 1 ai retornar um valor .
    }
}


let recebePrimeiroNumero = imparPar(5) //Declarando a variavel let e logo em seguida ela recebe a nossa função (imparPar) e dentro dela colocamos o valor que a mesma vai receber
console.log(recebePrimeiroNumero) //Mostrando o valor no console

let recebeSegundoNumero = imparPar(5.75) //Declarando a variavel let e logo em seguida ela recebe a nossa função (imparPar) e dentro dela colocamos o valor que a mesma vai receber
console.log(recebeSegundoNumero)//Mostrando o valor no console