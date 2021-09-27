import 'materialize-css';
import { Footer } from 'react-materialize';
import './style.css';

function Rodape (){
    return(
        <Footer
            className="rodape"
            copyrights="PetsPortal 2021 Copyright"
            links={<ul><li><a className="grey-text text-lighten-3" href="#!">Lucas Lima de Saint Ana</a></li><li><a className="grey-text text-lighten-3" href="#!">Kauan Gallati </a></li><li><a className="grey-text text-lighten-3" href="#!">Nicolas Mauricio Martins Coiado</a></li><li><a className="grey-text text-lighten-3" href="#!">Théo Kabir Novais de Carvalho</a></li></ul>}
            moreLinks={<a className="grey-text text-lighten-4 right" href="#!">Saiba mais...</a>}
        >
        <h5 className="white-text">
            PetsPortal
        </h5>
       
    </Footer>
    );
}

export default Rodape;