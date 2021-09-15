import NavBar from '../../components/navbar/';
import FormPessoa from '../../components/form-pessoa';
import Rodape from '../../components/rodape';
import { Fragment } from 'react';

function CadastroPessoa (){
    return(
    <Fragment>
        <header>
            <NavBar />
        </header>
        <main>
            <FormPessoa />
        </main>
        <footer>
            <Rodape />
        </footer>
    </Fragment>
    );
}

export default CadastroPessoa;