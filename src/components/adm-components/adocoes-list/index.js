import React, { useEffect, useState } from 'react';
import { Collection, CollectionItem, Modal, Button, TextInput } from 'react-materialize';
import { Link } from 'react-router-dom';
import { ImCross } from 'react-icons/im';
import { FaFilter } from 'react-icons/fa';
import moment from 'moment';
import ViewerImgPro from '../../viewer-img-pro/';
import API from '../../../api';
import './style.css';

function AdocoesList (){

    const [adotante, setAdotante] = useState();
    const [doador, setDoador] = useState();
    const [animal, setAnimal] = useState();

    const [adocoes, setAdocoes] = useState();


    useEffect(() => {
        
        let tokens = {}
        if(window.localStorage.getItem('token'))
        {
            tokens.headers= {Authorization : 'Bearer ' + window.localStorage.getItem('token')}
        }

        API.post(`admin/adocoes`, {limit: 10}, tokens)
        .then(res => {
            console.log(res.data)
            setAdocoes(res.data.adocoes)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    const filtrarAdocoes = (e , skip, btn) =>{
        e.preventDefault();
        let tokens = {}
        if(window.localStorage.getItem('token'))
        {
            tokens.headers= {Authorization : 'Bearer ' + window.localStorage.getItem('token')}
        }
        let filtro = {
            adotante, 
            doador,
            animal,
            limit : 5,
            skip, 
            btn
        }

        API.post("/admin/adocoes", filtro, tokens )
        .then(res => {
            console.log("Deu bom")
            console.log(res.data.adocoes);
            if(skip==0)
                setAdocoes(res.data.adocoes)
            else    
                setAdocoes(adocoes.concat(res.data.adocoes))
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
                        <form onSubmit={e=>filtrarAdocoes(e, 0, false)}>
                            <TextInput
                                label="Nome do Adotante"
                                onChange={e => setAdotante(e.target.value)}
                            />
                            <TextInput
                                label="Nome do Doador"
                                onChange={e => setDoador(e.target.value)}
                            />
                            <TextInput
                                label="Nome do Animal"
                                onChange={e => setAnimal(e.target.value)}
                            />
                           
                            <Button className="subbmit-filtros" type="submmit">Aplicar filtro</Button>
                        </form>
                    </div>
                </Modal>
            </div>
            <div className="reqs-component">
                <Collection className="cltn-reqs">
                    {adocoes &&
                        adocoes.map(adocao => 
                        ( 
                            <CollectionItem key={adocao._id} className="cltni-reqs">

                                <p>{JSON.stringify(adocao)}</p>
                                {/* <Link to={'/animal/'+adocao.animal._id}>
                                    <ViewerImgPro uploadUrl={adocao.animal.foto} />
                                </Link>
                                <div className="itens-cltn">
                                    <div className="animal-name">
                                        <h3 className="title-cltn"> Nome do animal: </h3>
                                        <h1 className="name-cltn">{adocao.animal.nome}</h1>
                                    </div>
                                    <div className="animal-name">
                                        <h3 className="title-cltn"> Nome do adotante: </h3>
                                        <h1 className="name-cltn">{adocao.adotante.nome}</h1>
                                    </div>
                                    <div className="animal-name">
                                        <h3 className="title-cltn"> Nome do doador: </h3>
                                        <h1 className="name-cltn">{adocao.doador.nome}</h1>
                                    </div>
                                    <div className="animal-name">
                                        <h3 className="title-cltn"> Data da adoção: </h3>
                                        <h1 className="name-cltn">{ moment(adocao.data).format('D/MM/YYYY') }</h1>
                                    </div>
                                </div> */}
                            </CollectionItem>
                        ))
                    }
                </Collection>
                <div className="center">
                    <Button
                        onClick={e => filtrarAdocoes (e, adocoes.length, true)}
                        className="btn-mais"
                    >
                        Mostrar mais adoções
                    </Button>
                </div>
            </div>
        </>
    );
}

export default AdocoesList;