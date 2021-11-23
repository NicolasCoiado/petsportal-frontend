import React, {useEffect, useState} from "react";
import './style.css';

function ViewerEvento ({uploadUrl}){
    const [imagem, setImagem] = useState()

    useEffect(()=>{
            setImagem(uploadUrl)
    })
    
    return(
        <img className="banner-evento" src={imagem} alt="YourImage" />
    );
}

export default ViewerEvento;