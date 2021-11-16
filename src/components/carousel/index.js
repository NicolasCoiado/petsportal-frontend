import { useState, useEffect } from 'react';
import 'materialize-css';
import { Carousel } from 'react-materialize';
import Car from '../../images/Carrossel.png';
import API from '../../api/';
import './style.css';

function Carrossel (){

    const [imagens, setImagens] = useState([]);

    useEffect(() => {
        API.post("/home/eventos", { carouselCount : 5 }, {
          headers: { Authorization : 'Bearer ' + window.localStorage.getItem('token')}
          })
          .then(res => {
              var img = res.data.eventos;
              var ver = img.map(function (evento){ return evento.banner });
              setImagens(ver);
              console.log(ver)
          })
          .catch(err =>{
             console.log(err);
          })
      }, []);

    return(
        <>{imagens.length >0 &&
            <Carousel
                className="Carrossel"
                images={ imagens }
                options={{
                    fullWidth: true,
                    indicators: true
                }}
            />
        }
        </>
    );
}

export default Carrossel;