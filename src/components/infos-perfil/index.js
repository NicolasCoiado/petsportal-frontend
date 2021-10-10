import ViewerIMG from '../viewer-img/';
import { Button, Icon, Modal, TextInput} from 'react-materialize';
import React, { useState } from "react";
import './style.css';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import API from '../../api/';

function InfosPerfil (){
    const [showModal, setShowModal]= useState(false);
    const [user, setUser] = useState({})
    const OpenModal = () => {
        setShowModal(prev => !prev);
    }

    const { id } = useParams()

    useEffect(() => {
        API.post(`/user/read/`, {
            id
        }, {
            headers: { Authorization : 'Bearer ' + window.localStorage.getItem('token')}
        })
        .then(res => {
            console.log(res.data)
            setUser(res.data.user)
        })
        .catch(err => {
            console.log("fuck")
            console.log(err)
        })
    }, [])

    return(
        <div id="infos-perfil">
            <div id="upload-image">
                <ViewerIMG uploadUrl={user.imagem}/>
                <label for="file-upload" className="custom-file-upload-perfil">
                    <Icon className="icon-file">download</Icon> 
                        Upload imagem
                </label>
                <input   id="file-upload" type="file" /> 
              
            </div>
            <div className="campos-info">
                <p className="campo-info">Nome:</p>
                <p className="campo-info">Email:</p>
                <p className="campo-info">Data de nascimento:</p>
                <p className="campo-info">CPF:</p>
                <p className="campo-info">Endereço:</p>
                <p className="campo-info">Telefone 1:</p>
                <p className="campo-info">Telefone 2:</p>
                <p className="campo-info">Sobre você:</p>
            </div>
            
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
        <form>
        <TextInput
            label="Nome completo" 
            type="text"
        />
        <TextInput
            label="Email" 
            type="email"
        />
        <TextInput
            label="CPF" 
            type="text"
        />
        <TextInput
            label="Endereço" 
            type="text"
        />
        <TextInput
            label="Telefone 1" 
            type="number"
        />
        <TextInput
            label="Telefone 2" 
            type="number"
        />
        <TextInput
            label="Sobre mim..." 
            type="text"
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