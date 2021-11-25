import 'materialize-css';
import React, { useEffect, useState } from 'react';
import { Modal, Button, Select, TextInput, Collection, CollectionItem } from 'react-materialize';
import { Link } from "react-router-dom";
import { ImCross } from 'react-icons/im';
import { GiSittingDog } from 'react-icons/gi'
import { FaFilter } from 'react-icons/fa';
import ViewerImgPro from '../viewer-img-pro/'
import API from '../../api';
import './style.css';


function Filter (){

    const [especie, setEspecie] = useState();
    const [porte, setPorte] = useState();
    const [minIdade, setMinIdade] = useState();
    const [maxIdade, setMaxIdade] = useState();

    const [animais, setAnimais] = useState([]);

    useEffect(() => {
        
        let tokens = {}
        if(window.localStorage.getItem('token'))
        {
            tokens.headers= {Authorization : 'Bearer ' + window.localStorage.getItem('token')}
        }

        API.post(`/search/animais`, {limit: 10}, tokens)
        .then(res => {
            setAnimais(res.data.animais)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    const filtrarAnimais = (e, skip) =>{
        e.preventDefault();
        let tokens = {}
        if(window.localStorage.getItem('token'))
        {
            tokens.headers= {Authorization : 'Bearer ' + window.localStorage.getItem('token')}
        }
        let filtro = {
            especie,
            porte, 
            minIdade,
            maxIdade,
            skip,
            limit : 5
        }
        API.post("/search/animais", filtro, tokens )
        .then(res => {
            if(skip==0)
                setAnimais(res.data.animais)
            else    
                setAnimais(animais.concat(res.data.animais))
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
                    <h1 className="title-filter">FILTRO PARA ANIMAIS:</h1>
                    <form onSubmit={e => filtrarAnimais(e, 0)}>
                        <Select
                            multiple={false}
                            onChange={e => setEspecie (e.target.value)}
                            options={{
                                classes: '',
                                dropdownOptions: {
                                alignment: 'left',
                                autoTrigger: true,
                                closeOnClick: true,
                                constrainWidth: true,
                                coverTrigger: true,
                                hover: false,
                                inDuration: 150,
                                onCloseEnd: null,
                                onCloseStart: null,
                                onOpenEnd: null,
                                onOpenStart: null,
                                outDuration: 250
                                }
                            }}
                            value=""
                            >
                            <option
                                disabled
                                value=""
                            >
                                Especie desejada
                            </option>
                            <option value="cao">
                                Cão
                            </option>
                            <option value="gato">
                                Gato
                            </option>
                        </Select>
                        <Select
                            multiple={false}
                            onChange={e => setPorte (e.target.value)}
                            options={{
                                classes: '',
                                dropdownOptions: {
                                alignment: 'left',
                                autoTrigger: true,
                                closeOnClick: true,
                                constrainWidth: true,
                                coverTrigger: true,
                                hover: false,
                                inDuration: 150,
                                onCloseEnd: null,
                                onCloseStart: null,
                                onOpenEnd: null,
                                onOpenStart: null,
                                outDuration: 250
                                }
                            }}
                            value=""
                            >
                            <option
                                disabled
                                value=""
                            >
                                Porte desejado
                            </option>
                            <option value="p">
                                Pequeno
                            </option>
                            <option value="pm">
                                Pequeno-Médio
                            </option>
                            <option value="m">
                                Médio
                            </option>
                            <option value="mg">
                                Médio-Grande
                            </option>
                            <option value="g">
                                Grande
                            </option>
                        </Select>
                        <div className="config-inputs-filter">
                            <TextInput
                                label="Idade Mínima"
                                id="input-filter1"
                                type="number"
                                onChange={e => setMinIdade (e.target.value)}
                            />
                            <TextInput
                                label="Idade Máxima"
                                id="input-filter2"
                                type="number"
                                onChange={e => setMaxIdade (e.target.value)}
                            />
                        </div>
                        <Button className="subbmit-filtros" type="submmit"><GiSittingDog className="icon-btn-filter" />Aplicar filtro</Button>
                    </form>
                </div>
            </Modal>
        </div>
        <div className="reqs-component">
            <Collection className="cltn-reqs">
                {animais &&
                    animais.map(animal => (
                        <CollectionItem className="cltni-reqs">
                            <Link to={animal}>
                                <ViewerImgPro uploadUrl={animal.foto} />
                            </Link>
                            <div className="itens-cltn">
                                <div className="animal-name">
                                    <h3 className="title-cltn"> Nome do animal: </h3>
                                    <h1 className="name-cltn">{animal.nome}</h1>
                                </div>
                                <div className="itens-cltn-obs">
                                    <h1 className="title-cltn-obs"> Observacao: </h1>
                                    <h1 className="name-cltn-obs">{animal.observacao || 'Nenhuma'}</h1>
                                </div>
                                <Link to={'/animal/'+animal._id}>
                                    <Button className="btn-ver-animal">
                                        Ver animal
                                    </Button>
                                </Link>
                            </div>
                        </CollectionItem>
                    ))
                }
            </Collection>
            <div className="center">
                <Button
                    onClick={e => filtrarAnimais(e, animais.length)}
                    className="btn-mais"
                >
                    Ver mais animais
                </Button>
            </div>
        </div>
    </>
    );
}

export default Filter;