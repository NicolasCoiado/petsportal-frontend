import 'materialize-css';
import defaultImage from '../../images/default.png'
import './style.css';

function ViewerNavIMG({uploadUrl}){
    return(
        <div>
            <img id="img-viewer" src={(uploadUrl) ? uploadUrl : defaultImage} alt="YourImage" />
        </div>
    );
}

export default ViewerNavIMG;