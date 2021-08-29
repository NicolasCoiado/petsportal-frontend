import { Fragment } from 'react';
import NavBar from '../../components/navbar/';
import FormLogin from '../../components/form-login/'
import Rodape from '../../components/rodape/'

function Login (){
    return(
    <Fragment>
        <header>
            <NavBar />
        </header>
        <main>
            <FormLogin />
        </main>
        <footer>
            <Rodape />
        </footer>
    </Fragment>
    );
}

export default Login;