import { TextInput, Button} from 'react-materialize';
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
            window.alert('O formulário possui um erro!');
        })
    }

    return( 
    <div id="login-areas">
        <div id="login-form-area">
            <h1 id="title-login">LOGIN</h1>
            <p id="txt-login">Logado no nosso site, você tem acesso a diversas funções!</p>
            <form className="form-login" onSubmit={e => handleSubmit(e) }>
                <div id="inputs-login">
                    <TextInput
                        email
                        icon="email"
                        label="Email"
                        type="email"
                        onChange={e => setEmail (e.target.value)}
                    />
                    <TextInput
                        icon={<RiLockPasswordFill/>}
                        label="Password"
                        password
                        onChange={e => setSenha(e.target.value)}
                    />
                </div>
                <Link to="/editar" className="EsqueciSenha">Esqueceu sua senha?</Link><br/>
                <Button
                    id="btn-login"
                    node="button"
                    type="submit"
                    waves="light"
                >
                    LOGIN
                </Button>

            </form>
        </div>
        <div id="cad-area">
            <h1 id="title-cadastrar">OLÁ, NOVO AQUI?</h1>
            <p id="txt-cadastrar">Exigimos cadastro para adoção e doação de animais, pois prezamos pela segurança dos pequeninos!</p>
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