import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

function Rodape (){
    return(
        <div className="rodape">
            <h5 className="footer-title"> PetsPortal</h5> 
            <div className="footer-names">
                <a className="p-names" href="https://www.instagram.com/luc_sant_ana/">Lucas Lima Saint Ana</a>
                <a className="p-names" href="https://www.instagram.com/_gallati_/ ">Kauan Gallati Viera Queiroz</a>
                <a className="p-names" href="https://github.com/NicolasCoiado">Nicolas Mauricio Martins Coiado</a>
                <a className="p-names" href="https://github.com/theokabir">Théo Kabir Novais de Carvalho</a>
            </div>
            <div className="footer-infos">
                <Link to="/saiba-mais" className="p-infos">Saiba mais...</Link>
                <p className="p-infos">Termos de uso</p>
                <p className="p-infos">© 2021 Copyright PetsPortal</p>
            </div>
        </div>
    );
}

export default Rodape;