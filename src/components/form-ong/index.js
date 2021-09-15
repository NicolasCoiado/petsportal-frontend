import 'materialize-css';
import { TextInput, Textarea, Button, Icon } from 'react-materialize';
import { MdEmail, MdSettingsInputComponent } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import React, {useState} from "react";
import './style.css';
import API from '../../api/'
import FormData from 'form-data'

function FormOng(){
    
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senha2, setSenha2] = useState('');
    const [endereco, setEndereco] = useState('');
    const [tel1, setTel1] = useState('');
    const [tel2, setTel2] = useState('');
    const [desc, setDesc] = useState('');
    const [social, setSocial] = useState('');
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        let user = new FormData();
        user.append('nome', nome)
        user.append('email', email)
        user.append('senha', senha)
        user.append('senha2', senha2)
        user.append('endereco', endereco)
        user.append('tel1', tel1)
        user.append('tel2', tel2)
        user.append('desc', desc)
        user.append('social', social , social.name)

        API.post("/user/cadastrar/ong", user, {
            headers: {
              'accept': 'application/json',
              'Content-Type': `multipart/form-data; boundary=${user._boundary}`,
            }
          })
          
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

    const handleUpload= (e) => {
        e.preventDefault()
        // this.image = e.target.files[0]
        //setSocial(JSON.stringify(e.target.files[0]))
        setSocial (e.target.files[0])
        console.log(e.target.files[0])
        console.log("e::::::::::::")
        console.log(social)
    };

    return(
    <div id="pessoa-areas">
        <h3 className="title-cadastrar-pessoa">CADASTRAR ONG</h3>
        <form id="pessoa-form-area"onSubmit={e => handleSubmit(e) }>
            <TextInput
                id="TextInput-44"
                label="Nome *"
                onChange={e => setNome (e.target.value)}
            />
            <TextInput
                email
                type="email"
                id="TextInput-47"
                label="Email *"
                validate
                onChange={e => setEmail (e.target.value)}
            />
            <TextInput
                id="TextInput-50"
                label="Senha *"
                password
                onChange={e => setSenha (e.target.value)}
            />
            <TextInput
                id="TextInput-50"
                label="Confirme sua senha *"
                password
                onChange={e => setSenha2 (e.target.value)}
            />
            <TextInput
                id="TextInput-53"
                label="Endereço *"
                onChange={e => setEndereco (e.target.value)}
            />
            <TextInput
                id="TextInput-53"
                label="Telefone 1 *"
                onChange={e => setTel1 (e.target.value)}
            />
            <TextInput
                id="TextInput-53"
                label="Telefone 2"
                onChange={e => setTel2 (e.target.value)}
            />
            <Textarea
                data-length={120}
                id="Textarea-29"
                label="Descrição"
                onChange={e => setDesc (e.target.value)}
            />
            <TextInput
                id="TextInput-26"
                label="File"
                type="file"
                onChange={handleUpload}
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

export default FormOng;