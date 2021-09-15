import 'materialize-css';
import { Carousel } from 'react-materialize';
import './style.css';

function Carrossel (){
    return(
        <Carousel
            className="i"
            carouselId="Carousel-33"
            images={[
                'https://picsum.photos/250/250?image=0',
                'https://picsum.photos/250/250?image=1',
                'https://picsum.photos/250/250?image=2',
                'https://picsum.photos/250/250?image=3',
                'https://picsum.photos/250/250?image=4'
            ]}
            options={{
                fullWidth: true,
                indicators: true
            }}
        />
    );
}

export default Carrossel;