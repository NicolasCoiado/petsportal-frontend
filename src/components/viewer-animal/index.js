import './style.css'
import defaultImage from '../../images/default.png'

const config =  require('../../api/config.json');

function ViewerAnimal({animal}){

    return(
        <div className="viewer-animal">
            <img  className="foto-animal" src={(animal)? config.url +  animal.foto : defaultImage} />
        </div>
    );
}

export default ViewerAnimal;