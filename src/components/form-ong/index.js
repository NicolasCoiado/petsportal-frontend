import 'materialize-css';
import { TextInput, Textarea, Button, Checkbox } from 'react-materialize';
import { MdSend, MdDone } from 'react-icons/md';
import { useHistory, Link } from 'react-router-dom';
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
    const [social, setSocial] = useState();
    const [pergunta, setPergunta] = useState('');
    const [resposta, setResposta] = useState('');

    const [termos, setTermos] = useState(false);

    const [btn, setBtn] = useState('');

    const [upload, setUpload] = useState('vazio');

    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!termos){
            window.alert('Aceite os termos de uso, para poder efetuar o cadastro!')
        }else{
            if(!nome || !email || !senha || !senha2 || !endereco || !tel1 || !social || !pergunta || !resposta){
                window.alert('O formulário possui campo(s) não preenchido')
            }else{
                setBtn('clickado')    
                let user = new FormData();
                user.append('nome', nome)
                user.append('email', email)
                user.append('senha', senha)
                user.append('senha2', senha2)
                user.append('endereco', endereco)
                user.append('tel1', tel1)
                user.append('tel2', tel2)
                user.append('desc', desc)
                user.append('pergunta', pergunta)
                user.append('resposta', resposta)
                if(social)
                    user.append('social', social , social.name)
                
                API.post("/user/cadastrar/ong", user, {
                    headers: {
                    'accept': 'application/json',
                    'Content-Type': `multipart/form-data; boundary=${user._boundary}`,
                    }
                })
                    .then(res => {
                        history.push("/login");
                        window.alert('Ong cadastrada!')
                    })
                    .catch(err =>{
                        window.alert('O formulário possui erro(s), ou a ONG já exite!')
                    
                    })
            }
        }
    }
        

    const handleUpload= (e) => {
        e.preventDefault()
        setSocial (e.target.files[0])
        setUpload ('uploded')
    };

    return(
    <div id="form-areas">
        <form id="form-area" onSubmit={e => handleSubmit(e)} >
        <h3 className="title-cadastrar">Cadastrar ONG</h3>
        <p className="paragraph-cadastrar">Os campos que possuem * são obrigatórios!</p>
            <TextInput            
                label="Nome *"
                onChange={e => setNome (e.target.value)}
            />
            <TextInput
                email
                type="email"
                label="Email *"
                validate
                onChange={e => setEmail (e.target.value)}
            />
            <TextInput
                label="Senha *"
                placeholder="Maiúsculas, minúsculas e números"
                password
                onChange={e => setSenha (e.target.value)}
            />
            <TextInput
                label="Confirme sua senha *"
                password
                onChange={e => setSenha2 (e.target.value)}
            />
            <TextInput
                label="Endereço *"
                onChange={e => setEndereco (e.target.value)}
            />
            <TextInput
                label="Telefone 1 *"
                placeholder="(DDD) xxxxx-xxxx"
                onChange={e => setTel1 (e.target.value)}
            />
            <TextInput
                label="Telefone 2"
                placeholder="(DDD) xxxxx-xxxx"
                onChange={e => setTel2 (e.target.value)}
            />
            <Textarea
                data-length={120}
                label="Descrição"
                onChange={e => setDesc (e.target.value)}
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
            <div className="check-area">
                <Checkbox
                    value=""
                    label=""
                    onClick={()=>setTermos(!termos)}
                    checked={termos}
                />
                <div>Li e aceito os <Link to='/termos-de-uso' target="_blanck">Termos de uso</Link> do site.</div>
            </div>
            <div className="upload-area">
                {(upload !== "uploded")
                    ?(
                        <>
                            <h1 className="lbl-upload">Estatuto Social:</h1>
                            <label htmlFor="file-upload" className="custom-file-upload">
                                    Arquivo
                            </label>
                            <input  onChange={handleUpload}  id="file-upload" type="file" />
                        </>
                    ):(
                        <>
                            <h1 className="lbl-upload">Estatuto Social:</h1>
                            <label to="file-upload" className="custom-file-upload">
                                Arquivo
                            </label>
                            <input  onChange={handleUpload}  id="file-upload" type="file" />
                            <Button
                                className="icon-remove-file"
                                floating
                                icon={<MdDone />}
                                large
                                node="button"
                        
                            />
                        </>
                    )}
            </div>
            
            <div className="btn-area-cadPessoa">
                {btn=='' 
                    ?
                    <Button
                        className="btn-submit-form-ONG"
                        node="button"
                        type="submit"
                        waves="light"
                    >
                        <MdSend className="send-icon" />
                        Cadastrar ONG
                    </Button>
                    :
                    <Button className="btn-submit-form" disabled>
                        <MdSend className="send-icon" />
                        Cadastrar  
                    </Button>
                }
            </div>
        </form>
    </div>
    );
}

export default FormOng;