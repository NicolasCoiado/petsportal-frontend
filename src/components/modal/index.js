import React, {useState, useEffect} from 'react';
import { GiBalloonDog } from 'react-icons/gi';
import { TextInput, Button, Icon } from 'react-materialize';
import './style.css';


const Modal = ({showModal, setShowModal}) => {

    
    /*======================================================================*/


    return <> {showModal ? 

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
            <Icon right>
                upload
            </Icon>
        </Button>
        </form>
    </div>

    : null} </>
}

export default Modal;