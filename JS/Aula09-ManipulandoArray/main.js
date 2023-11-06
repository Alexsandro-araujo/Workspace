// Método forEach()
const frutas = ['apple', 'orange', 'cherry']; //criando um array, sempre colocando em [colchetes]

frutas.forEach(minhaFuncao); //Aqui estamos fazendo uma função e nela estamos colocando o forEach(nomedaFuncao) e logo a baixo esta a nossa FUNCTION
function minhaFuncao(item, index) { //Estamos chamando a função e nela estamos querendo saber o nosso item(Fruta) e o nosso indice (posição)
    console.log(`Índice: ${index}`); //Aqui estamos chamando os nossos parametros para mostrar o indice (posição)
    console.log(`Elemento: ${item}`); //Aqui estamos chamando os nossos parametros para mostrar o Elemento (item)
    //Aqui não fazemos alterações
}


console.clear()//Limpando o conteudo

// Método map()
const numeros = [4, 9, 16, 25];
const newArray = numeros.map(Math.sqrt);
console.clear();
console.log('Números:');
console.log(numeros);

console.clear()//Limpando o conteudo


// Método filter
const idades = [32, 33, 16, 40]; //Criando uma variavel e nela estamos criando um array [com os valores]
let filtroIdade = idades.filter((idade) => { //estamos criando outra variavel que vai receber a variavel anterior e poderemos filtrar ela como esta o exemplo
    return idade >= 18; //estamos fazendo um return da primeira variavel ja que fizemos uma filtragem na segunda variavel.
});
console.log(filtroIdade); //Mostrando o conteudo

console.clear()//limpando o conteudo

// Método find()
console.clear();
const meuArray = [ //Criando uma variavel e nela estamos criando um array de objetos [com os valores]
    { nome: 'apples', quantidade: 2 }, //Array de objetos com os valores ao lado
    { nome: 'bananas', quantidade: 0 },//Array de objetos com os valores ao lado
    { nome: 'cerejas', quantidade: 5 },//Array de objetos com os valores ao lado
];
console.log( //estamos mostrando o conteudo
    meuArray.find((fruta) => { //chamando a variavel que declaramos acima e declarando um parametro apos o .find (parametro) que pode ser qualquer nome, desde que faça sentido
        return fruta.nome === 'cerejas'; //estamos fazendo o returno chamando o nome do nosso parametro declarado e logo em seguida === para mostrar para  nós apenas o resultado igual ao que queremos que no caso do exemplo é cerejas

    })
);

console.clear() //estamos limpando o conteudo

// forEach() com array de objetos
console.clear();
const tarefas = [ //criando uma variavel e nela estamos atribuindo o valor tarefas que esta recebendo um array de objetos
    {
        id: 1, //identificador
        texto: 'Levar o lixo para fora', //texto para mostrar ao usuario
        isCompleted: true, //se foi concuido
    },
    {
        id: 2,//identificador
        texto: 'Encontrar com o chefe',//texto para mostrar ao usuario
        isCompleted: true,//se foi concuido
    },
    {
        id: 3,//identificador
        texto: 'Consulta no dentista',//texto para mostrar ao usuario
        isCompleted: false,//se foi concuido
    },
];
tarefas.forEach((teste) => console.log(teste.texto)); //estamos fazendo uma ArrowFunction e nela estamos pegando nossa variavel ja declarada e colocando um forEach do lado e dentro do forEach estamos declarando o parametro e logo mostrando no console.log a nossa arrowFunction e dentro dele o nosso parametro declarado e o que queremos declarar.



// Outro exemplo do filter
console.clear();
const filtoCompletas = tarefas.filter((item) => {
return item.isCompleted === true;
});
console.log(filtoCompletas);

//Acima estamos fazendo um Filter com arrow function e nela estamos mostrando apenas o item que foi concluido ou seja vai retornar todas as tarefas que foram concluidas.
