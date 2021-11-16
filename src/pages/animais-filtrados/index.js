import NavBar from '../../components/navbar/';
import Filter from '../../components/filters/';
import Rodape from '../../components/rodape/';
import { Fragment } from 'react';

function AnimaisFiltrados(){
    return(
        <Fragment>
            <header>
                <NavBar />
            </header>
            <main>
                <Filter/>
            </main>
            <footer>
                <Rodape />
            </footer>
        </Fragment>
    );
}

export default AnimaisFiltrados;