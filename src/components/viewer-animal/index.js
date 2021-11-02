import './style.css'
import defaultImage from '../../images/default.png'

function ViewerAnimal({animal}){

    return(
        <div className="viewer-animal">
            <img  className="foto-animal" alt="imagem-animal" src={(animal)? animal.foto : defaultImage} />
        </div>
    );
}

export default ViewerAnimal;