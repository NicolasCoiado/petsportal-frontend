import 'materialize-css';
import Default from '../../images/Default.svg' 
import './style.css';

function ViewerImgPro({uploadUrl}){
    return(
        <div>
            <img id="img-viewer-pro" src={(uploadUrl) ? uploadUrl : Default} alt="YourImage" />
        </div>
    );
}

export default ViewerImgPro;