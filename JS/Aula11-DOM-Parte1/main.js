//var nome = prompt("What for your name?")

//alert(`olá ${nome} é um prazer em te conhecer`)

//alert(`o seu nome tem ${nome.length} letras`)

// 



//criação da variavel e criação do botão
var botao = document.createElement('BUTTON')
document.body.appendChild(botao) //add o filho (botao) na body
botao.innerHTML = "Acessa ai" //O meu button esta recebendo um valor que é o meu texto.... sempre para add um texto no nosso Element temos que colocar a variavel e logo em seguida add colocar o immerHTML que vai receber o valor que queremos

botao.style.border = "solid 2px blue" //add borda no button usando CSS no JS.
//OBS : Sempre que queremos mexer em uma "propiedade" devemos colocar primeiro o valor que queremos remover

document.body.style.backgroundColor = 'black'