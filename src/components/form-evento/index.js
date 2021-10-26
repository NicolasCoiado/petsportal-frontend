import React from 'react'
import { TextInput, Textarea, Select, Button, Icon } from 'react-materialize';
import './style.css'

function FormEvento (){
    return(
        <div id="form-areas">
            <form id="form-area" >
                <h3 className="title-cadastrar">Cadastrar Evento</h3>
                <TextInput            
                    label="Local do envento"
                />
                <TextInput               
                    label="Data do evento"
                    type="date"
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
                    value=""
                >
                    <option
                        disabled
                        value=""
                    >
                        Cães e Gatos
                    </option>
                    <option value="cao">
                        Somente cães
                    </option>
                    <option value="gato">
                        Somente gatos
                    </option>
                </Select>
                <Select
                    id="Select-49"
                    multiple
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
                    value={[
                        ''
                    ]}
                    >
                    <option
                        disabled
                        value=""
                    >
                        Espécie disponíveis
                    </option>
                    <option value="1">
                        Option 1
                    </option>
                    <option value="2">
                        Option 2
                    </option>
                    <option value="3">
                        Option 3
                    </option>
                </Select>
                <p className="paragraph-cadastrar">A arte de divulgação deve possuir as dimenções de 1920px (largura) X 300px (altura).</p>
                <div className="center upload-area-banner">
                    <label htmlFor="file-upload" className="custom-file-upload-banner">
                        <Icon className="icon-file">download</Icon> 
                            Banner de divulgação
                    </label>
                    <input id="file-upload" type="file" />    
                </div>
            </form>
        </div>
    );
}

export default FormEvento;