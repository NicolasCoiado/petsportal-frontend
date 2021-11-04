import React, {useEffect, useState} from "react";
import defaultImage from '../../images/default.png'
import './style.css';

function ViewerEvento ({uploadUrl}){
    const [imagem, setImagem] = useState()

    useEffect(()=>{
        if(uploadUrl){
            setImagem(uploadUrl)
        }else{
            setImagem(defaultImage)
        }
    })
    
    return(
        <img className="banner-evento" src={imagem} alt="YourImage" />
    );
}

export default ViewerEvento;