import 'materialize-css';
import { Footer } from 'react-materialize';
import './style.css';

function Rodape (){
    return(
        <Footer
            className="rodape"
            copyrights="PetsPortal 2021 Copyright"
            links={<ul><li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li><li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li><li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li><li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li></ul>}
            moreLinks={<a className="grey-text text-lighten-4 right" href="#!">More Links</a>}
        >
        <h5 className="white-text">
            PetsPortal
        </h5>
        <p className="grey-text text-lighten-4">
            You can use rows and columns here to organize your footer content.
        </p>
    </Footer>
    );
}

export default Rodape;