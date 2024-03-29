import 'materialize-css';
import { TextInput, Textarea, Button, Select} from 'react-materialize';
import { MdSend, MdDone } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import React, {useState, useEffect} from "react";
import './style.css';
import API from '../../api/'

function FormPessoa (){
    
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
    const [foto, setFoto] = useState('');

    const [btn, setBtn] = useState('');

    const [id, setId] = useState('');

    const [upload, setUpload] = useState('vazio');

    const history = useHistory();

    useEffect(() => {
        API.post("/getId", {}, {
          headers: { Authorization : 'Bearer ' + window.localStorage.getItem('token')}
          })
          .then(res => {
              setId(res.data.id)
          })
          .catch(err =>{
             console.log(err);
          })
      }, []);

    const handleSubmit = (e) =>{
        e.preventDefault();
        setBtn('clickado');
        let animal = new FormData();
        animal.append('nome', nome)
        animal.append('especie', especie)
        animal.append('pelagem', pelagem)
        animal.append('porte', porte)
        animal.append('idade', idade)
        animal.append('observacao', observacao)
        animal.append('vacinas', vacinas)
        animal.append('doencas', doencas)
        animal.append('alergias', alergias)
        animal.append('deficiencias', deficiencias)
        if(foto)
            animal.append('img', foto , foto.name)

        API.post("/animals/cadastro", animal, {
            headers: {
              'accept': 'application/json',
              'Content-Type': `multipart/form-data; boundary=${animal._boundary}`,
              Authorization : 'Bearer ' + window.localStorage.getItem('token')
            }
          })
          
            .then(res => {
                history.push(`/perfil/${id}`);
            })
            .catch(err =>{
                console.log(err)
                window.alert('O formulário possui erro(s)!')
            })
        
    }
    
    const handleUpload= (e) => {
        e.preventDefault()
        setFoto (e.target.files[0])
        setUpload ('uploded')
    };

    return(
        
    <div id="form-areas">
        <form id="form-area" onSubmit={e => handleSubmit(e)} >
        <h3 className="title-cadastrar">CADASTRAR ANIMAL</h3>
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
                label="Idade*"
                type="number"
                min="0"
                max="30"
                className="campo-form-pessoa"
                onChange={e => setIdade (e.target.value)}
            />
            <TextInput             
                label="Pelagem * (Exemplo: Preta e rala)"
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
                data-length={240}
                label="Observações"
                className="campo-form-pessoa"
                onChange={e => setObservacao (e.target.value)}
            />

            {(upload !== "uploded")
                ?(
                    <div className="center upload-area-animal">
                        <label htmlFor="file-upload" className="custom-file-upload-animal">
                                Foto Animal 
                        </label>
                        <input id="file-upload" type="file" onChange={handleUpload} />    
                    </div>
                ):(
                    <div className="consert-file">
                        <div className="center upload-area-animal">
                            <label htmlFor="file-upload" className="custom-file-upload-animal">
                                    Foto Animal 
                            </label>
                            <input id="file-upload" type="file" onChange={handleUpload} />    
                        </div>
                        <div className="corr">
                            <Button
                                className="icon-file-upload"
                                floating
                                icon={<MdDone />}
                                large
                                node="button"
                            />
                        </div>
                    </div>
                )
            }

            <div className="btn-area-cadPessoa">
                {btn=='' 
                ?
                    <Button
                        className="btn-submit-form"
                        node="button"
                        type="submit"
                        waves="light"
                    >
                        <MdSend className="send-icon" />
                        Cadastrar
                    </Button>
                :
                    <Button
                        className="btn-submit-form"
                        node="button"
                        type="submit"
                        waves="light"
                        disabled
                    >
                        <MdSend className="send-icon" />
                        Cadastrar
                    </Button>
                }
            </div>
        </form>
    </div>
    );
}

export default FormPessoa;