import React, { useEffect, useState } from 'react';
import { Collection, CollectionItem, Modal, Button, TextInput } from 'react-materialize';
import { ImCross } from 'react-icons/im';
import { FaFilter } from 'react-icons/fa';
import API from '../../../api';

function EventsValidation (){

    const [nome, setNome] = useState();
    const [local, setLocal] = useState();

    const [eventos, setEventos] = useState();

    useEffect(() => {
        
        let tokens = {}
        if(window.localStorage.getItem('token'))
        {
            tokens.headers= {Authorization : 'Bearer ' + window.localStorage.getItem('token')}
        }

        API.post(`admin/validate/eventos`, {limit: 10}, tokens)
        .then(res => {
            console.log(res.data)
            setEventos(res.data.eventos)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    const verificar = (e, id) => {
        e.preventDefault();
        let tokens = {}
        if(window.localStorage.getItem('token'))
        {
            tokens.headers= {Authorization : 'Bearer ' + window.localStorage.getItem('token')}
        }

        API.post("/admin/validate/eventos/validate", {evento : id}, tokens)
        .then(res => {
            window.location.reload();
            console.log("Deu bom")
        })
        .catch(err =>{
            console.log(err)
        })
    }

    const filtrarEventos = (e , skip) =>{
        e.preventDefault();
        let tokens = {}
        if(window.localStorage.getItem('token'))
        {
            tokens.headers= {Authorization : 'Bearer ' + window.localStorage.getItem('token')}
        }
        let filtro = {
            nome,
            local,
            limit : 5,
            skip, 
            btn: true
        }
        API.post("/admin/validate/eventos", filtro, tokens )
        .then(res => {
            console.log("Deu bom")
            console.log(res.data.eventos);
            if(skip==0)
                setEventos(res.data.eventos)
            else    
                setEventos(eventos.concat(res.data.eventos))
        })
        .catch(err =>{
            console.log(err)
        })
    }

    return(
    <>
        <div id="filters-area">
            <h1 id="filters-title">Filtros:</h1>
            <Modal
                actions={[
                    <Button className="close-modal" flat modal="close" node="button"><ImCross /></Button>
                ]}
                bottomSheet={false}
                fixedFooter={false}
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
                trigger={<Button className="btn-filtros" node="button"><FaFilter className="icon-btn-filter" />Aplicar</Button>}
                >
                <div className="area-filter">
                    <h1 className="title-filter">FILTRO DE ADOÇÕES:</h1>
                    <form onSubmit={e=>filtrarEventos(e, 0)}>
                        <TextInput
                            label="Nome da ONG"
                            onChange={e => setNome(e.target.value)}
                        />
                        <TextInput
                            label="Local da ONG"
                            onChange={e => setLocal(e.target.value)}
                        />
                        
                        <Button className="subbmit-filtros" type="submmit">Aplicar filtro</Button>
                    </form>
                </div>
            </Modal>
        </div>
        <div className="reqs-component">
            <Collection className="cltn-reqs">
                {eventos &&
                    eventos.map(evento => 
                    ( 
                        <CollectionItem key={evento._id} className="cltni-reqs">
                            {evento.nome}
                            <Button
                                //TODO: Descomente linha abaixo para funfar
                                //Lembre de avisar o Théo, para mandar somente as infos que tu quer
                                //onClick={e=>verificar(e, evento._id)}
                            >
                                button
                            </Button>
                        </CollectionItem>
                    ))
                }
            </Collection>
            <Button
                onClick={e => filtrarEventos(e, eventos.length)}
            >
                button
            </Button>
        </div>
    </>
    );
}

export default EventsValidation;