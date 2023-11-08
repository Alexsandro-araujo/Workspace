class celular{
    constructor(marca,modelo,cor,memoria,memoriaRam,anoAtual,anoDoCelular){ //No contructor ao lado em parenteses temos que add os "parametro" que declaramos logo abaixo.
        //quando se fala em classe ao inves de charmar-mos de propiedade como é no objeto, na classe chamamos de atributos. : Sempre colocando o this.NomeDaClass
       this.marca = marca; //Marca (Atriburto) e esse atributo recebe sinal de igual (=) que vai receber um valor :Sempre colocando o this.NomeDaClass
       this.modelo = modelo;//Modelo (Atriburto) e esse atributo recebe sinal de igual (=) que vai receber um valor: Sempre colocando o this.NomeDaClass
       this.cor = cor;//Cor (Atriburto) e esse atributo recebe sinal de igual (=) que vai receber um valor : Sempre colocando o this.NomeDaClass
       this.memoria =memoria ;//Memoria (Atriburto) e esse atributo recebe sinal de igual (=) que vai receber um valor : Sempre colocando o this.NomeDaClass
       this.memoriaRam = memoriaRam;//MemoriaRam (Atriburto) e esse atributo recebe sinal de igual (=) que vai receber um valor : Sempre colocando o this.NomeDaClass
       this.isDesligado = true;//isDesligado (Atributo) e esse atributo esta recebendo um valor booleano se é verdadeiro ou falso.
       this.anoDoCelular = anoDoCelular; //aqui estamos querendo saber a idade do celular, para isso usamos essa classe e colocamos o parametros  no constructor
       this.anoAtual =new Date().getFullYear(anoAtual); //aqui usamos o metodo Date() e colocamos os parametros no constructor
    }
    //Abaixo estamos fazendo todo o nosso metodos da nossa classe....
    ligar(){
        console.log("ligando...............")
    }

    marcaModelo(){
        return `${motorola.modelo} ${motorola.marca}`
    } 

    desligar(){ //aqui estamos pegando o nosso objeto e transformando ele em um metodo de ifElse onde vai retornar o valor.
       if(this.isDesligado === true){ //if (SE) declaramos o nosso objeto que colocamos no nosso constructor e devemos colocar se ele é igual ao (===) a true
        console.log('Estou desligando')
       }else{
        console.log('Não irei desligar seu banana, catapimbas')
       }
    }
    retornaIdade(){
        return this.anoAtual - this.anoDoCelular
    }

    pesquisa(){
        console.log("pesquisando...............")
    }
    //Fim metodos da classe
}


//instanciando a classe

var motorola = new celular()
console.log(`a cor do celular é ${motorola.cor = 'Amarelo'} `)//Estamos mostrando os valores recebidos em nosso objetos como esta ao lado
console.log(`a marca do celular é ${motorola.marca = 'Nokia 1965'} `)//Estamos mostrando os valores recebidos em nosso objetos como esta ao lado
console.log(`a memoria do celular é ${motorola.memoria = 56} `)//Estamos mostrando os valores recebidos em nosso objetos como esta ao lado
console.log(`a memoria Ram do celular é ${motorola.cor = '4'} `)//Estamos mostrando os valores recebidos em nosso objetos como esta ao lado
console.log(`o modelo do celular é ${motorola.modelo = '2600g'} `)//Estamos mostrando os valores recebidos em nosso objetos como esta ao lado

console.clear()
//Acima estamos colocando valores na nossa classe colocando um por cada linha

var motorolo = new celular('amarelo','nokia 1965',56,'4','2600G')
console.log(`a marca do celular é ${motorola.marca}, a cor é ${motorolo.cor}, a memoria é ${motorolo.memoria} o modelo ${motorolo.modelo} e a memoria ram é de ${motorolo.memoriaRam}`)

//Acima estamos colocando as informações de forma mais sucinta e simples em um unico console.log 

var motorolo = new celular('Positivo','jubileu tisti4','Preto amarelado','8', '252mb') //sempre devemos fazer com que a nossa variavel receba o nosso objeto como esta ao lado
console.log(motorolo)
console.log(motorola.desligar())//chamando um metodo
console.log(motorolo.marcaModelo())//chamando um metodo
//Acima estamos colocando as informações dentro do nosso objetos em um unico console.log
console.log(motorolo.retornaIdade())
var data = new Date()
console.log(data.getFullYear())