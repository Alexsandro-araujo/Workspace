import React from "react";
function NomeAluno (props){
    return <h1>Calmô, {props.name}, não se và</h1>
}
const mensagem = () => {
    return(
    <NomeAluno name = 'Jun Leandro Matue'/>
    )
 
}

export default mensagem;