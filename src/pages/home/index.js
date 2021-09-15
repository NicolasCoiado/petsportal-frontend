import NavBar from '../../components/navbar/';
import Carrossel from '../../components/carousel/';
import Rodape from '../../components/rodape'
import { Fragment } from 'react';

function Home (){
    return(
    <Fragment>
        <header>
            <NavBar />
        </header>
        <main>
            <Carrossel />
        </main>
        <footer>
            <Rodape />
        </footer>
    </Fragment>
    );
}

export default Home;