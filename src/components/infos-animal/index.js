import React, {useState, useEffect} from "react";
import {useParams, Link, useHistory} from "react-router-dom";
import ViewerIMG from "../viewer-img";
import { ImCross } from 'react-icons/im';
import { MdEdit } from 'react-icons/md';
import { Button, Icon, Modal, TextInput, Preloader, Select, Textarea} from 'react-materialize';
import API from '../../api/'
import './style.css'

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
    const [obsAdocao, setobsAdocao] = useState('');

    const { id } = useParams()

    const history = useHistory();

    const valorSwitch = campo => {
        switch (campo){
            case 'nome':
                return nome
            case 'especie':
                return especie
            case 'pelagem':
                return pelagem
            case 'porte':
                return porte
            case 'idade':
                return idade
            case 'vacinas':
                return vacinas
            case 'doencas':
                return doencas
            case 'alergias':
                return alergias
            case 'deficiencias':
                return deficiencias
            case 'observacao':
                return observacao
            default:
                return''
        }
    }

    const porteSwitch = porte => {
        switch (porte){
            case 'p':
                return 'Pequeno'
            case 'pm':
                return 'Pequeno-Médio'
            case 'm:':
                return 'Médio'
            case 'mg':
                return 'Médio-Grande'
            case 'g':
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
            console.log(res.data.animal)
            setAnimal(res.data.animal)
            setMe(res.data.me)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    function handleUpload (e){
        let ImgAnimal = new FormData();
        let imagem = e.target.files[0]
        ImgAnimal.append('img', imagem, imagem.name)
        ImgAnimal.append('id', id)

        API.post("/animals/edit/foto", ImgAnimal, {
            headers: {
              'accept': 'application/json',
              'Content-Type': `multipart/form-data; boundary=${ImgAnimal._boundary}`,
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

    const handleSubmitAnimal = (e, campo) =>{    
        e.preventDefault();
        API.post("/animals/edit/"+campo,{
            id,
            valor: valorSwitch(campo)
        }, {
            headers: {
                Authorization : 'Bearer ' + window.localStorage.getItem('token')
            }
          })
          
        .then(res => {
            console.log("Deu bom");
            window.location.reload();
    
        })
        .catch(err =>{
            console.log(err)
        })
    }
    
    function deleteAnimal(){
        API.post("/animals/delete", {'animal': id},{
            headers: {
            Authorization : 'Bearer ' + window.localStorage.getItem('token')
        }
    })

        .then(res => {
            console.log("Deu bom")
            history.push(`/perfil/${animal.responsavel._id}`);
        })
        .catch(err =>{
            console.log(err)
        })
    }

    const requisitarAdocao = (e) =>{
        e.preventDefault();

        let adocao = {
            doador : animal.responsavel,
            animal : animal._id,
            observacao :obsAdocao,
        }

        API.post("/animals/adocao/pedido", adocao, 
            { headers: 
                { Authorization : 'Bearer ' + window.localStorage.getItem('token')}
            } 
        )
        
        .then(res => {
            console.log("Deu bom")
            //console.log(user);
            console.log(res);
            //TODO: Fazer mensagem de adoção mamaco
            history.push("/");
        })
        .catch(err =>{
            console.log(err)
            //console.log(user)
        })
    }

    return(
        <div className="Animal-Component">
            {animal &&
            <>  <div id="upload-image">
                <ViewerIMG uploadUrl={animal.foto}/>
                    {me &&( 
                        <>
                            <label htmlFor="file-upload" className="custom-file-upload-perfil">
                            <Icon className="icon-file">download</Icon> 
                                Upload imagem
                            </label>
                            <input onChange={handleUpload} id="file-upload" type="file" /> 
                        </>
                    )}

                </div> 
            </>
            }
            {animal
            ?
                me
                ?
                <>
                    <div className="infos">
                        <div className="campos-info-animal">
                            <p className="campo-info-animal"> Nome: {animal.nome} </p>
                            <p className="campo-info-animal"> Espécie: {especieSwitch(animal.especie)}</p>
                            <p className="campo-info-animal"> Pelagem: {animal.pelagem}</p>
                            <p className="campo-info-animal"> Porte: {porteSwitch(animal.porte)}</p>
                            <p className="campo-info-animal"> Idade: {animal.idade} ano(s)</p>
                            <p className="campo-info-animal"> Vacinas: {animal.vacinas}</p>
                            <p className="campo-info-animal"> Doenças: {animal.doencas || 'Nenhuma.'}</p>
                            <p className="campo-info-animal"> Alergias: {animal.alergias || 'Nenhuma.'}</p>
                            <p className="campo-info-animal"> Deficiências: {animal.deficiencias || 'Nenhuma.'}</p>
                            <p className="campo-info-animal"> Observação: {animal.observacao || 'Nenhuma.'}</p>
                        </div>
                        <div className="edits-info">
                            <Modal
                                actions={[
                                    <Button className="close-modal" flat modal="close" node="button"><ImCross /></Button>
                                ]}
                                bottomSheet={false}
                                fixedFooter={false}
                                header="Editar nome"
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
                                trigger={<Button floating className="btn-edit-animais" node="button"><MdEdit/></Button>}
                                >
                                <form className="form-edit-animal" onSubmit={e=>handleSubmitAnimal(e,'nome')}>
                                    <TextInput            
                                        label="Nome do animal*"
                                        className="campo-form-animal"
                                        onChange={e => setNome (e.target.value)}
                                        defaultValue={animal.nome}
                                    />
                                    <Button
                                        className="btn-submit-form"
                                        node="button"
                                        type="submit"
                                        waves="light"
                                    >
                                        Enviar
                                        <Icon left>
                                            send
                                        </Icon>
                                    </Button>
                                </form>
                            </Modal>

                            <Modal
                                actions={[
                                    <Button className="close-modal" flat modal="close" node="button"><ImCross /></Button>
                                ]}
                                bottomSheet={false}
                                fixedFooter={false}
                                header="Editar espécie"
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
                                trigger={<Button floating className="btn-edit-animais" node="button"><MdEdit/></Button>}
                                >
                                <form className="form-edit-animal" onSubmit={e=>handleSubmitAnimal(e,'especie')}>
                                    <Select
                                        className="campo-form-pessoa"
                                        multiple={false}
                                        onChange={e => {
                                            setEspecie (e.target.value) 
                                            }
                                        }
                                        defaultValue={animal.especie}
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
                                    <Button
                                        className="btn-submit-form"
                                        node="button"
                                        type="submit"
                                        waves="light"
                                    >
                                        Enviar
                                        <Icon left>
                                            send
                                        </Icon>
                                    </Button>
                                </form>
                            </Modal>

                            <Modal
                                actions={[
                                    <Button className="close-modal" flat modal="close" node="button"><ImCross /></Button>
                                ]}
                                bottomSheet={false}
                                fixedFooter={false}
                                header="Editar pelagem"
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
                                trigger={<Button floating className="btn-edit-animais" node="button"><MdEdit/></Button>}
                                >
                                <form className="form-edit-animal" onSubmit={e=>handleSubmitAnimal(e,'pelagem')}>
                                    <TextInput            
                                        label="Pelagem*"
                                        className="campo-form-animal"
                                        onChange={e => setPelagem (e.target.value)}
                                        defaultValue={animal.pelagem}
                                    />
                                    <Button
                                        className="btn-submit-form"
                                        node="button"
                                        type="submit"
                                        waves="light"
                                    >
                                        Enviar
                                        <Icon left>
                                            send
                                        </Icon>
                                    </Button>
                                </form>
                            </Modal>

                            <Modal
                                actions={[
                                    <Button className="close-modal" flat modal="close" node="button"><ImCross /></Button>
                                ]}
                                bottomSheet={false}
                                fixedFooter={false}
                                header="Editar porte"
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
                                trigger={<Button floating className="btn-edit-animais" node="button"><MdEdit/></Button>}
                                >
                                <form className="form-edit-animal" onSubmit={e=>handleSubmitAnimal(e,'porte')}>
                                    <Select
                                        className="campo-form-pessoa"
                                        multiple={false}
                                        onChange={e => {
                                            setPorte (e.target.value) 
                                            }
                                        }
                                        defaultValue={animal.porte}
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
                                    <Button
                                        className="btn-submit-form"
                                        node="button"
                                        type="submit"
                                        waves="light"
                                    >
                                        Enviar
                                        <Icon left>
                                            send
                                        </Icon>
                                    </Button>
                                </form>
                            </Modal>

                            <Modal
                                actions={[
                                    <Button className="close-modal" flat modal="close" node="button"><ImCross /></Button>
                                ]}
                                bottomSheet={false}
                                fixedFooter={false}
                                header="Editar idade"
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
                                trigger={<Button floating className="btn-edit-animais" node="button"><MdEdit/></Button>}
                                >
                                <form className="form-edit-animal" onSubmit={e=>handleSubmitAnimal(e,'idade')}>
                                    <TextInput             
                                        label="Idade"
                                        type="number"
                                        className="campo-form-pessoa"
                                        onChange={e => setIdade (e.target.value)}
                                        defaultValue={animal.idade.toString()}
                                    />
                                    <Button
                                            className="btn-submit-form"
                                            node="button"
                                            type="submit"
                                            waves="light"
                                        >
                                        Enviar
                                        <Icon left>
                                            send
                                        </Icon>
                                    </Button>
                                </form>
                            </Modal>

                            <Modal
                                actions={[
                                    <Button className="close-modal" flat modal="close" node="button"><ImCross /></Button>
                                ]}
                                bottomSheet={false}
                                fixedFooter={false}
                                header="Editar vacinas"
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
                                trigger={<Button floating className="btn-edit-animais" node="button"><MdEdit/></Button>}
                                >
                                <form className="form-edit-animal" onSubmit={e=>handleSubmitAnimal(e,'vacinas')}>
                                    <Select
                                        className="campo-form-pessoa"
                                        multiple={false}
                                        onChange={e => {
                                            setVacinas (e.target.value) 
                                            }
                                        }
                                        defaultValue={animal.vacinas}
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
                                    <Button
                                            className="btn-submit-form"
                                            node="button"
                                            type="submit"
                                            waves="light"
                                        >
                                        Enviar
                                        <Icon left>
                                            send
                                        </Icon>
                                    </Button>
                                </form>
                            </Modal>

                            <Modal
                                actions={[
                                    <Button className="close-modal" flat modal="close" node="button"><ImCross /></Button>
                                ]}
                                bottomSheet={false}
                                fixedFooter={false}
                                header="Editar doenças"
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
                                trigger={<Button floating className="btn-edit-animais" node="button"><MdEdit/></Button>}
                                >
                                <form className="form-edit-animal" onSubmit={e=>handleSubmitAnimal(e,'doencas')}>
                                    <TextInput             
                                        label="Doenças"
                                        type="text"
                                        className="campo-form-pessoa"
                                        onChange={e => setDoencas (e.target.value)}
                                        defaultValue={animal.doencas}
                                    />
                                    <Button
                                            className="btn-submit-form"
                                            node="button"
                                            type="submit"
                                            waves="light"
                                        >
                                        Enviar
                                        <Icon left>
                                            send
                                        </Icon>
                                    </Button>
                                </form>
                            </Modal>

                            <Modal
                                actions={[
                                    <Button className="close-modal" flat modal="close" node="button"><ImCross /></Button>
                                ]}
                                bottomSheet={false}
                                fixedFooter={false}
                                header="Editar alergias"
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
                                trigger={<Button floating className="btn-edit-animais" node="button"><MdEdit/></Button>}
                                >
                                <form className="form-edit-animal" onSubmit={e=>handleSubmitAnimal(e,'alergias')}>
                                    <TextInput             
                                        label="Alergias"
                                        type="text"
                                        className="campo-form-pessoa"
                                        onChange={e => setAlergias (e.target.value)}
                                        defaultValue={animal.alergias}
                                    />
                                    <Button
                                            className="btn-submit-form"
                                            node="button"
                                            type="submit"
                                            waves="light"
                                        >
                                        Enviar
                                        <Icon left>
                                            send
                                        </Icon>
                                    </Button>
                                </form>
                            </Modal>

                            <Modal
                                actions={[
                                    <Button className="close-modal" flat modal="close" node="button"><ImCross /></Button>
                                ]}
                                bottomSheet={false}
                                fixedFooter={false}
                                header="Editar deficiências"
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
                                trigger={<Button floating className="btn-edit-animais" node="button"><MdEdit/></Button>}
                                >
                                <form className="form-edit-animal" onSubmit={e=>handleSubmitAnimal(e,'deficiencias')}>
                                    <TextInput             
                                        label="Deficiências"
                                        type="text"
                                        className="campo-form-pessoa"
                                        onChange={e => setDeficiencias(e.target.value)}
                                        defaultValue={animal.deficiencias}
                                    />
                                    <Button
                                            className="btn-submit-form"
                                            node="button"
                                            type="submit"
                                            waves="light"
                                        >
                                        Enviar
                                        <Icon left>
                                            send
                                        </Icon>
                                    </Button>
                                </form>
                            </Modal>

                            <Modal
                                actions={[
                                    <Button className="close-modal" flat modal="close" node="button"><ImCross /></Button>
                                ]}
                                bottomSheet={false}
                                fixedFooter={false}
                                header="Editar observação"
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
                                trigger={<Button floating className="btn-edit-animais" node="button"><MdEdit/></Button>}
                                >
                                <form className="form-edit-animal" onSubmit={e=>handleSubmitAnimal(e,'observacao')}>
                                    <Textarea
                                        data-length={120}
                                        label="Observações"
                                        className="campo-form-pessoa"
                                        onChange={e => setObservacao (e.target.value)}
                                        defaultValue={animal.observacao}
                                    />
                                    <Button
                                            className="btn-submit-form"
                                            node="button"
                                            type="submit"
                                            waves="light"
                                        >
                                        Enviar
                                        <Icon left>
                                            send
                                        </Icon>
                                    </Button>
                                </form>
                            </Modal>
                        </div>
                    </div>
                    <div className="btn-animal-area">
                        {animal &&
                            <Button
                                className="btn-exclude"
                                onClick={deleteAnimal}
                                node="button"
                                waves="light"
                            >
                                Excluir
                                <Icon left>
                                    delete
                                </Icon>
                            </Button>
                        }
                    </div>
                </>    
                :
                <>
                    <div className="campos-info-animal-3°">
                        <p className="campo-info"> <h1 className="nome-animal">{animal.nome}</h1></p>
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

                    <div className="btns-animal">
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
                            trigger={<Button className="btn-adotar" node="button">DESEJO ADOTAR!</Button>}
                            >
                                <div className="area-txt-adocao">
                                    <h1 className="title-adocao">Convença o doador do animal!</h1>
                                    <p className="p-adocao">Explique abaixo, porque você é um bom adotante, como pretende manter o animal e porque deseja adota-lo, não existe um texto certo, apenas diga a verdade!</p>
                                    <form onSubmit={e => requisitarAdocao(e) }>
                                        <TextInput
                                            placeholder="Sou um bom adotante pois..."
                                            data-length={200}
                                            onChange={e => setobsAdocao(e.target.value)}
                                        />
                                        <div className="center">
                                            <Button
                                                className="btn-submit-adocao"
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
                    </div>

                    <div className="responsavel">
                        <p className="title-responsavel"> Responsável: </p>
                        <Link className="viewer-responsavel" to={'/perfil/'+animal.responsavel._id}>
                            <ViewerIMG uploadUrl={animal.responsavel.imagem}/>
                        </Link>
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

export default InfosAnimal;