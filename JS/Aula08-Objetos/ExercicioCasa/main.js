
function alertCookie(){
    alert("Voce quer um cookie?")
}

console.log("Você quer um cookie?")

const alertSucesso = () => {
    return 'Mensagem Gerada com Sucesso';
};
// console.log(alertSucesso);
alert('Mensagem Gerada com Sucesso');
console.log(alertSucesso());


function myFunc(valor1, valor2) {
    return valor1 * valor2
}

let dias = myFunc(2, 365)
console.log(dias)


const notebook = { 
    marca: 'Dell', 
    modelo: 'I5 11Geração', 
    cor: 'Branco',
    memoria: '500gb',
    memoriaRam: '16gb'
}
console.log(notebook)