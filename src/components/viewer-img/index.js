import React, {useEffect, useState} from 'react';
import 'materialize-css';
import defaultImage from '../../images/default.png'
import './style.css';
const config =  require('../../api/config.json')

function ViewerIMG({uploadUrl}){
    const [imagem, setImagem] = useState()

    useEffect(()=>{
        if(uploadUrl){
            setImagem(uploadUrl)
        }else{
            setImagem(defaultImage)
        }
    })
    
    return(
        <div>
            <img className="img-viewer" src={imagem} alt="YourImage" />
        </div>
    );
}

export default ViewerIMG;