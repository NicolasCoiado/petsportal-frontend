import 'materialize-css';
import defaultImage from '../../images/default.png'
import './style.css';

function ViewerIMG(){
    return(
        <div className="viewer-img">
            <img className="img-viewer" src={defaultImage} alt="YourImage" />
        </div>
    );
}

export default ViewerIMG;