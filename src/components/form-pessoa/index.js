import 'materialize-css';
import { TextInput, Textarea, Button, Icon } from 'react-materialize';
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
    const [pergunta, setPergunta] = useState('');
    const [resposta, setResposta] = useState('');
    const history = useHistory();

    var data = new Date();

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
            desc,
            pergunta, 
            resposta
        }

        if(senha == senha2){
            API.post("/user/cadastrar/pessoaFisica", user )
            .then(res => {
                // console.log("Deu bom")
                // console.log(user);
                // console.log(res);
                history.push("/login");
                window.alert('Usuário cadastrado')
            })
            .catch(err =>{
                // console.log(err)
                // console.log(user)
                window.alert('O formulário possui um erro, ou o usuário já exite!')  
            })
        }else{
            window.alert('As senhas não são iguais');
        }
    }
    return(
    <div id="form-areas">
        <form id="form-area" onSubmit={e => handleSubmit(e) }>
        <h3 className="title-cadastrar">Cadastrar Usuário</h3>
        <p className="paragraph-cadastrar">Os campos que possuem * são obrigatórios!</p>
            <TextInput            
                label="Nome *"
                onChange={e => setNome (e.target.value)}
                className="campo-form-pessoa"
            />
            <TextInput
                email         
                type="email"
                label="Email *"
                validate
                onChange={e => setEmail (e.target.value)}
                className="campo-form-pessoa"
            />
            <TextInput
                label="CPF *"
                placeholder="xxx.xxx.xx-xx"
                onChange={e => setCpf(e.target.value)}
                className="campo-form-pessoa"
            />
            <TextInput               
                label="Data de Nascimento *"
                onChange={e => setNasc (e.target.value)}
                className="campo-form-pessoa"
                type="date"
                min="1901-01-01"
                max={data.getFullYear() + '-' + data.getMonth() + '-' + data.getDate()}
            />
            <TextInput             
                label="Senha *"
                password
                onChange={e => setSenha (e.target.value)}
                className="campo-form-pessoa"
            />
            <TextInput
                label="Confirme sua senha *"
                password
                onChange={e => setSenha2 (e.target.value)}
                className="campo-form-pessoa"
            />
            <TextInput
                label="Endereço *"
                onChange={e => setEndereco (e.target.value)}
                className="campo-form-pessoa"
            />
            <TextInput
                label="Telefone 1* "
                placeholder="(DDD) xxxxx-xxxx"
                onChange={e => setTel1 (e.target.value)}
                className="campo-form-pessoa"
            />
            <TextInput
                label="Telefone 2"
                placeholder="(DDD) xxxxx-xxxx"
                onChange={e => setTel2 (e.target.value)}
                className="campo-form-pessoa"
            />
            <Textarea
                data-length={120}
                label="Descrição"
                onChange={e => setDesc (e.target.value)}
                className="campo-form-pessoa"
            />
            <TextInput
                label="Pergunta para recuperar sua conta*"
                onChange={e => setPergunta (e.target.value)}
                className="campo-form-pessoa"
            />
            <TextInput
                label="Resposta da pergunta acima*"
                onChange={e => setResposta (e.target.value)}
                className="campo-form-pessoa"
            />
            <div className="btn-area-cadPessoa">
                <Button
                    className="btn-submit-form"
                    node="button"
                    type="submit"
                    waves="light"
                >
                    Cadastrar
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