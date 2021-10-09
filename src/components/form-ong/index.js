import 'materialize-css';
import { TextInput, Textarea, Button, Icon } from 'react-materialize';
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

    const [upload, setUpload] = useState('vazio');

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
            //console.log(user);
            //console.log(res);
            history.push("/login");
        })
        .catch(err =>{
            console.log(err)
            //console.log(user)
           
        })
    }

    const handleUpload= (e) => {
        e.preventDefault()
        // this.image = e.target.files[0]
        //setSocial(JSON.stringify(e.target.files[0]))
        setSocial (e.target.files[0])
        setUpload ('uploded')
        console.log(e.target.files[0])
        console.log("e::::::::::::")
        console.log(social)
    };

    return(
    <div id="form-areas">
        <form id="form-area"onSubmit={e => handleSubmit(e) }>
        <h3 className="title-cadastrar-pessoa">CADASTRAR ONG</h3>
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
                onChange={e => setTel1 (e.target.value)}
            />
            <TextInput
                label="Telefone 2"
                onChange={e => setTel2 (e.target.value)}
            />
            <Textarea
                data-length={120}
                label="Descrição"
                onChange={e => setDesc (e.target.value)}
            />
            <div className="upload-area">
                {(upload !== "uploded")
                    ?(
                        <>
                            <h1 className="lbl-upload">Estatuto Social:</h1>
                            <label for="file-upload" className="custom-file-upload">
                                <Icon className="icon-file">download</Icon> 
                                    Arquivo
                            </label>
                            <input  onChange={handleUpload}  id="file-upload" type="file" />
                        </>
                    ):(
                        <>
                            <h1 className="lbl-upload">Estatuto Social:</h1>
                            <label for="file-upload" className="custom-file-upload">
                                <Icon className="icon-file">download</Icon> 
                                Arquivo
                            </label>
                            <input  onChange={handleUpload}  id="file-upload" type="file" />
                            <Button
                                className="icon-remove-file"
                                floating
                                icon={<Icon>done</Icon>}
                                large
                                node="button"
                        
                            />
                        </>
                    )}
            </div>
            
            <div className="btn-area-cadPessoa">
                <Button
                    className="btn-submit-form-ONG"
                    node="button"
                    type="submit"
                    waves="light"
                >
                    Cadastrar ONG
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