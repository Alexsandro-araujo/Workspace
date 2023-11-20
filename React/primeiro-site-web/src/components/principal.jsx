import React from "react";
let estilo = {fontSize:   '2rem', color:'#993399', backgroundColor: '#ffa500' }
let lista = {listStyle:'none'}
const Principal = () =>{
return(
    <>
        
        <p style={estilo}>Estou participando do curso de IOS com o objetivo de adquirir conhecimentos fundamentais na área de desenvolvimento front-end. Meu intuito é aprender a colaborar eficientemente em projetos de equipe, aprimorar minhas habilidades de comunicação e, a longo prazo, evoluir como desenvolvedor.</p>
        <ol>
            <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVnlKRQW3GIB4I0s30Gzycq83LZ5qt9m4N4TdG3_beq-smMJth" alt=""  width={"100px"} height={"100px"}/></li>
            <li>Looney Tunes - De volta a ação</li>
            <li>Scooby Doo 2 - Monstros a solta</li>
            <li>A voz do Silencio</li>
            <li>Your Name</li>
        </ol>
        
    </>
);
}

export default Principal; //Sempre temos que colocar o export 