import { TextInput, Button, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import { RiLockPasswordFill } from 'react-icons/ri';
import { useHistory } from 'react-router-dom';
import React, {useState} from "react";
import API from '../../api/'
import './style.css';

function FormLogin (){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();

        let user = {
            email,
            senha
        }
        API.post("/user/login", user )
        .then(res => {
            console.log("Deu bom")
            console.log(res.data)
            window.localStorage.setItem('token', res.data.token);
            history.push('/');
        })
        .catch(err =>{
            console.log(err)
            console.log(user)
            window.localStorage.setItem('token', null)
        })
    }

    return( 
    <div id="login-areas">
        <div id="login-form-area">
            <form onSubmit={e => handleSubmit(e) }>
                <h1 id="title-login">LOGIN</h1>
                <TextInput
                    className="white-text"
                    email
                    icon="email"
                    label="Email"
                    type="email"
                    onChange={e => setEmail (e.target.value)}
                />

                <TextInput
                    className="white-text"
                    icon={<RiLockPasswordFill/>}
                    label="Password"
                    password
                    onChange={e => setSenha(e.target.value)}
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
            </form>
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