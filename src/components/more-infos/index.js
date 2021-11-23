import React from "react";
import './style.css';
import Logo from '../../images/Logo.svg';

function MoreInfos(){
    return(
        <div className="area-more">
            <div className="arr">a</div>
            <img src={Logo} alt="Logo PetsPortal" className="img-more"/>
            <h1 className="title-more">Porque PetsPortal foi feito?</h1>
            <p className="p-more">PetsPortal foi feito como um trabalho de conclusão de curso (TCC), de 4 alunos que cursaram Desenvolvimento de Sistemas, na Etec da Zona Leste.</p>
            <h1 className="title-more">Como posso ajudar o projeto?</h1>
            <p className="p-more">Atualmente, o projeto não está hospedado em um servidor fixo, e os desenvolvedores não possuem condições de hospeda-lo, então, caso você queira ajudar, entre em contato com algum dos desenvolvedores abaixo:</p>
            <h1 className="title-more">Quem são os desenvolvedores do PetsPortal?</h1>
            <h2 className="semi-title-more">Clique nos nomes abaixo para conhece-los:</h2>
            <div className="list-names">
                <a className="i-list-names" href="https://www.instagram.com/_gallati_/">Kauan Gallati</a>
                <a className="i-list-names" href="https://www.instagram.com/luc_sant_ana/">Lucas Lima</a>
                <a className="i-list-names" href="https://github.com/NicolasCoiado">Nicolas Coiado</a>
                <a className="i-list-names" href="https://github.com/theokabir">Théo Kabir</a>
            </div>
        </div>
    );
}

export default MoreInfos;
