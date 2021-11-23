import { Fragment } from 'react';
import NavBar from '../../components/navbar';
import MoreInfos from '../../components/more-infos/';
import Rodape from '../../components/rodape';

function SaibaMais(){
    return(
    <Fragment>
        <header>
            <NavBar />
        </header>
        <main>
            <MoreInfos />
        </main>
        <footer>
            <Rodape />
        </footer>
    </Fragment>
    );
}

export default SaibaMais;