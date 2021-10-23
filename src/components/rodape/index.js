import 'materialize-css';
import './style.css';

function Rodape (){
    return(
        <div className="rodape">
            <h5 className="footer-title"> PetsPortal</h5> 
            <div className="footer-names">
                <p className="p-names">Lucas Lima Saint Ana</p>
                <p className="p-names">Kauan Gallati Viera Queiroz</p>
                <p className="p-names">Nicolas Mauricio Martins Coiado</p>
                <p className="p-names">Théo Kabir Novais de Carvalho</p>
            </div>
            <div className="footer-infos">
                <p className="p-infos">Saiba mais...</p>
                <p className="p-infos">Termos de uso</p>
                <p className="p-infos">&copy 2021 Copyright PetsPortal</p>
            </div>
        </div>
    );
}

export default Rodape;