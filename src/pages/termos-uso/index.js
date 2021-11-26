import { Fragment } from 'react';
import NavBar from '../../components/navbar';
import Termos from '../../components/termos/'
import Rodape from '../../components/rodape';

function TermosUso(){
    return(
    <Fragment>
        <header>
            <NavBar />
        </header>
        <main>
            <Termos />
        </main>
        <footer>
            <Rodape />
        </footer>
    </Fragment>
    );
}

export default TermosUso;