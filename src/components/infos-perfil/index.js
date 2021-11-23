import ViewerAnimal from '../viewer-animal/'
import ViewerIMG from '../viewer-img/';
import EventosONG from '../eventos-ong';
import { Button, Icon, Modal, TextInput, Preloader, Textarea } from 'react-materialize';
import { MdEdit } from 'react-icons/md';
import React, { useState, useEffect} from "react";
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import FormData from 'form-data'
import { ImCross } from 'react-icons/im';
import API from '../../api/';
import './style.css';


function InfosPerfil (){
    
    const [user, setUser] = useState();
    const [animais, setAnimais] = useState();
    const [eventos, setEventos] = useState();

    const [usuario, setUsuario] = useState();
    const [texto, setTexto] = useState();

    const { id } = useParams()

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [nasc, setNasc] = useState('');
    const [endereco, setEndereco] = useState('');
    const [tel1, setTel1] = useState('');
    const [tel2, setTel2] = useState('');
    const [desc, setDesc] = useState('');

    const [me, setMe] = useState('');

    useEffect(() => {
        API.post(`/user/read/`, {
            id
        }, {
            headers: { Authorization : 'Bearer ' + window.localStorage.getItem('token')}
        })
        .then(res => {
            setUser(res.data.user)
            setAnimais(res.data.animais)
            setUsuario(res.data.user._id)
            setMe(res.data.me)
            if(res.data.eventos) setEventos(res.data.eventos)
        })
        .catch(err => {
            console.log(err)
        })
    }, [id])

    function handleUpload (e){
        let ImgPerfil = new FormData();
        let imagem = e.target.files[0]
        ImgPerfil.append('img', imagem, imagem.name)

        API.post("/user/edit/foto", ImgPerfil, {
            headers: {
              'accept': 'application/json',
              'Content-Type': `multipart/form-data; boundary=${ImgPerfil._boundary}`,
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
    
    
    const handleSubmitNormal = (e) =>{
        e.preventDefault();
        API.post("/user/edit/pessoaFisica",{
            nome,
            cpf,
            nasc,
            endereco,
            tel1,
            tel2,
            desc
        }, {
            headers: {
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

    const Reportar = (e) =>{
        e.preventDefault();

        if(texto){

            var r = window.confirm('Tem certeza que deseja fazer logoff')

            if(r == true){
                API.post("/reports/criar",{
                    usuario,
                    texto
                }, {
                    headers: {
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
            
        }else{
            window.alert('ERRO! O formulário de reporte não pode ser vazio!')
        }
    }

    const handleSubmitONG= (e) =>{
        e.preventDefault();
        API.post("/user/edit/ONG",{
            nome,
            cpf,
            nasc,
            endereco,
            tel1,
            tel2,
            desc
        }, {
            headers: {
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

    return(
    <>  {me
        ? //Se o usuário for o dono do perfil...
        <div id="infos-perfil"> {/* DIV QUE ENGLOBA INFORMAÇÕES E EDIÇÃO DELAS*/ }
            {user && //Somente se usuário carregar...
                <div id="upload-image"> {/* DIV QUE ENGLOBA A ATUALIZAÇÃO DE IMAGENS*/}
                    <ViewerIMG uploadUrl={user.imagem}/>
                    <label htmlFor="file-upload" className="custom-file-upload-perfil">
                        <Icon className="icon-file">download</Icon> 
                            Upload imagem
                    </label>
                    <input onChange={e => handleUpload (e)} id="file-upload" type="file" />  
                </div>  
            }
            {user //Quando usuário carregar...
            ?
                user.tipo==='nrm' || user.tipo==='adm' //Se o usuário for normal ou ADM
                    ?
                        <div className="campos-info">
                            <p className="campo-info">Nome: {user.nome}</p>
                            <p className="campo-info">Email: {user.email}</p>
                            <p className="campo-info">Data de nascimento: {user.fisico.nasc.toString().slice(0, 10)}</p>
                            <p className="campo-info">CPF: {user.fisico.cpf}</p>
                            <p className="campo-info">Endereço: {user.endereco}</p>
                            <p className="campo-info">Telefone 1: ({user.ddd1}) {user.tel1}</p>
                            <p className="campo-info">Telefone 2: ({user.ddd2}) {user.tel2}</p>
                            <p className="campo-info">Sobre você: {user.fisico.desc}</p>
                        </div>
                    : //Se o usuário for uma ong...
                    <div className="campos-info">
                        <p className="campo-info">Nome: {user.nome}</p>
                        <p className="campo-info">Email: {user.email}</p>
                        <p className="campo-info">Endereço: {user.endereco}</p>
                        <p className="campo-info">Telefone 1: ({user.ddd1}) {user.tel1}</p>
                        <p className="campo-info">Telefone 2: ({user.ddd2}) {user.tel2}</p>
                        <p className="campo-info">Sobre você: {user.ong.desc}</p>
                        {user.ong.desc==='true'
                        ? //Se a ong for verificada
                            <p className="campo-info">Verificado: SIM </p>
                        : //Se a ong não for verificada
                            <p className="campo-info">Verificado: NÃO</p>
                        }
                    </div>
            : //Enquanto o usuário não carregar...
                <div className="center">
                    <Preloader
                        className="preloader"
                        active
                        color="green"
                        flashing={false}
                    />
                </div>
            }
            <div className="center">
            {user  //Quando usuário carregar...
            ?
                (user.tipo==='nrm' || user.tipo==='adm') //Se o usuário for normal ou ADM
                ?
                    <Modal // Modal responsável pela edição de usuários normais e adms
                        actions={[
                            <Button className="close-modal" flat modal="close" node="button"><ImCross /></Button>
                        ]}
                        bottomSheet={false}
                        fixedFooter={false}
                        header="Editar suas informações"
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
                            <Button className="btn-editar-infos" node="button">
                               <MdEdit className="icon-editar"/>Editar
                            </Button>    
                        }
                        >
                            <form className="form-editar" onSubmit={handleSubmitNormal}>
                                <TextInput
                                    label="Nome completo" 
                                    type="text"
                                    onChange={e => setNome (e.target.value)}
                                />
                                <TextInput
                                    label="CPF" 
                                    type="text"
                                    onChange={e => setCpf (e.target.value)}
                                />
                                <TextInput
                                    label="Data de Nascimento" 
                                    type="date"
                                    onChange={e => setNasc(e.target.value)}
                                />
                                <TextInput
                                    label="Endereço" 
                                    type="text"
                                    onChange={e => setEndereco (e.target.value)}
                                />
                                <TextInput
                                    label="Telefone 1" 
                                    type="number"
                                    onChange={e => setTel1 (e.target.value)}
                                />
                                <TextInput
                                    label="Telefone 2" 
                                    type="number"
                                    onChange={e => setTel2 (e.target.value)}
                                />
                                <TextInput
                                    label="Sobre mim..." 
                                    type="text"
                                    onChange={e => setDesc (e.target.value)}
                                />
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
                : //Se o usuário for ONG
                    <Modal // Modal responsável pela edição de ONGs
                        actions={[
                            <Button className="close-modal" flat modal="close" node="button"><ImCross /></Button>
                        ]}
                        bottomSheet={false}
                        fixedFooter={false}
                        header="Editar suas informações"
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
                            <Button className="btn-editar-infos" node="button">
                               <MdEdit className="icon-editar"/>Editar
                            </Button>         
                        }
                    >
                        <form className="form-editar" onSubmit={handleSubmitONG}>
                            <TextInput
                                label="Nome completo" 
                                type="text"
                                onChange={e => setNome (e.target.value)}
                            />
                            <TextInput
                                label="Endereço" 
                                type="text"
                                onChange={e => setEndereco (e.target.value)}
                            />
                            <TextInput
                                label="Telefone 1" 
                                type="number"
                                onChange={e => setTel1 (e.target.value)}
                            />
                            <TextInput
                                label="Telefone 2" 
                                type="number"
                                onChange={e => setTel2 (e.target.value)}
                            />
                            <TextInput
                                label="Sobre mim..." 
                                type="text"
                                onChange={e => setDesc (e.target.value)}
                            />
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
            ://Enquanto a ONG não carrega
            <div className="center">
                <Preloader
                    className="preloader"
                    active
                    color="green"
                    flashing={false}
                />
            </div>
            }  
            </div>
        </div>
        ://Se o usuário não for o dono do perfil
            user && (
                <div className="perfil-3°">
                    <ViewerIMG uploadUrl={user.imagem}/>
                    <div className="campos-info-3°">
                        <p className="campo-info">Nome: {user.nome}</p>
                        {user.tipo==="ong"
                        ?
                            <p className="campo-info">Sobre: {user.ong.desc}</p>
                        :
                            <p className="campo-info">Sobre: {user.fisico.desc}</p>
                        }
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
                            trigger={<Button className="btn-reportar" node="button"> <Icon left>report</Icon> Reportar</Button>}
                            >
                            <form className="form-report" onSubmit={Reportar}>
                                <Textarea
                                    label="Motivo do reporte"
                                    onChange={e => setTexto (e.target.value)}
                                />
                                <div className="center">
                                    <Button
                                        type="submit"
                                        className="btn-mais"
                                    >
                                        <Icon left>send</Icon>
                                        Enviar reporte
                                    </Button>
                                </div>
                            </form>
                        </Modal>
                    </div>
                </div>
            )
        }
        {me
        ?
            <div className="btns-propostas">
                <Link to='/propostas/'>
                    <Button
                        className="btn-propostas"
                        node="button"
                        waves="light"
                        //TODO: COLOQUE UM íCONE AQUI
                    >
                        Propostas de adoções
                        
                        <Icon left>
                        </Icon>
                    </Button>
                </Link>
                <Link to='/confirmados'>
                    <Button
                        className="btn-propostas"
                        node="button"
                        waves="light"
                    >
                        Propostas de adoções confirmadas
                        <Icon left>
                          
                        </Icon>
                    </Button>
                </Link>
            </div>
        :
            <></>
        }
        <div className="animais-area"> {/* Div que engloba os animais cadastrados, para adoção pelo usuário*/}
            <h3 className="title-animais">Animais para adoção:</h3>
                <div className="animais-display">
                    {
                        animais //Quando animais carregarem
                        ?
                            animais.map(animal => (
                            <Link key={animal._id}to={'/animal/'+animal._id}>
                                <ViewerAnimal  animal={animal}/>
                            </Link>
                        ))
                        : //Enquanto os animais não carregam
                        <Preloader
                            active
                            color="green"
                            flashing={false}
                            size="big"
                        />
                    }
                </div>  
        </div>

        {user &&
            user.tipo==='ong' 
            ?
                eventos &&
                    <EventosONG eventos={eventos}/> 
            :
                <></>
        }
    </>
    );
}

export default InfosPerfil;