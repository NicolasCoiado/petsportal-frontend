import React from "react";
import { Modal, Button, TextInput, Icon, Select, Textarea} from 'react-materialize';
import { ImCross } from 'react-icons/im';
import './style.css'

function EventosONG ({eventos}){
    return(
        <div className="cards-eventos">
            {eventos.map((evento)=>(
                <Modal
                    actions={[
                        <Button className="close-modal" flat modal="close" node="button"><ImCross /></Button>
                    ]}
                    bottomSheet={false}
                    fixedFooter={false}
                    header="Edição de Eventos:"
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
                        <div className="card-eventos" key={evento._id}>
                            <img className="img-evento" src={evento.banner} alt="BannerEvento"/>
                            <h1 className="title-evento">{evento.nome}</h1>
                            <p className="p-evento">{evento.observacao} </p>
                        </div>
                    }
                    >
                    <form className="form-editar">
                            <TextInput
                                label="Nome do Evento" 
                                type="text"
                            />
                            <TextInput
                                label="Local do Evento" 
                                type="text"
                            />
                            <h1>
                                Data e Horário do Evento
                            </h1>
                            <TextInput               
                                type="datetime-local"
                            />
                            <Textarea
                                data-length={120}
                                label="Observações"
                            />
                            <Select
                                className="campo-form-pessoa"
                                multiple={false}
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
                            <p className="paragraph-cadastrar">A arte de divulgação deve possuir as dimenções de 1920px (largura) X 300px (altura).</p>
                            <div className="center upload-area-banner">
                                <label htmlFor="file-upload" className="custom-file-upload-banner">
                                    <Icon className="icon-file">download</Icon> 
                                        Banner de divulgação
                                </label>
                                <input id="file-upload"type="file" />    
                            </div>
                            <div className="center">
                                <Button
                                    node="button"
                                    type="submit"
                                    waves="light"
                                    className="submmit-edit"
                                >
                                    <Icon left>
                                        send
                                    </Icon>
                                    Enviar
                                </Button>
                            </div>
                        </form>
                </Modal>
            ))}
        </div>
    );
}

export default EventosONG;