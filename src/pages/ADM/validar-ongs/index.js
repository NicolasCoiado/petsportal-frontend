import NavBar from '../../../components/navbar/';
import OngsValidation from '../../../components/adm-components/ongs-validation/'
import Rodape from '../../../components/rodape/';
import { Fragment } from 'react';

function ValidarOngs(){
    return(
    <Fragment>
        <header>
            <NavBar />
        </header>
        <main>
            <OngsValidation />
        </main>
        <footer>
            <Rodape />
        </footer>
    </Fragment>
    );
}

export default ValidarOngs;