import './style.css'
import DefaultAnimal from '../../images/DefaultAnimal.svg'

function ViewerAnimal({animal}){

    return(
        <div className="viewer-animal">
            <img  className="foto-animal" alt="imagem-animal" src={(animal)? animal.foto : DefaultAnimal} />
        </div>
    );
}

export default ViewerAnimal;