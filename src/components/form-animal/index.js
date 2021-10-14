import 'materialize-css';
import { TextInput, Textarea, Button, Icon, Select, Modal } from 'react-materialize';
import { GiHealthNormal} from 'react-icons/gi';
import { ImCross } from 'react-icons/im';
import { useHistory } from 'react-router-dom';
import React, {useState} from "react";
import './style.css';
import API from '../../api/'

function FormPessoa (){
    
    return(
    <div id="form-areas">
        <form id="form-area">
        <h3 className="title-cadastrar-pessoa">CADASTRAR ANIMAL</h3>
            <TextInput            
                label="Nome do animal*"
                className="campo-form-pessoa"
            />
            <Select
                className="campo-form-pessoa"
                multiple={false}
                onChange={function noRefCheck(){}}
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
                    Espécie do animal *
                </option>
                <option value="1">
                    Cão
                </option>
                <option value="2">
                    Gato
                </option>
            </Select>
            
            <TextInput             
                label="Pelagem *"
                type="text"
                className="campo-form-pessoa"
            />
            <Textarea
                data-length={120}
                label="Observações"
                className="campo-form-pessoa"
            />

            <div className="center upload-area-animal">

                <label to="file-upload" className="custom-file-upload-animal">
                    <Icon className="icon-file">download</Icon> 
                        Foto Animal 1
                </label>
                <input id="file-upload" type="file" />    

                <label to="file-upload" className="custom-file-upload-animal">
                    <Icon className="icon-file">download</Icon> 
                        Foto Animal 2
                </label>
                <input id="file-upload" type="file" />  

                <label to="file-upload" className="custom-file-upload-animal">
                    <Icon className="icon-file">download</Icon> 
                        Foto Animal 3
                </label>
                <input id="file-upload" type="file" /> 
            </div>

            <Modal
                actions={[
                    <Button className="close-modal"modal="close" node="button" ><ImCross className="icon-health" /></Button>
                ]}
                bottomSheet={false}
                fixedFooter={false}
                id="Modal-10"
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
                trigger={<Button node="button" className="btn-health"><GiHealthNormal/> Histórico de Saúde</Button>}
                >
                    <div className="modal-health">
                        <form>
                            <h3 className="title-cadastrar-pessoa">HISTÓRICO DE SAÚDE</h3>
                            <Select
                                className="campo-form-pessoa"
                                multiple={false}
                                onChange={function noRefCheck(){}}
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
                                    Vacinas *
                                </option>
                                <option value="1">
                                    Integral
                                </option>
                                <option value="2">
                                    Parcial
                                </option>
                                <option value="3">
                                    Não Vacinado
                                </option>
                            </Select>
                            <Select
                                className="campo-form-pessoa"
                                multiple={false}
                                onChange={function noRefCheck(){}}
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
                                    Deficiência
                                </option>
                                <option value="1">
                                    Sim
                                </option>
                                <option value="2">
                                    Não
                                </option>
                            </Select>
                            <TextInput            
                                label="Doenças "
                                className="campo-form-pessoa"
                            />
                            <TextInput            
                                label="Alergias"
                                className="campo-form-pessoa"
                            />
                            <Textarea
                                data-length={120}
                                label="Observações"
                                className="campo-form-pessoa"
                            />
                            <div className="center">
                                <Button
                                    className="btn-submit-health"
                                    node="button"
                                    type="submit"
                                    waves="light"
                                >
                                    Enviar
                                    <Icon left>
                                        send
                                    </Icon>
                                </Button>
                            </div>
                        </form>
                    </div>
            </Modal>

            <div className="btn-area-cadPessoa">
                <Button
                    className="btn-submit-form"
                    node="button"
                    type="submit"
                    waves="light"
                >
                    Cadastrar
                    <Icon left>
                        send
                    </Icon>
                </Button>
            </div>
        </form>
    </div>
    );
}

export default FormPessoa;