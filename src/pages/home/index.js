import NavBar from '../../components/navbar/';
import Carrossel from '../../components/carousel/';
import Filter from '../../components/filters/'
import Cards from '../../components/cards/'
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
            <Filter />
            <Cards />
        </main>
        <footer>
            <Rodape />
        </footer>
    </Fragment>
    );
}

export default Home;