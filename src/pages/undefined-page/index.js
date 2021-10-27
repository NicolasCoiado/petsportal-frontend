import { Fragment } from 'react';
import NavBar from '../../components/navbar';
import Undefined from '../../components/undefined'
import Rodape from '../../components/rodape'

function UndefinedPage (){
    return(
    <Fragment>
        <header>
            <NavBar />
        </header>
        <main>
            <Undefined />
        </main>
        <footer>
            <Rodape />
        </footer>
    </Fragment>
    );
}

export default UndefinedPage;