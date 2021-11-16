import NavBar from '../../components/navbar/';
import Eventos from '../../components/eventos/';
import Rodape from '../../components/rodape/';
import { Fragment } from 'react';

function AnimaisFiltrados(){
    return(
        <Fragment>
            <header>
                <NavBar />
            </header>
            <main>
                <Eventos />
            </main>
            <footer>
                <Rodape />
            </footer>
        </Fragment>
    );
}

export default AnimaisFiltrados;