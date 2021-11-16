import NavBar from '../../components/navbar/';
import Carrossel from '../../components/carousel/';
import CarrosselCards from '../../components/carrossel-cards/';
import Rodape from '../../components/rodape/'
import { Fragment } from 'react';

function Home (){
    return(
    <Fragment>
        <header>
            <NavBar />
        </header>
        <main>
            <Carrossel />
            <CarrosselCards/>
        </main>
        <footer>
            <Rodape />
        </footer>
    </Fragment>
    );
}

export default Home;