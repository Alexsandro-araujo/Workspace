import React from "react";
let estilo = {p: 'fontSize = 2rem', listStyle:'none', color:'#993399'}
const Principal = () =>{
return(
    <>
        
        <p style={estilo}>Estou participando do curso de IOS com o objetivo de adquirir conhecimentos fundamentais na área de desenvolvimento front-end. Meu intuito é aprender a colaborar eficientemente em projetos de equipe, aprimorar minhas habilidades de comunicação e, a longo prazo, evoluir como desenvolvedor.</p>

        <ul style={estilo}>
          <li>Homem Aranha - No Way Home</li>
          <li>Looney Tunes - De Volta ação</li>
          <li>Scooby Doo 2 - Monstros a solta</li>
          <li>Jujutsu Kaisen 0</li>
          <li>A voz do Silencio</li>
        </ul>
        <h6 style={estilo}>O filme Numero Um desse usuario é :</h6>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVnlKRQW3GIB4I0s30Gzycq83LZ5qt9m4N4TdG3_beq-smMJth" alt="" />
    </>
);
}

export default Principal; //Sempre temos que colocar o export 