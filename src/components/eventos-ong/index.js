import React from "react";
import {Row, Col, Card , Icon, CardTitle} from 'react-materialize';
import {Link} from "react-router-dom";
const config =  require('../../api/config.json')

function EventosONG ({eventos}){
    return(
        <Row>
            <Col
                m={6}
                s={12}
            >
                
                {eventos.map((evento)=>(
                    <Card
                        closeIcon={<Icon>close</Icon>}
                        header={<CardTitle image={config.url+evento.banner}></CardTitle>}
                        revealIcon={<Icon>more_vert</Icon>}
                        key={evento._id}
                        >
                        <Link to='/'>{evento.nome}</Link>
                    </Card>
                ))}
                
            </Col>
        </Row>
    );
}

export default EventosONG;