import NavBar from '../../components/navbar/';
import Carrossel from '../../components/carousel/';
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
    </Fragment>
    );
}

export default Home;