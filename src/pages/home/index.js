import NavBar from '../../components/navbar/';
import Carrossel from '../../components/carousel/';
import Filter from '../../components/filters/'
import Rodape from '../../components/rodape'
import { Fragment } from 'react';
import Animais from '../../components/animais';

function Home (){
    return(
    <Fragment>
        <header>
            <NavBar />
        </header>
        <main>
            <Carrossel />
            <Filter />
            <Animais/>
        </main>
        <footer>
            <Rodape />
        </footer>
    </Fragment>
    );
}

export default Home;