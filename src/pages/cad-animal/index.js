import NavBar from '../../components/navbar/';
import FormAnimal from '../../components/form-animal';
import Rodape from '../../components/rodape';
import { Fragment } from 'react';

function CadastroAnimal (){
    return(
        <Fragment>
            <header>
                <NavBar />
            </header>
            <main>
                <FormAnimal />
            </main>
            <footer>
                <Rodape />
            </footer>
        </Fragment>
    );
}

export default CadastroAnimal;