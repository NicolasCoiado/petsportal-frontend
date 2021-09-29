import { Fragment } from "react";
import NavBar from "../../components/navbar";
import InfosPerfil from "../../components/infos-perfil/";
import Rodape from "../../components/rodape";
function Perfil (){
    return(
        <Fragment>
            <header>
                <NavBar />
            </header>
            <main>
                <InfosPerfil />
            </main>
            <footer>
                <Rodape />
            </footer>
        </Fragment>
    );
}

export default Perfil;