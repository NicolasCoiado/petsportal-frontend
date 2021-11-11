import { Fragment } from "react";
import NavBar from "../../components/navbar/";
import RequisicoesAdocao from "../../components/requisicoes-adocao/";
import Rodape from "../../components/rodape/";

function PropostasAdocao (){
    return(
        <Fragment>
            <header>
                <NavBar />
            </header>
            <main>
                <RequisicoesAdocao/>
            </main>
            <footer>
                <Rodape />
            </footer>
        </Fragment>
    );
}

export default PropostasAdocao;