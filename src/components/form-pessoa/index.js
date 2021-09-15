import 'materialize-css';
import { TextInput, Textarea, Button, Icon } from 'react-materialize';
import { MdEmail, MdSettingsInputComponent } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import React, {useState} from "react";
import './style.css';
import API from '../../api/'

function FormPessoa (){
    
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senha2, setSenha2] = useState('');
    const [endereco, setEndereco] = useState('');
    const [tel1, setTel1] = useState('');
    const [tel2, setTel2] = useState('');
    const [nasc, setNasc] = useState('');
    const [cpf, setCpf] = useState('');
    const [desc, setDesc] = useState('');
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();

        let user = {
            nome,
            email,
            senha,
            senha2,
            endereco,
            tel1,
            tel2,
            nasc,
            cpf,
            desc
        }
        API.post("/user/cadastrar/pessoaFisica", user )
        .then(res => {
            console.log("Deu bom")
            console.log(user);
            console.log(res);
            history.push("/login");
        })
        .catch(err =>{
            console.log(err)
            console.log(user)
            window.localStorage.setItem('token', null)
        })
    }
    return(
    <div id="pessoa-areas">
        <h3 className="title-cadastrar-pessoa">CADASTRAR USUÁRIO</h3>
        <form id="pessoa-form-area" onSubmit={e => handleSubmit(e) }>
            <TextInput
                id="input-nome"
                label="Nome *"
                onChange={e => setNome (e.target.value)}
            />
            <TextInput
                email
                id="input-email"
                label="Email *"
                validate
                onChange={e => setEmail (e.target.value)}
            />
            <TextInput
                id="input-cpf"
                label="CPF *"
                onChange={e => setCpf(e.target.value)}
            />
            <TextInput
                id="input-nasc"
                label="Data de Nascimento *"
                onChange={e => setNasc (e.target.value)}
                type="date"
            />
            <TextInput
                id="input-senha"
                label="Senha *"
                password
                onChange={e => setSenha (e.target.value)}
            />
            <TextInput
                id="input-senha2"
                label="Confirme sua senha *"
                password
                onChange={e => setSenha2 (e.target.value)}
            />
            <TextInput
                id="input-endereco"
                label="Endereço *"
                onChange={e => setEndereco (e.target.value)}
            />
            <TextInput
                id="input-tell1"
                label="Telefone 1 *"
                onChange={e => setTel1 (e.target.value)}
            />
            <TextInput
                id="input-tell2"
                label="Telefone 2"
                onChange={e => setTel2 (e.target.value)}
            />
            <Textarea
                data-length={120}
                id="input-desc"
                label="Descrição"
                onChange={e => setDesc (e.target.value)}
            />
            <div className="btn-area-cadPessoa">
                <Button
                    node="button"
                    type="submit"
                    waves="light"
                >
                    Enviar
                    <Icon left>
                        send
                    </Icon>
                </Button>
            </div>
        </form>
    </div>
    );
}

export default FormPessoa;