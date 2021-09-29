import 'materialize-css';
import defaultImage from '../../images/default.png'
import './style.css';
const config =  require('../../api/config.json')

function ViewerIMG({uploadUrl}){
    return(
        <div>
            <img className="img-viewer" src={(uploadUrl)? config.url + uploadUrl : defaultImage} alt="YourImage" />
        </div>
    );
}

export default ViewerIMG;