import NavBar from '../../components/navbar/';
import FormEvento from '../../components/form-evento';
import Rodape from '../../components/rodape';
import { Fragment } from 'react';

function CadastroEvento (){
    return(
    <Fragment>
        <header>
            <NavBar />
        </header>
        <main>
            <FormEvento />
        </main>
        <footer>
            <Rodape />
        </footer>
    </Fragment>
    );
}

export default CadastroEvento;