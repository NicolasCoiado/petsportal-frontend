import ViewerIMG from '../viewer-img/';
import { Button, Icon, Modal, TextInput} from 'react-materialize';
import React, { useState } from "react";
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router';
import FormData from 'form-data'
import API from '../../api/';
import './style.css';


function InfosPerfil (){
    const [user, setUser] = useState()
    const { id } = useParams()
    const history = useHistory();


    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [nasc, setNasc] = useState('');
    const [endereco, setEndereco] = useState('');
    const [tel1, setTel1] = useState('');
    const [tel2, setTel2] = useState('');
    const [desc, setDesc] = useState('');


    useEffect(() => {
        API.post(`/user/read/`, {
            id : id
        }, {
            headers: { Authorization : 'Bearer ' + window.localStorage.getItem('token')}
        })
        .then(res => {
            console.log(res.data)
            setUser(res.data.user)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    function handleUpload (e){
        let ImgPerfil = new FormData();
        let imagem = e.target.files[0]
        ImgPerfil.append('img', imagem, imagem.name)

        API.post("/user/edit/foto", ImgPerfil, {
            headers: {
              'accept': 'application/json',
              'Content-Type': `multipart/form-data; boundary=${ImgPerfil._boundary}`,
            Authorization : 'Bearer ' + window.localStorage.getItem('token')
            }
          })
          
        .then(res => {
            console.log("Deu bom")
            window.location.reload();
    
        })
        .catch(err =>{
            console.log(err)
        })
    }
    
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        API.post("/user/edit/pessoaFisica",{
            nome,
            cpf,
            nasc,
            endereco,
            tel1,
            tel2,
            desc
        }, {
            headers: {
                Authorization : 'Bearer ' + window.localStorage.getItem('token')

            }
          })
          
        .then(res => {
            console.log("Deu bom")
            window.location.reload();
    
        })
        .catch(err =>{
            console.log(err)
        })
    }

    return(
        <div id="infos-perfil">
            <div id="upload-image">
                {user &&  <ViewerIMG uploadUrl={user.imagem}/>}
                <label for="file-upload" className="custom-file-upload-perfil">
                    <Icon className="icon-file">download</Icon> 
                        Upload imagem
                </label>
                <input  onChange={e => handleUpload (e)} id="file-upload" type="file" /> 
              
            </div>
            {!user ?(
                <h1> LOADING ...</h1>
            ):( 
                {user.tipo=='nmr' ?(
                    <div className="campos-info">
                        <p className="campo-info">Nome: {user.nome}</p>
                        <p className="campo-info">Email: {user.email}</p>
                        <p className="campo-info">Data de nascimento: {user.fisico.nasc.toString().slice(0, 10)}</p>
                        <p className="campo-info">CPF: {user.fisico.cpf}</p>
                        <p className="campo-info">Endereço: {user.endereco}</p>
                        <p className="campo-info">Telefone 1:({user.ddd1}) {user.tel1}</p>
                        <p className="campo-info">Telefone 2:({user.ddd2}) {user.tel2}</p>
                        <p className="campo-info">Sobre você: {user.fisico.desc} </p>
                    </div>
                ):(
                    <div className="campos-info">
                        <p className="campo-info">Nome: {user.nome}</p>
                        <p className="campo-info">Email: {user.email}</p>
                        <p className="campo-info">Data de nascimento: {user.fisico.nasc.toString().slice(0, 10)}</p>
                        <p className="campo-info">Telefone 1:({user.ddd1}) {user.tel1}</p>
                        <p className="campo-info">Telefone 2:({user.ddd2}) {user.tel2}</p>
                        <p className="campo-info">Sobre você: {user.fisico.desc} </p>
                    </div>
                )
            )
            }
            
            <div className="center">
            <Modal
                actions={[
                    <Button flat modal="close" node="button" waves="green">Close</Button>
                ]}
                bottomSheet={false}
                fixedFooter={false}
                header="Editar suas informações"
                open={false}
                options={{
                 dismissible: true,
                 endingTop: '10%',
                 inDuration: 250,
                 onCloseEnd: null,
                 onCloseStart: null,
                 onOpenEnd: null,
                 onOpenStart: null,
                 opacity: 0.5,
                 outDuration: 250,
                 preventScrolling: true,
                 startingTop: '4%'
                }}
                trigger={
                    <Button className="btn-editar-infos" node="button">
                        Editar
                        <Icon right>
                            edit
                        </Icon> 
                    </Button>    
                }
                >
                    <div className="card">
                        <form onSubmit={e => handleSubmit(e) }>
                            <TextInput
                                label="Nome completo" 
                                type="text"
                                onChange={e => setNome (e.target.value)}
                            />
                            <TextInput
                                label="CPF" 
                                type="text"
                                onChange={e => setCpf (e.target.value)}
                            />
                            <TextInput
                                label="Data de Nascimento" 
                                type="date"
                                onChange={e => setNasc(e.target.value)}
                            />
                            <TextInput
                                label="Endereço" 
                                type="text"
                                onChange={e => setEndereco (e.target.value)}
                            />
                            <TextInput
                                label="Telefone 1" 
                                type="number"
                                onChange={e => setTel1 (e.target.value)}
                            />
                            <TextInput
                                label="Telefone 2" 
                                type="number"
                                onChange={e => setTel2 (e.target.value)}
                            />
                            <TextInput
                                label="Sobre mim..." 
                                type="text"
                                onChange={e => setDesc (e.target.value)}
                            />
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
                        </form>
                    </div>
                </Modal>
            </div>
        </div>
    );
}

export default InfosPerfil;