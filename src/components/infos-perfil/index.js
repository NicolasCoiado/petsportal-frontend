import ViewerIMG from '../viewer-img/';
import { Button, Icon } from 'react-materialize';
import React, { useState } from "react";
import Modal from "../modal/";
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
                <label for="file-upload" className="custom-file-upload">
                    <Icon className="icon-file">download</Icon> 
                        Upload imagem
                </label>
                <input   id="file-upload" type="file" /> 
              
            </div>
            <div>
                <p className="campo-info">Nome:</p>
                <p className="campo-info">Email:</p>
                <p className="campo-info">Senha:</p>
                <p className="campo-info">Data de nascimento:</p>
                <p className="campo-info">CPF:</p>
                <p className="campo-info">Endereço:</p>
                <p className="campo-info">Telefone 1:</p>
                <p className="campo-info">Telefone 2:</p>
                <p className="campo-info">Sobre você:</p>
            </div>
                <Button
                    node="button"
                    type="submit"
                    waves="light"
                    onClick={OpenModal}
                >
                    Editar
                </Button>
      
            <Modal showModal={showModal} setShowModal={setShowModal} />
        </div>
    );
}

export default InfosPerfil;