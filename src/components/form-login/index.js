import 'materialize-css';
import { TextInput, Button, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import { RiLockPasswordFill } from 'react-icons/ri';
import './style.css';

function FormLogin (){
    return(
    <div id="login-areas">
        <div id="login-form-area">
            <h1 id="title-login">LOGIN</h1>
            <TextInput
                className="txt-email"
                icon="email"
                id="TextInput-102"
                label="Email"
                type="email"
            />

            <TextInput
                icon={<RiLockPasswordFill/>}
                id="TextInput-31"
                label="Password"
                password
            />
            <Button
                id="btn-login"
                node="button"
                type="submit"
                waves="light"
            >
                ENTRAR
                <Icon left>
                    send
                </Icon>
            </Button>
        </div>
        <div id="cad-area">
            <h1 id="title-cadastrar">CADASTRAR</h1>
            <p id="txt-cadastrar">Somente pessoas cadastradas podem adotar e doar animais, fazemos isso pois prezamos pela sua segurança e também a dos pequeninos</p>
            <div id="buttons-area-cad">
                <Link to='/cadastrar'>
                <Button
                    className="btn-cad"
                    node="button"
                    style={{
                    marginRight: '5px'
                    }}
                    waves="light"
                >
                    Me cadastrar
                </Button>
                </Link>
                <Link to='/cadastrar-ong'>
                <Button
                    className="btn-cad"
                    node="button"
                    style={{
                    marginRight: '5px'
                    }}
                    waves="light"
                >
                    Cadastrar ONG
                </Button>
                </Link>
            </div>
        </div>
    </div>
    );
}

export default FormLogin;