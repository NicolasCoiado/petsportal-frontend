import 'materialize-css';
import { TextInput, Button, Icon } from 'react-materialize';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './style.css';

function FormLogin (){
    return(
    <div id="login-areas">
        <div id="login-form-area">
            <h1>LOGIN</h1>
            <TextInput
                icon="email"
                id="TextInput-102"
                label="Email"
            />

            <TextInput
                icon="vpn_key"
                id="TextInput-31"
                label="Password"
                password
            />
            <Button
                node="button"
                type="submit"
                waves="light"
            >
                Submit
                <Icon left>
                    send
                </Icon>
            </Button>
        </div>
        <div id="cad-area">
            <h1 id="title-cadastrar">CADASTRAR</h1>
            <p id="txt-cadastrar">Somente pessoas cadastradas podem adotar e doar animais, fazemos isso pois prezamos pela sua segurança e também a dos pequeninos</p>
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
            <br/>
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
        </div>
    </div>
    );
}

export default FormLogin;