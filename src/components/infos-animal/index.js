import React, {useState, useEffect} from "react";
import {useParams, Link} from "react-router-dom";
import ViewerIMG from "../viewer-img";
import { ImCross } from 'react-icons/im';
import { Button, Icon, Modal, TextInput, Preloader, Select, Textarea} from 'react-materialize';
import API from '../../api/'

function InfosAnimal (){

    const [animal, setAnimal] = useState('');
    const [me, setMe] = useState('');

    const [nome, setNome] = useState('');
    const [especie, setEspecie] = useState('');
    const [pelagem, setPelagem] = useState('');
    const [porte, setPorte] = useState('');
    const [idade, setIdade] = useState('');
    const [observacao, setObservacao] = useState('');
    const [vacinas, setVacinas] = useState('');
    const [doencas, setDoencas] = useState('');
    const [alergias, setAlergias] = useState('');
    const [deficiencias, setDeficiencias] = useState('');

    const { id } = useParams()

    const porteSwitch = porte => {
        switch (porte){
            case 'p':
                return 'Pequeno'
            case 'pm':
                return 'Pequeno-Médio'
            case 'm:':
                return 'Médio'
            case 'mg:':
                return 'Médio-Grande'
            case 'g:':
                return 'Grande'
            default: 
                return "Não especificado"
        }
    }

    const especieSwitch = especie =>{
        switch(especie){
            case 'cao':
                return 'Cão'
            case 'gato':
                return 'Gato'
            default:
                return'ERRO AO CARREGAR ESPÉCIE!'
        }
    }

    useEffect(() => {
        API.post(`/animals/${id}`, {
            id : id
        }, {
            headers: { Authorization : 'Bearer ' + window.localStorage.getItem('token')}
        })
        .then(res => {
            console.log(res.data)
            setAnimal(res.data.animal)
            setMe(res.data.me)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return(
        <div className="Animal-Component">
            {animal &&
                <div id="upload-image">
                    <ViewerIMG uploadUrl={animal.foto}/>

                    {me &&( 
                        <>
                            <label htmlFor="file-upload" className="custom-file-upload-perfil">
                            <Icon className="icon-file">download</Icon> 
                                Upload imagem
                            </label>
                            <input  id="file-upload" type="file" /> 
                        </>
                    )}

                </div> 
            }
            {animal
            ?
                me
                ?
                <>
                    <div className="campos-info">
                        <p className="campo-info"> Nome: {animal.nome}</p>
                        <p className="campo-info"> Espécie: {especieSwitch(animal.especie)}</p>
                        <p className="campo-info"> Pelagem: {animal.pelagem}</p>
                        <p className="campo-info"> Porte: {porteSwitch(animal.porte)}</p>
                        <p className="campo-info"> Idade: {animal.idade} ano(s)</p>
                        <p className="campo-info"> Observação: {animal.observacao || 'Nenhuma.'}</p>
                        <p className="campo-info"> Vacinas: {animal.vacinas}</p>
                        <p className="campo-info"> Doenças: {animal.doencas || 'Nenhuma.'}</p>
                        <p className="campo-info"> Alergias: {animal.alergias || 'Nenhuma.'}</p>
                        <p className="campo-info"> Deficiências: {animal.deficiencias || 'Nenhuma.'}</p>
                    </div>
                    <div className="center">
                            <Modal
                                actions={[
                                    <Button className="close-modal" flat modal="close" node="button"><ImCross /></Button>
                                ]}
                                bottomSheet={false}
                                fixedFooter={false}
                                header="Editar animal"
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
                                trigger={<Button node="button">Editar</Button>}
                                >
                                <form className="form-editar">
                                    <TextInput            
                                        label="Nome do animal*"
                                        className="campo-form-pessoa"
                                        onChange={e => setNome (e.target.value)}
                                    />
                                    <Select
                                        className="campo-form-pessoa"
                                        multiple={false}
                                        onChange={e => {
                                            setEspecie (e.target.value) 
                                            }
                                        }
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
                                        <option value="cao">
                                            Cão
                                        </option>
                                        <option value="gato">
                                            Gato
                                        </option>
                                    </Select>

                                    <Select
                                        className="campo-form-pessoa"
                                        multiple={false}
                                        onChange={e => {
                                            setPorte (e.target.value) 
                                            }
                                        }
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
                                            Porte *
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
                                    <TextInput             
                                        label="Idade"
                                        type="number"
                                        className="campo-form-pessoa"
                                        onChange={e => setIdade (e.target.value)}
                                    />
                                    <TextInput             
                                        label="Pelagem *"
                                        type="text"
                                        className="campo-form-pessoa"
                                        onChange={e => setPelagem (e.target.value)}
                                    />

                                    <Select
                                        className="campo-form-pessoa"
                                        multiple={false}
                                        onChange={e => {
                                            setVacinas (e.target.value) 
                                            }
                                        }
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
                                        <option value="integral">
                                            Integral
                                        </option>
                                        <option value="parcial">
                                            Parcial
                                        </option>
                                        <option value="nao_vacinado">
                                            Não Vacinado
                                        </option>
                                    </Select>      
                                    <TextInput             
                                        label="Doenças"
                                        type="text"
                                        className="campo-form-pessoa"
                                        onChange={e => setDoencas (e.target.value)}
                                    />
                                    <TextInput             
                                        label="Alergias"
                                        type="text"
                                        className="campo-form-pessoa"
                                        onChange={e => setAlergias (e.target.value)}
                                    />
                                    <TextInput             
                                        label="Deficiências"
                                        type="text"
                                        className="campo-form-pessoa"
                                        onChange={e => setDeficiencias (e.target.value)}
                                    />

                                    <Textarea
                                        data-length={120}
                                        label="Observações"
                                        className="campo-form-pessoa"
                                        onChange={e => setObservacao (e.target.value)}
                                    />
                                </form>
                            </Modal>
                            <Button
                                node="button"
                                style={{
                                marginRight: '5px'
                                }}
                                waves="light"
                            >
                                Excluir
                            </Button>
                        </div>
                </>    
                :
                    <div className="campos-info">
                        <p className="campo-info"> Nome: {animal.nome}</p>
                        <p className="campo-info"> Espécie: {especieSwitch(animal.especie)}</p>
                        <p className="campo-info"> Pelagem: {animal.pelagem}</p>
                        <p className="campo-info"> Porte: {porteSwitch(animal.porte)}</p>
                        <p className="campo-info"> Idade: {animal.idade} ano(s)</p>
                        <p className="campo-info"> Observação: {animal.observacao || 'Nenhuma.'}</p>
                        <p className="campo-info"> Vacinas: {animal.vacinas}</p>
                        <p className="campo-info"> Doenças: {animal.doencas || 'Nenhuma.'}</p>
                        <p className="campo-info"> Alergias: {animal.alergias || 'Nenhuma.'}</p>
                        <p className="campo-info"> Deficiências: {animal.deficiencias || 'Nenhuma.'}</p>
                        <Link to={'/perfil/'+animal.responsavel._id}>
                            <ViewerIMG uploadUrl={animal.responsavel.imagem}/>
                        </Link>
                    </div>
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

export default InfosAnimal;