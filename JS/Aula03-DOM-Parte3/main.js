var pipoca = document.querySelectorAll('p')
//pipoca.style.color = 'blue'
console.log(pipoca)
for(let z = 0; z <= pipoca.length; z++){
        // pipoca[z].style.color = 'blue'
}
console.clear()
// let j = document.querySelector('exemplo')
// j.innerHTML = 'foi alterado aqui o texto com as lagrimas dos alunos'


// function Nome ()  {
// var entradaNome = prompt("Digite o seu nome")
// let mostraNome = document.querySelector ('#mostraNome')
// mostraNome.innerHTML = `Olá ${entradaNome} bem-vindo a nossa academia`
// }

// const Nome = () => {
//         let recebeNome = document.querySelector('#recebeNome')
//         let mostraNome = document.querySelector ('#mostraNome')
//         console.log(recebeNome)
//         mostraNome.innerHTML = `olá ${recebeNome.value} a nossa academia`
// }


let evento = document.querySelector('#chamaFuncao')
const Nome = ()  => {
        let recebeNome = document.querySelector('#recebeNome')
        let mostraNome = document.querySelector ('#mostraNome')
        mostraNome.innerHTML = `olá ${recebeNome.value} a nossa academia`
}

evento.addEventListener('click', Nome)
//o nome do evento, callback (função), opcional true/false