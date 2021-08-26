import NavBar from '../../components/navbar/';
import FormPessoa from '../../components/form-pessoa';
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
    </Fragment>
    );
}

export default CadastroPessoa;