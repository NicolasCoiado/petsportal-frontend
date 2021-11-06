import React, { useEffect, useState} from "react";
import {useParams, useHistory} from 'react-router-dom'
import {Preloader, Icon, Modal, Button, TextInput, Textarea, Select } from 'react-materialize';
import { ImCross } from 'react-icons/im';
import { MdEdit } from 'react-icons/md';
import ViewerEvento from '../viewer-evento/'
import API from '../../api';
import './style.css';

function InfosEvento(){

    const { id } = useParams()

    const [evento, setEvento] = useState('');
    const [me, setMe] = useState('');

    const [nome, setNome] = useState('');
    const [local, setLocal] = useState('');
    const [data, setData] = useState('');
    const [observacao, setObservacao] = useState('');
    const [especies, setEspecies] = useState('geral');

    const history = useHistory();

    useEffect(() => {
        API.post(`/events/${id}`, {
            id : id
        }, {
            headers: { Authorization : 'Bearer ' + window.localStorage.getItem('token')}
        })
        .then(res => {
            console.log(res.data)
            setEvento(res.data.evento)

            setNome(res.data.evento.nome)
            setLocal(res.data.evento.local)
            setData(res.data.evento.data)
            setObservacao(res.data.evento.observacao)
            setEspecies(res.data.evento.especies)

            setMe(res.data.me)
            console.log(res.data.me)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    function handleUploadEvento (e){
        let ImgEvento = new FormData();
        let imagem = e.target.files[0]
        ImgEvento.append('banner', imagem, imagem.name)
        ImgEvento.append('evento', id)
        
        API.post("/events/edit/foto", ImgEvento, {
            headers: {
              'accept': 'application/json',
              'Content-Type': `multipart/form-data; boundary=${ImgEvento._boundary}`,
            Authorization : 'Bearer ' + window.localStorage.getItem('token')
            }
          })
          
        .then(res => {
            console.log("Deu bom")
            window.location.reload();
    
        })
        .catch(err =>{
            console.log(err)
        })
    }

    const handleSubmitEvento = (e ) =>{

        e.preventDefault();
        let evento = {
            evento: id,
            nome,
            local,
            data,
            especies,
            observacao
        }

        console.log(evento)

        API.post("/events/edit", evento, {
            headers: {
                'Authorization' : 'Bearer ' + window.localStorage.getItem('token'),
            }
          })
          
            .then(res => {
                console.log("Deu bom")
                window.location.reload()
            })
            .catch(err =>{
                console.log(err)       
            })
        }

    return(
        <div className="Eventos-Component">
            {evento
            ?
                me 
                ?
                <>
                    <div className="center">
                        <ViewerEvento uploadUrl={evento.banner}/>
                        <label htmlFor="file-upload" className="custom-file-upload-evento">
                            <Icon className="icon-file">download</Icon> 
                                Upload imagem
                        </label>
                        <input onChange={e => handleUploadEvento(e)} id="file-upload" type="file" />  
                    </div>
                    <div className="infos">
                        <div className="campos-info-evento">
                            <p className="campo-info-evento"> Nome:  {evento.nome}</p>
                            <p className="campo-info-evento"> Data:  {evento.data.slice(0,-8)}</p>
                            <p className="campo-info-evento"> Espécies:  {evento.especies}</p>
                            <p className="campo-info-evento"> Local:  {evento.local}</p>
                            <p className="campo-info-evento"> Observacao:  {evento.observacao}</p>
                            <p className="campo-info-evento"> Editado:  {evento.editado}</p>
                            <p className="campo-info-evento"> Contato da ONG:  {evento.contato}</p>
                            <div className="center">
                                <Modal 
                                    actions={[
                                        <Button className="close-modal" flat modal="close" node="button"> <ImCross /> </Button>
                                    ]}
                                    bottomSheet={false}
                                    fixedFooter={false}
                                    header="Editar informações do evento:"
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
                                    trigger={
                                        <Button className="btn-editar-infos-evento" node="button">
                                            <MdEdit className="icon-editar"/>Editar
                                        </Button>    
                                    }
                                    >
                                        <form onSubmit={handleSubmitEvento} className="form-editar">
                                            <TextInput
                                                label="Nome do evento" 
                                                type="text"
                                                defaultValue={evento.nome}
                                                onChange={e => setNome (e.target.value)}
                                            />
                                            <TextInput            
                                                label="Local do evento"
                                                defaultValue={evento.local}
                                                onChange={e => setLocal (e.target.value)}
                                            />
                                            <h1>
                                                Data e Horário do Evento
                                            </h1>
                                            <TextInput               
                                                type="datetime-local"
                                                defaultValue={evento.data.slice(0, -8)}
                                                onChange={e => setData (e.target.value)}
                                            />
                                            <Textarea
                                                data-length={120}
                                                label="Observações"
                                                defaultValue={evento.observacao}
                                                onChange={e => setObservacao(e.target.value)}
                                            />
                                            <Select
                                                className="campo-form-pessoa"
                                                multiple={false}
                                                onChange={e => setEspecies (e.target.value)}
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
                                                defaultValue={evento.especies}
                                            >
                                                <option
                                                    value="geral"
                                                >
                                                    Geral
                                                </option>
                                                <option
                                                    value="cg"
                                                >
                                                    Cães e Gatos
                                                </option>
                                                <option value="c">
                                                    Somente cães
                                                </option>
                                                <option value="g">
                                                    Somente gatos
                                                </option>
                                            </Select>
                                            <div className="center">
                                                <Button
                                                    node="button"
                                                    type="submit"
                                                    waves="light"
                                                    className="submmit-edit"
                                                >
                                                    Enviar
                                                    <Icon left>
                                                        send
                                                    </Icon>
                                                </Button>
                                            </div>
                                        </form>
                                </Modal>
                            </div>
                        </div>
                    </div>
                    </>
                :
                <>
                    <div className="center">
                        <ViewerEvento uploadUrl={evento.banner}/>  
                    </div>
                    <div className="infos">
                        <div className="campos-info-evento">
                            <p className="campo-info-evento"> Nome:  {evento.nome}</p>
                            <p className="campo-info-evento"> Data:  {evento.data.slice(0,-8)}</p>
                            <p className="campo-info-evento"> Espécies:  {evento.especies}</p>
                            <p className="campo-info-evento"> Local:  {evento.local}</p>
                            <p className="campo-info-evento"> Observacao:  {evento.observacao}</p>
                            <p className="campo-info-evento"> Editado:  {evento.editado}</p>
                            <p className="campo-info-evento"> Contato da ONG:  {evento.contato}</p>
                        </div>
                    </div>
                </>
            :
                <div className="center">
                    <Preloader
                        active
                        color="green"
                        flashing={false}
                        size="big"
                    />
                </div>
            }
        </div>
    );
}

export default InfosEvento;