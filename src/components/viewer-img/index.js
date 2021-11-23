import React, {useEffect, useState} from 'react';
import 'materialize-css';
import Default from '../../images/Default.svg'
import './style.css';

function ViewerIMG({uploadUrl}){
    const [imagem, setImagem] = useState()

    useEffect(()=>{
        if(uploadUrl){
            setImagem(uploadUrl)
        }else{
            setImagem(Default)
        }
    })
    
    return(
        <div>
            <img className="img-viewer" src={imagem} alt="YourImage" />
        </div>
    );
}

export default ViewerIMG;