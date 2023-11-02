// Funções
function somaNumeros(num1 = 0, num2 = 0, num3 = 0) {
    return num1 + num2 + num3;
}

let x = somaNumeros(4, 5); // Chamada da função somaNumeros
//Acima esta a nossa funcão somaNumeros
console.log(x);

let soma = somaNumeros(10, 7, 3); // Chamada da função myFunc

console.log(soma);
//Acima estamos chamando a nossa função somaNumeros

console.clear()
//Acima estamos limpando o conteudo

let mult = myFunc(89, 2) // Declarando a variavel mult e logo em seguida chamando a função myFunc que esta recebendo dois parametro (dois numeros) e arescentar o valor
console.log(mult) //no console.log temos que sempre chamar a variavel que declaramos.


function myFunc(num1, num2) { //Estamos fazendo uma função de multiplicar um numero
    return num1 * num2; //Declarando os paramentos
}


console.clear()
//Estamos limpando o conteudo acima
const hello = () => { //Declarando a variavel hello e logo em seguida ela esta recebendo uma função : aqui é ArrowFunction
    return 'Olá Arrow Function!';
};

console.log(hello())// para retornarmos o valor de ArrowFuction devemos colocar a variavel no console.log e logo em seguida os parenteses como esta logo ao lado 

console.clear()
//Estamos limpando o conteudo acima

//Funções com IF
//num % 2 == 0 Par     num % 2 == 1 Impar

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

console.clear()
//Acima estamos limpando o conteudo

const celular = { //aqui estamos trabalhando com Objetos.
    marca: 'Apple', //declarando o que é e o tipo
    modelo: 'Iphone 15 pro max', //declarando o que é e o tipo
    cor: 'Rosa',//declarando o que é e o tipo
    memoria: '512gb',//declarando o que é e o tipo
    memoriaRam: '16gb'//declarando o que é e o tipo
}
console.log(celular)//mostrando o valor no console
console.clear() //Estamos limpando o conteudo.

//Eventos 
const boasVindas = () => {
alert("Olá, Seja bem vindo a nossa página")
console.log("Olá, Seja bem vindo a nossa página")
}

const eventClique = () => {
    console.log("voce clicou no botao")
}
console.clear()

const mouseEmCima = () => {
    console.log('Mouse está em cima do título');
    };


