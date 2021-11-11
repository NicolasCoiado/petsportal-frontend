import { Fragment } from "react";
import NavBar from "../../components/navbar";
import AdocaoConfirmadas from "../../components/adocao-confirmadas";
import Rodape from "../../components/rodape";

function ConfirmadasAdocao (){
    return(
        <Fragment>
            <header>
                <NavBar />
            </header>
            <main>
                <AdocaoConfirmadas/>
            </main>
            <footer>
                <Rodape />
            </footer>
        </Fragment>
    );
}

export default ConfirmadasAdocao;