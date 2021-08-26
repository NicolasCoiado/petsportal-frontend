import NavBar from '../../components/navbar/';
import { Fragment } from 'react';
import FormLogin from '../../components/form-login/'

function Login (){
    return(
    <Fragment>
        <header>
            <NavBar />
        </header>
        <main>
            <FormLogin />
        </main>
    </Fragment>
    );
}

export default Login;