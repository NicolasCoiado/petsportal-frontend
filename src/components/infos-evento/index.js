import React, { useEffect, useState} from "react";
import {useParams, useHistory} from 'react-router-dom'
import { Modal, Button, TextInput, Textarea, Select } from 'react-materialize';
import moment from 'moment';
import { ImCross } from 'react-icons/im';
import { MdEdit, MdSend, MdDelete } from 'react-icons/md';
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
            setEvento(res.data.evento)
            setNome(res.data.evento.nome)
            setLocal(res.data.evento.local)
            setData(res.data.evento.data)
            setObservacao(res.data.evento.observacao)
            setEspecies(res.data.evento.especies)
            setMe(res.data.me)
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
        API.post("/events/edit", evento, {
            headers: {
                'Authorization' : 'Bearer ' + window.localStorage.getItem('token'),
            }
          })
          
            .then(res => {
                window.location.reload()
            })
            .catch(err =>{
                console.log(err)       
            })
        }

    const ExcluirEvento = () =>{
        var r = window.confirm('Tem certeza que deseja excluir este evento?')

        if(r == true){
            API.post("admin/validate/eventos/excluir", {evento: evento._id}, {
                headers: {
                    'Authorization' : 'Bearer ' + window.localStorage.getItem('token'),
                }
            })
            
                .then(res => {
                    history.push("/")
                })
                .catch(err =>{
                    console.log(err)       
                    history.push(-1)
                })
        }
    }

    const especiesSwitch = especie => {
        switch (especie){
            case 'geral':
                return 'Geral'
            case 'cg':
                return 'Cães e Gatos'
            case 'g':
                return 'Gatos'
            case 'c:':
                return 'Cães'
            default: 
                return "Não especificado"
        }
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
                                Upload imagem
                        </label>
                        <input onChange={e => handleUploadEvento(e)} id="file-upload" type="file" />  
                    </div>
                    <div className="infos">
                        <div className="campos-info-evento">
                            <p className="campo-info-evento"> Nome:  {evento.nome}</p>
                            <p className="campo-info-evento"> Data:  { moment(evento.data).format('D/MM/YYYY h:mm')}</p>
                            <p className="campo-info-evento"> Espécies: {especiesSwitch(evento.especies)}</p>
                            <p className="campo-info-evento"> Local:  {evento.local}</p>
                            <p className="campo-info-evento"> Observacao:  {evento.observacao}</p>
                            <p className="campo-info-evento"> Contato da ONG:  {evento.contato}</p>
                            {evento.editado
                            ?
                                <p className="campo-info-editado"> Evento já foi editado! </p>
                            : <></>
                            }
                            
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
                                                    <MdSend className="send-icon" />
                                                    Enviar
                                                </Button>
                                            </div>
                                            
                                        </form>
                                </Modal>
                                <Button className="btn-excluir-evento" onClick={ExcluirEvento} node="button">
                                    <MdDelete className="send-icon"/>
                                    Excluir
                                </Button>   
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
                            <p className="campo-info-evento"> <h1 className="nome-animal">{evento.nome}</h1></p>
                            <p className="campo-info-evento"> Data:  { moment(evento.data).format('D/MM/YYYY h:mm')}</p>
                            <p className="campo-info-evento"> Espécies disponíveis:  {especiesSwitch(evento.especies)}</p>
                            <p className="campo-info-evento"> Local:  {evento.local}</p>
                            <p className="campo-info-evento"> Observação:  {evento.observacao}</p>
                            <p className="campo-info-evento"> Contato da ONG:  {evento.contato}</p>
                            {evento.editado
                            ?
                                <p className="campo-info-editado"> Evento já foi editado! </p>
                            : <></>
                            }
                        </div>
                    </div>
                </>
            :
                <></>
            }
        </div>
    );
}

export default InfosEvento;