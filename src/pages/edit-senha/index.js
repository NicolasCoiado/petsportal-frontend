import NavBar from '../../components/navbar/';

import Rodape from '../../components/rodape';
import { Fragment } from 'react';

function EditarSenha (){
    return(
    <Fragment>
        <header>
            <NavBar />
        </header>
        <main>
            Editar
        </main>
        <footer>
            <Rodape />
        </footer>
    </Fragment>
    );
}

export default EditarSenha;