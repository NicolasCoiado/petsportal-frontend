import { useState, useEffect } from 'react';
import 'materialize-css';
import { Carousel } from 'react-materialize';
import API from '../../api/';
import './style.css';

function Carrossel (){

    const [imagens, setImagens] = useState(['https://res.cloudinary.com/df6mhojbv/image/upload/v1658197934/Anuncie_aqui_jlmn4u.png']);

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