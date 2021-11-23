import React from "react";
import './style.css'
import { Link } from 'react-router-dom';
import Logo from '../../images/Logo.svg';

function Undefined (){
    return(
        <div className="undefined-area">
            <img src={Logo} className="undefined-img" alt="Logo PetsPortal"/>
            <div className="undefined-title"> <h1 className="undefined-poxa">POXA!</h1> Essa página não existe!</div>
            <div className="undefined-p"><Link to="/" className="style-link">Clique aqui</Link> para voltar para navegação normal.</div>
        </div>
    );
}

export default Undefined