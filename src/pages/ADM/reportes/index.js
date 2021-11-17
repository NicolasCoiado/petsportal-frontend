import NavBar from '../../../components/navbar/';
import Reports from '../../../components/adm-components/reports';
import Rodape from '../../../components/rodape/';
import { Fragment } from 'react';

function Reportes(){
    return(
    <Fragment>
        <header>
            <NavBar />
        </header>
        <main>
            <Reports />
        </main>
        <footer>
            <Rodape />
        </footer>
    </Fragment>
    );
}

export default Reportes;