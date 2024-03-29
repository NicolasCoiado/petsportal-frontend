import React, { useEffect, useState } from 'react';
import { Collection, CollectionItem, Modal, Button, TextInput} from 'react-materialize';
import { ImCross } from 'react-icons/im';
import { FaFilter } from 'react-icons/fa';
import { MdReport } from 'react-icons/md'
import API from '../../../api';

function Reports (){

    const [nome, setNome] = useState();

    const [reportes, setReportes] = useState();

    useEffect(() => {
        
        let tokens = {}
        if(window.localStorage.getItem('token'))
        {
            tokens.headers= {Authorization : 'Bearer ' + window.localStorage.getItem('token')}
        }
        
        API.post(`/admin/reports`, {limit: 10}, tokens)
        .then(res => {
            setReportes(res.data.reports)
        })
        .catch(err => {
            console.log(err)
        })

    }, [])

    const filtrarReportes = (e , skip) =>{
        e.preventDefault();
        let tokens = {}
        if(window.localStorage.getItem('token'))
        {
            tokens.headers= {Authorization : 'Bearer ' + window.localStorage.getItem('token')}
        }
        let filtro = {
            nome,
            limit : 5,
            skip, 
            btn: true
        }

        API.post("/admin/reports", filtro, tokens )
        .then(res => {
            if(skip==0)
                setReportes(res.data.reportes)
            else    
                setReportes(reportes.concat(res.data.reportes))
        })
        .catch(err =>{
            console.log(err)
        })
    }

    const banir = (e, id) => {
        e.preventDefault();
        let tokens = {}
        if(window.localStorage.getItem('token'))
        {
            tokens.headers= {Authorization : 'Bearer ' + window.localStorage.getItem('token')}
        }
        var r = window.confirm('Tem certeza que deseja banir esta conta?')
        if(r == true){
            API.post("/reports/banir", {usuario: id}, tokens)
            .then(res => {
                window.location.reload();
            })
            .catch(err =>{
                console.log(err)
            })
        }
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
                    <h1 className="title-filter">FILTRO DE REPORTES:</h1>
                    <form onSubmit={e=>filtrarReportes(e, 0)}>
                        <TextInput
                            label="Nome do usuário reportado"
                            onChange={e => setNome(e.target.value)}
                        />
                        <Button className="subbmit-filtros" type="submmit">Aplicar filtro</Button>
                    </form>
                </div>
            </Modal>
        </div>
        <div className="reqs-component">
            <Collection className="cltn-reqs">
                {reportes &&
                    reportes.map(report => 
                    {
                        var style = {}

                        if(report.contagem >=3) style.color='red'
                        
                        return( 
                        <CollectionItem key={report._id} className="cltni-reqs">
                            <div className="itens-cltn">
                                    <div className="animal-name">
                                        <h3 className="title-cltn"> Quant. de reportes: </h3>
                                        <h1 style={style} className="name-cltn">{report.contagem}</h1>
                                    </div>
                                <div className="animal-name">
                                    <h3 className="title-cltn"> Denunciado: </h3>
                                    <h1 className="name-cltn">{report.usuario.nome}</h1>
                                </div>
                                <div className="animal-name">
                                    <h3 className="title-cltn"> Apontador: </h3>
                                    <h1 className="name-cltn">{report.fonte.nome}</h1>
                                </div>
                                {report.animal &&
                                    <div className="animal-name">
                                        <h3 className="title-cltn"> Animal reportado: </h3>
                                        <h1 className="name-cltn">{report.animal.nome}</h1>
                                    </div>
                                }
                                <Button
                                    onClick={e=>banir(e, report.usuario._id)}
                                    className="btn-banir"
                                >
                                    <MdReport className="icon-edited"/>
                                    BANIR
                                </Button>
                            </div>
                        </CollectionItem>
                    )})
                }
            </Collection>
        </div>
    </>
    );
}

export default Reports;