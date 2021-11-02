import 'materialize-css';
import { Carousel } from 'react-materialize';
import Car from '../../images/Carrossel.png'
import './style.css';

function Carrossel (){
    return(
        <Carousel
            className="Carrossel"
            images={[
                Car,
                Car,
                Car,
                Car,
                Car
            ]}
            options={{
                fullWidth: true,
                indicators: true
            }}
        />
    );
}

export default Carrossel;