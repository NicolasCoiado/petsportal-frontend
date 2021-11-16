import NavBar from '../../../components/navbar/';
import EventsValidation from '../../../components/adm-components/events-validation/'
import Rodape from '../../../components/rodape/';
import { Fragment } from 'react';

function ValidarEventos (){
    return(
    <Fragment>
        <header>
            <NavBar />
        </header>
        <main>
            <EventsValidation />
        </main>
        <footer>
            <Rodape />
        </footer>
    </Fragment>
    );
}

export default ValidarEventos;