import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { TextInput, Button, Icon } from 'react-materialize';
import API from '../../api/';
import './style.css';

function EsqueciSenha (){

    const [email, setEmail] = useState('');

    const [pergunta, setPergunta] = useState('');
    const [resposta, setResposta] = useState('');
    const [id, setId] = useState('');

    const [ok, setOk] = useState('');

    const [senha, setSenha] = useState('');
    const [senha2, setSenha2] = useState('');

    const history = useHistory();

    const EnviarEmail = (e) =>{
        e.preventDefault();
      
        API.post("/recover/get", {email})
        .then(res => {
            console.log("Deu bom")
            setPergunta(res.data.pergunta)
            setId(res.data.usuario)
            console.log(res.data.pergunta)
        })
        .catch(err =>{
            window.alert('ERRO! Email não cadastrado!')
            console.log(err)
        })
    }

    const EnviarResposta = (e) =>{
        e.preventDefault();
      
        API.post("/recover/verify", {resposta, usuario: id})
        .then(res => {
            console.log("Deu bom")
            console.log(res.data)
            setOk(res.data.ok)
        })
        .catch(err =>{
            console.log(err)
            window.alert('ERRO! Resposta incorreta!')
        })
    }

    const RedefinirSenha = (e) =>{
        e.preventDefault();
      
        if(senha==senha2){
            API.post("/recover/redefinir", {senha, senha2, usuario: id, resposta})
            .then(res => {
                console.log("Deu bom")
                history.push("/login")
            })
            .catch(err =>{
                console.log(err)
                window.alert('ERRO! Tente novamente com outra senha!')
            })
        }else{
            window.alert('ERRO! As senhas devem ser iguais!')
        }
    }

    return(
        <div className="area-senha">
            <div className="area-email">
                <form onSubmit={EnviarEmail}>
                    <TextInput
                        label="Seu email"
                        email
                        validate
                        success="Great"
                        className="input-campo"
                        onChange={e => setEmail (e.target.value)}
                    />
                    <Button
                        type="submit"
                        className="btn-email"
                    >
                        <Icon left>
                            send
                        </Icon>
                        Enviar Email
                    </Button>
                </form>
            </div>
            {pergunta 
                ?
                    <div className="area-pergunta">
                        <form onSubmit={EnviarResposta}>
                            <TextInput
                                className="input-campo"
                                label={pergunta}
                                onChange={e => setResposta (e.target.value)}
                            />
                            <Button
                                type="submit"
                                className="btn-email"
                            >
                                <Icon left>
                                     send
                                </Icon>
                                Enviar Resposta
                            </Button>
                        </form>
                    </div>
                :
                <> </>
            }
            {ok
                ?
                    <div className="area-new-senha">
                        <form onSubmit={RedefinirSenha}>
                            <TextInput
                                className="input-campo"
                                label="Nova senha:"
                                type="password"
                                onChange={e => setSenha (e.target.value)}
                            />
                            <TextInput
                                className="input-campo"
                                label="Repita a nova senha:"
                                type="password"
                                onChange={e => setSenha2 (e.target.value)}
                            />
                            <Button
                                type="submit"
                                className="btn-email"
                            >
                                <Icon left>
                                     send
                                </Icon>
                                Enviar nova senha
                            </Button>
                        </form>
                    </div>
                :
                <> </>
            }
        </div>
    );
}

export default EsqueciSenha;