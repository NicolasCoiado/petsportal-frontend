import React, { useEffect, useState } from 'react';
import { Collection, CollectionItem, Modal, Button, TextInput } from 'react-materialize';
import ViewerBanner from '../viewer-banner/';
import { Link } from 'react-router-dom';
import moment from 'moment';
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

        var r = window.confirm('Tem certeza que deseja validar este evento?')

        if(r == true){
            API.post("/admin/validate/eventos/validate", {evento : id}, tokens)
            .then(res => {
                window.location.reload();
            })
            .catch(err =>{
                console.log(err)
            })
        }
    }

    const recusar = (e, id) => {
        e.preventDefault();
        let tokens = {}
        if(window.localStorage.getItem('token'))
        {
            tokens.headers= {Authorization : 'Bearer ' + window.localStorage.getItem('token')}
        }

        var r = window.confirm('Tem certeza que deseja excluir este evento?')

        if(r == true){
            API.post("/admin/validate/eventos/excluir", {evento : id}, tokens)
            .then(res => {
                window.location.reload();
            })
            .catch(err =>{
                console.log(err)
            })
        }
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
                            <a href={evento.banner} className="a-banner">
                                <ViewerBanner uploadUrl={evento.banner} />
                            </a>
                            <Link to={'/evento/'+evento._id} className="itens-cltn">
                                    <div className="animal-name">
                                        <h3 className="title-cltn"> Nome do evento: </h3>
                                        <h1 className="name-cltn">{evento.nome}</h1>
                                    </div>
                                    <div className="animal-name">
                                        <h3 className="title-cltn"> Data do evento: </h3>
                                        <h1 className="name-cltn">{ moment(evento.data).format('D/MM/YYYY h:mm') }</h1>
                                    </div>
                                    <div className="animal-name">
                                        <h3 className="title-cltn"> Local: </h3>
                                        <h1 className="name-cltn">{ evento.local }</h1>
                                    </div>
                                    <Button
                                        onClick={e=>verificar(e, evento._id)}
                                        className="btn-aceitar"
                                    >
                                        Verificar evento
                                    </Button>
                                    <Button
                                        onClick={e=>recusar(e, evento._id)}
                                        className="btn-banir"
                                    >
                                        Excluir evento
                                    </Button>
                            </Link>
                            
                        </CollectionItem>
                    ))
                }
            </Collection>
            <div className="center">
                <Button
                    onClick={e => filtrarEventos(e, eventos.length)}
                    className="btn-mais"
                >
                    Mostrar mais eventos
                </Button>
            </div>
        </div>
    </>
    );
}

export default EventsValidation;