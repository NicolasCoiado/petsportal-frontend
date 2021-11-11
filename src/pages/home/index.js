import NavBar from '../../components/navbar/';
import Carrossel from '../../components/carousel/';
import Filter from '../../components/filters/'
import Rodape from '../../components/rodape'
import { Fragment } from 'react';
import CarrosselCards from '../../components/carrossel-cards';

function Home (){
    return(
    <Fragment>
        <header>
            <NavBar />
        </header>
        <main>
            <Carrossel />
            <Filter />
            <CarrosselCards/>
        </main>
        <footer>
            <Rodape />
        </footer>
    </Fragment>
    );
}

export default Home;