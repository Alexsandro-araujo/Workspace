let paragrafo = document.getElementById('paragrafo01'); //criando uma variavel que vai guardar o meu ID para modificar o mesmo depois.... temos que sempre colocar o ID que declaramos no nosso HTML...

paragrafo.style.color = 'red' //ultilizando a variavel (paragrafo) para estilizar da maneira que quero... o paragrafo é a nossa variavel que declaramos e estamos utilizando ela e logo em seguida o style.
paragrafo.style.textAlign = 'center' //ultilizando a variavel (paragrafo) para estilizar da maneira que quero...  paragrafo é a nossa variavel que declaramos e estamos utilizando ela e logo em seguida o style.
paragrafo.style.backgroundColor =  'black' //ultilizando a variavel (paragrafo) para estilizar da maneira que quero...  paragrafo é a nossa variavel que declaramos e estamos utilizando ela e logo em seguida o style.
paragrafo.style.borderRadius = '15px 15px 15px 15px' //ultilizando a variavel (paragrafo) para estilizar da maneira que quero...  paragrafo é a nossa variavel que declaramos e estamos utilizando ela e logo em seguida o style.




let acessaName = document.getElementsByTagName('name_item')
console.log(acessaName)
for(let z = 0; z <= acessaName.length; z++){
    if(z % 2 == 0){
        acessaName[z].style.color = 'pink'
    }
}

let item2 = document.getElementById('item2')
item2.remove()
let lista = document.getElementById('lista')
let item5 = document.getElementById('item5')

lista.insertBefore(item2,item5.nextSibling)

// let lista = document.getElementById('lista')
// lista.remove()

let retiraEstilo = document.getElementById('messi')
retiraEstilo.style.listStyle = 'none'



