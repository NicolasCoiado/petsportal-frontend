import React, {useRef} from "react";
import { Carousel, Icon, Button } from 'react-materialize';
import M from 'materialize-css';
import Gato from '../../images/gato.jpeg'
import './style.css'


function CardsDesktop() {
    const carrrossel = useRef(null);

    function proximo(){   
        
    }

    return (
        <Carousel
            className="carousel"
            ref={carrrossel}
            options={{
                fullWidth: true,
                noWrap: true
            }}
        >
            <div className="item-carrossel">
                <div className="card-animal">
                    <img src={Gato} alt="animal" className="img-card-animal" />
                    <h3 className="title-card-animal">Nome animal</h3>
                </div>
                <div className="card-animal">
                    <img src={Gato} alt="animal" className="img-card-animal" />
                    <h3 className="title-card-animal">Nome animal</h3>
                </div>
                <div className="card-animal">
                    <img src={Gato} alt="animal" className="img-card-animal" />
                    <h3 className="title-card-animal">Nome animal</h3>
                </div>
            </div>
            <div className="item-carrossel">
                <div className="card-animal">
                    <img src={Gato} alt="animal" className="img-card-animal" />
                    <h3 className="title-card-animal">Nome animal</h3>
                </div>
                <div className="card-animal">
                    <img src={Gato} alt="animal" className="img-card-animal" />
                    <h3 className="title-card-animal">Nome animal</h3>
                </div>
                <div className="card-animal">
                    <img src={Gato} alt="animal" className="img-card-animal" />
                    <h3 className="title-card-animal">Nome animal</h3>
                </div>
            </div>
            <div className="item-carrossel">
                <div className="card-animal">
                    <img src={Gato} alt="animal" className="img-card-animal" />
                    <h3 className="title-card-animal">Nome animal</h3>
                </div>
                <div className="card-animal">
                    <img src={Gato} alt="animal" className="img-card-animal" />
                    <h3 className="title-card-animal">Nome animal</h3>
                </div>
                <div className="card-animal">
                    <img src={Gato} alt="animal" className="img-card-animal" />
                    <h3 className="title-card-animal">Nome animal</h3>
                </div>
            </div>
            <div className="item-carrossel">
                <div className="card-animal">
                    <img src={Gato} alt="animal" className="img-card-animal" />
                    <h3 className="title-card-animal">Nome animal</h3>
                </div>
                <div className="card-animal">
                    <img src={Gato} alt="animal" className="img-card-animal" />
                    <h3 className="title-card-animal">Nome animal</h3>
                </div>
                <div className="card-animal">
                    <img src={Gato} alt="animal" className="img-card-animal" />
                    <h3 className="title-card-animal">Nome animal</h3>
                </div>
            </div>
        </Carousel>
    );
}

export default CardsDesktop;