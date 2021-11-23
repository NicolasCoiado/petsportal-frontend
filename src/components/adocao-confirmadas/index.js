import React, {useState, useEffect} from "react";
import { Collection, CollectionItem, Modal, Button } from 'react-materialize';
import {Link} from 'react-router-dom';
import ViewerImgPro from '../viewer-img-pro/';
import { GiCheckMark } from "react-icons/gi";
import { ImCross } from 'react-icons/im';
import API from "../../api";
import './style.css';

function AdocaoConfirmadas (){

    const [doados, setDoados] = useState();
    const [adotados, setAdotados] = useState();

    useEffect(() => {
        API.post(`/animals/adocao/aceitos`, {}, {
            headers: { Authorization : 'Bearer ' + window.localStorage.getItem('token')}
        })
        .then(res => {
            console.log(res.data)
            setDoados(res.data.doados)
            setAdotados(res.data.adotados)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return(
        
        <div className="reqs-component">
            { adotados &&
            <>
                <h3>Suas adoções confirmadas (Entre em contato, para retirar o animal) :</h3>
                <Collection className="cltn-reqs">
                    {adotados.map(adocao => 
                        (
                            <CollectionItem key={adocao._id} className="cltni-reqs">
                                <Link to={'/animal/'+adocao.animal._id}>
                                    <ViewerImgPro uploadUrl={adocao.animal.foto} />
                                </Link>
                                <div className="itens-cltn">
                                    <div className="animal-name">
                                        <h3 className="title-cltn"> Nome do animal: </h3>
                                        <h1 className="name-cltn">{adocao.animal.nome}</h1>
                                    </div>
                                    <Modal
                                        actions={[
                                            <Button className="close-modal" flat modal="close" node="button"><ImCross /></Button>
                                        ]}
                                        bottomSheet={false}
                                        fixedFooter={false}
                                        header="Motivos de adoção:"
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
                                        trigger={<Button className="btn-modal-motivos" node="button">Motivos de adoção</Button>}
                                        >
                                        <p className="p-obs">
                                            {adocao.observacao}
                                        </p>
                                    </Modal>
                                    <Modal
                                        actions={[
                                            <div className="center"> <Button className="close-modal" flat modal="close" node="button"><ImCross /></Button> </div>
                                        ]}
                                        bottomSheet={false}
                                        fixedFooter={false}
                                        header="Métodos de contato:"
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
                                        trigger={<Button className="btn-modal-ctt" node="button">Entrar em contato</Button>}
                                        >
                                        <p className="p-obs">
                                           Telefone: ({adocao.doador.ddd1 }) {adocao.doador.tel1 } <br /> <br /> 
                                           Telefone secundário: ({adocao.doador.ddd2 }) {adocao.doador.tel2 } <br />
                                        </p>
                                    </Modal>
                                </div>
                            </CollectionItem>
                        ))
                    }
                </Collection>
            </>
            }
            { doados &&
            <>
            
            <h3>Animais que você autorizou a adoção :</h3>
            <Collection className="cltn-reqs">
            {doados.map(adocao => 
                ( 
                <CollectionItem key={adocao._id} className="cltni-reqs">
                    <Link to={'/perfil/'+adocao.adotante._id}>
                        <ViewerImgPro uploadUrl={adocao.adotante.imagem} />
                    </Link>
                    <div className="itens-cltn">
                        <div className="animal-name">
                            <h3 className="title-cltn"> Nome do adotante: </h3> 
                            {/* TODO: Delimite o numero de caracteres abaixo*/}
                            <h1 className="name-cltn">{adocao.adotante.nome}</h1>
                        </div>
                    </div>
                        <Link to={'/animal/'+adocao.animal._id}>
                            <ViewerImgPro uploadUrl={adocao.animal.foto} />
                        </Link>
                    <div className="itens-cltn">
                        <div className="animal-name">
                            <h3 className="title-cltn"> Nome do animal: </h3>
                            {/* TODO: Delimite o numero de caracteres abaixo*/}
                            <h1 className="name-cltn">{adocao.animal.nome}</h1>
                        </div>
                        <Modal
                            actions={[
                                <Button className="close-modal" flat modal="close" node="button"><ImCross /></Button>
                            ]}
                            bottomSheet={false}
                            fixedFooter={false}
                            header="Motivos de adoção:"
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
                                trigger={<Button className="btn-modal-motivos" node="button">Motivos de adoção</Button>}
                                >
                                <p className="p-obs">
                                    {adocao.observacao}
                                </p>
                        </Modal>
                    </div>
                </CollectionItem>
                ))
            }
            </Collection>
            </>
            }
        </div>
   );
}

export default AdocaoConfirmadas;