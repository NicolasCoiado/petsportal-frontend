import NavBar from '../../components/navbar/';
import FormOng from '../../components/form-ong';
import Rodape from '../../components/rodape';
import { Fragment } from 'react';

function CadastroOng (){
    return(
    <Fragment>
        <header>
            <NavBar />
        </header>
        <main>
            <FormOng />
        </main>
        <footer>
            <Rodape />
        </footer>
    </Fragment>
    );
}

export default CadastroOng;