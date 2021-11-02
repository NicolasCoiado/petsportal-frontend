import React from "react";
import {Row, Col, Card , Icon, CardTitle} from 'react-materialize';
import {Link} from "react-router-dom";
import './style.css'

function EventosONG ({eventos}){
    return(
        <div className="cards-eventos">
            {eventos.map((evento)=>(
                <div className="card-eventos" key={evento._id}>
                    <img className="img-evento" src={evento.banner} alt="BannerEvento"/>
                    <h1 className="title-evento">{evento.nome}</h1>
                    <p className="p-evento">{evento.observacao} </p>
                </div>
            ))}
        </div>
    );
}

export default EventosONG;