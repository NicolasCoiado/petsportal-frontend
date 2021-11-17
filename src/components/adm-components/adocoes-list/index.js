import React, { useRef, useEffect, useState } from 'react';
import { Collection, CollectionItem, Modal, Button, TextInput } from 'react-materialize';
import { ImCross } from 'react-icons/im';
import { FaFilter } from 'react-icons/fa';
import API from '../../../api';

function AdocoesList (){

    const [adotante, setAdotante] = useState();
    const [doador, setDoador] = useState();
    const [animal, setAnimal] = useState();

    const [adocoes, setAdocoes] = useState();


    useEffect(() => {
        
        let tokens = {}
        if(window.localStorage.getItem('token'))
        {
            tokens.headers= {Authorization : 'Bearer ' + window.localStorage.getItem('token')}
        }

        API.post(`admin/adocoes`, {limit: 10}, tokens)
        .then(res => {
            console.log(res.data)
            setAdocoes(res.data.adocoes)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return(
            <div className="reqs-component">
                <Collection className="cltn-reqs">
                    {adocoes &&
                        adocoes.map(adocao => 
                        ( 
                            <CollectionItem key={adocao._id} className="cltni-reqs">
                                {adocao.adotante.nome}
                                <Button
                                    node="button"
                                    style={{
                                    marginRight: '5px'
                                    }}
                                    waves="light"
                                >
                                    button
                                </Button>
                            </CollectionItem>
                        ))
                    }
                </Collection>
            </div>
    );
}

export default AdocoesList;