import 'materialize-css';
import defaultImage from '../../images/default.png'
import './style.css';

function ViewerNavIMG(){
    return(
        <div>
            <img id="img-viewer" src={defaultImage} alt="YourImage" />
        </div>
    );
}

export default ViewerNavIMG;