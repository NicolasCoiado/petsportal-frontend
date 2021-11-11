import 'materialize-css';
import defaultImage from '../../images/default.png' //TODO: Definir imagens melhores
import './style.css';

function ViewerImgPro({uploadUrl}){
    return(
        <div>
            <img id="img-viewer-pro" src={(uploadUrl) ? uploadUrl : defaultImage} alt="YourImage" />
        </div>
    );
}

export default ViewerImgPro;