import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import { Collection, CollectionItem, Modal, Button } from 'react-materialize';
import ViewerImgPro from '../viewer-img-pro';
import { GiCheckMark } from "react-icons/gi";
import { ImCross } from 'react-icons/im';
import API from "../../api";
import './style.css';

function RequisicoesAdocao (){

    const [doados, setDoados] = useState();
    const [adotados, setAdotados] = useState();

    function recusar (id){
        var r = window.confirm('Tem certeza que deseja fazer recusar a proposta?')

        if(r == true){
            API.post(`/animals/adocao/recusar`, {pedido:id}, {
                headers: { Authorization : 'Bearer ' + window.localStorage.getItem('token')}
            })
            .then(res => {
                window.location.reload();
            })
            .catch(err => {
                console.log(err)
            })
        }
    }

    function aceitar (id){
        var r = window.confirm('Tem certeza que deseja fazer aceitar a proposta? Seu telefone será enviado, para que o adotante entre em contato com você!')

        if(r == true){
            API.post(`/animals/adocao/aceitar`, {pedido:id}, {
                headers: { Authorization : 'Bearer ' + window.localStorage.getItem('token')}
            })
            .then(res => {
                window.location.reload();
            })
            .catch(err => {
                console.log(err)
            })
        }
    }

    useEffect(() => {
        API.post(`/animals/adocao/espera`, {}, {
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
                <h3>Animais que você quer adotar : </h3>
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
                                </div>
                            </CollectionItem>
                        ))
                    }
                </Collection>
            </>
            }
            { doados &&
            <>
            
            <h3>Propostas para seus animais : </h3>
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
                            <h1 className="name-cltn">{adocao.adotante.nome}</h1>
                        </div>
                    </div>
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
                    </div>
                        <div className="btn-group">
                            <Button
                                className="btn-aceitar"
                                node="button"                         
                                waves="light"
                                onClick={() => aceitar(adocao._id)}
                            >
                                Aceitar
                                <GiCheckMark className="icon-btn"/>
                            </Button>
                            <Button
                                className="btn-recusar"
                                node="button"
                                waves="light"
                                onClick={() => recusar(adocao._id)}
                            >
                                Recusar
                                <ImCross className="icon-btn" />
                            </Button>
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

export default RequisicoesAdocao;