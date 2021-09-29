import ViewerIMG from '../viewer-img/';
import { Button, Icon } from 'react-materialize';
import React, { useState } from "react";
import Modal from "../modal/";
import { Link } from 'react-router-dom';
import './style.css';

function InfosPerfil (){
    const [showModal, setShowModal]= useState(false);
    const OpenModal = () => {
        setShowModal(prev => !prev);
    }

    return(
        <div id="infos-perfil">
            <div id="upload-image">
                <ViewerIMG />
                <h1 className="title-upload-image">Upload de imagem</h1>
                <Button
                    node="a"
                    small
                    style={{
                        marginRight: '5px'
                    }}
                    waves="light"
                >
                    Upload
                    <Icon right>
                        download
                    </Icon>
                </Button>
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
                    node="a"
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