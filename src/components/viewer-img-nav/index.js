import 'materialize-css';
import Default from '../../images/Default.svg'
import './style.css';

function ViewerNavIMG({uploadUrl}){
    return(
        <div>
            <img id="img-viewer" src={(uploadUrl) ? uploadUrl : Default} alt="YourImage" />
        </div>
    );
}

export default ViewerNavIMG;