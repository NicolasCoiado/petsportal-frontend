import NavBar from '../../../components/navbar/';
import AdocoesList from '../../../components/adm-components/adocoes-list/'
import Rodape from '../../../components/rodape/';
import { Fragment } from 'react';

function ListarAdocoes (){
    return(
    <Fragment>
        <header>
            <NavBar />
        </header>
        <main>
            <AdocoesList />
        </main>
        <footer>
            <Rodape />
        </footer>
    </Fragment>
    );
}

export default ListarAdocoes;