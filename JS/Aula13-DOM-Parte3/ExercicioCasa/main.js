// let paragrafo = document.getElementById('paragrafo01'); //criando uma variavel que vai guardar o meu ID para modificar o mesmo depois.... temos que sempre colocar o ID que declaramos no nosso HTML...

// paragrafo.style.color = 'red' //ultilizando a variavel (paragrafo) para estilizar da maneira que quero... o paragrafo é a nossa variavel que declaramos e estamos utilizando ela e logo em seguida o style.
// paragrafo.style.textAlign = 'center' //ultilizando a variavel (paragrafo) para estilizar da maneira que quero...  paragrafo é a nossa variavel que declaramos e estamos utilizando ela e logo em seguida o style.
// paragrafo.style.backgroundColor =  'black' //ultilizando a variavel (paragrafo) para estilizar da maneira que quero...  paragrafo é a nossa variavel que declaramos e estamos utilizando ela e logo em seguida o style.
// paragrafo.style.borderRadius = '15px 15px 15px 15px' //ultilizando a variavel (paragrafo) para estilizar da maneira que quero...  paragrafo é a nossa variavel que declaramos e estamos utilizando ela e logo em seguida o style.




// let acessaName = document.getElementsByTagName('name_item')
// console.log(acessaName)
// for(let z = 0; z <= acessaName.length; z++){
//     if(z % 2 == 0){
//         acessaName[z].style.color = 'pink'
//     }
// }

// let item2 = document.getElementById('item2')
// item2.remove()
// let lista = document.getElementById('lista')
// let item5 = document.getElementById('item5')

// lista.insertBefore(item2,item5.nextSibling)

// // let lista = document.getElementById('lista')
// // lista.remove()

// let retiraEstilo = document.getElementById('messi')
// retiraEstilo.style.listStyle = 'none'



let inserindo = false;



function adicionarImagem() {
    // Criação da imagem
    const imagem = document.createElement("img");
    imagem.src = "img/umbrella.jpg";
  
    // imagem
    document.body.appendChild(imagem);
  
    // -cor de fundo -
    document.body.style.backgroundColor = "#FFFFF";
  
    const botao = document.getElementById("B_01");
    botao.style.border = "2px solid #D9BC66";
    botao.style.padding = "0.5rem";
    botao.style.backgroundColor = "#BFBFBF";
    botao.style.margin = "0.7rem";
  }
  function solicitarNome() {
    // prompt
    const nome = prompt("Digite seu nome:");
  
    //  usuário clicou em OK
    if (nome !== null) {
      const mensagem = document.createElement("p");
      mensagem.textContent = `Olá ${nome}, bem-vindo à nossa academia`;
  
      // Inserção da mensagem
      document.body.appendChild(mensagem);
    }
  }
  
  function exibirTabuada() {
    // Solicitação do número via prompt
    const numero = prompt("Digite um número para ver a tabuada:");
  
    // Verifica se o usuário clicou em OK e exibe a tabuada
    if (numero !== null) {
      const resultado = document.createElement("p");
      resultado.textContent = `Tabuada do ${numero}:\n`;
  
      for (let i = 1; i <= 10; i++) {
        const linha = `${numero} x ${i} = ${numero * i}\n`;
        resultado.textContent += linha;
      }
  
      // Inserção da tabuada abaixo do botão
      document.body.appendChild(resultado);
    }
  }

function remove() {
    document.body.innerHTML = '';
}