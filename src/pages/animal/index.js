import NavBar from '../../components/navbar/';
import InfosAnimal from '../../components/infos-animal';
import Rodape from '../../components/rodape';
import { Fragment } from 'react';

function CadastroAnimal (){
    return(
        <Fragment>
            <header>
                <NavBar />
            </header>
            <main>
                <InfosAnimal />
            </main>
            <footer>
                <Rodape />
            </footer>
        </Fragment>
    );
}

export default CadastroAnimal;