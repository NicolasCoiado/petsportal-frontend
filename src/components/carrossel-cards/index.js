import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Preloader } from "react-materialize";
import API from "../../api";
import './style.css';

function CarrosselCards(){

    const [animais, setAnimais] = useState('');
    const [carouselCount, setCarouselCount] = useState(10);
    const [quantAdd, setQuantAdd] = useState(10);
    const [logado, setLogado] = useState();

    useEffect(() => {
        API.post("/home/carousel", { carouselCount }, {
          headers: { Authorization : 'Bearer ' + window.localStorage.getItem('token')}
          })
          .then(res => {
              setAnimais(res.data.animais)
              setLogado(res.data.logado)
              //console.log(res.data.animais)
              console.log( res.data )
          })
          .catch(err =>{
             console.log(err);
          })
      }, []);

    const carrossel = useRef(null);

    const handleLeftClick = (e) =>{
        e.preventDefault();
        carrossel.current.scrollLeft -= carrossel.current.offsetWidth;
    }

    const handleRightClick = (e) =>{
        e.preventDefault();
        carrossel.current.scrollLeft += carrossel.current.offsetWidth;
        API.post("/home/maisAnimais", 
            { 
                carouselCount,  
                pag : Math.ceil((animais.length-carouselCount)/quantAdd),
                quant : quantAdd
            },
            {headers: { Authorization : 'Bearer ' + window.localStorage.getItem('token')}}
        )
            .then(res => {
                setAnimais(animais.concat(res.data.animais))
                //console.log(res.data.animais)
            })
            .catch(err =>{
                console.log(err);
            })
    }

    return(
        <div className="cc">
            <div className="carrossel" ref={carrossel}>
                {animais 
                ?
                    animais.map(animal => (
                        <div className="card" key={animal._id}>
                            <div className="center">
                                <img src={animal.foto} className="img-animal" alt="Animal" />
                            </div>  
                            <div className="info">
                                <h1 className="animal-name">{animal.nome}</h1>
                                {logado
                                ? 
                                    <Link to={ 'animal/'+animal._id}>
                                        <Button
                                            className="btn-animal"
                                            node="button"
                                            waves="light"
                                        >
                                            Ver mais
                                        </Button>
                                    </Link>
                                :
                                    <Link to="/login">
                                        <Button
                                            className="btn-animal"
                                            node="button"
                                            waves="light"
                                        >
                                            Ver mais
                                        </Button>
                                    </Link>
                                }
                            </div>
                        </div>
                    ))
                :
                  //TODO: ARRUME ISSO AQUI
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
            <div className="icons-group">

                <Icon onClick={handleLeftClick} className="icon-animal">
                    navigate_before
                </Icon>

                <Icon onClick={handleRightClick} className="icon-animal">
                    navigate_next
                </Icon>
                
            </div> 

            <div className="center">
                <Link to='/animais/filtrados'>
                    <Button
                        className="btn-ver"
                        //TODO: Msg: Mais animais adicionados ao carrossel acima
                        //TODO: Estilizar botão
                    >
                        Buscar tipo específico de animal
                    </Button>  
                </Link>
            </div>
        </div>
    );
}

export default CarrosselCards;
