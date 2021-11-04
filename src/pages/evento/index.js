import NavBar from '../../components/navbar/';
import InfosEvento from '../../components/infos-evento';
import Rodape from '../../components/rodape';
import { Fragment } from 'react';

function Evento (){
    return(
    <Fragment>
        <header>
            <NavBar />
        </header>
        <main>
            <InfosEvento />
        </main>
        <footer>
            <Rodape />
        </footer>
    </Fragment>
    );
}

export default Evento;