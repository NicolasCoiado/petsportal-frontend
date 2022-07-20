import { useState, useEffect } from 'react';
import 'materialize-css';
import Banner from '../../images/Anuncie aqui.png';
import { Carousel } from 'react-materialize';
import API from '../../api/';
import './style.css';

function Carrossel (){

    const [imagens, setImagens] = useState([Banner]);

    useEffect(() => {
        API.post("/home/eventos", { carouselCount : 5 }, {
          headers: { Authorization : 'Bearer ' + window.localStorage.getItem('token')}
          })
          .then(res => {
              var img = res.data.eventos;
              var ver = img.map(function (evento){ return evento.banner });
              setImagens(imagens.concat(ver));
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