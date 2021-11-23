import React from "react";
import 'materialize-css';
import './style.css';

function ViewerBanner({uploadUrl}){
    return(
        <div>
            <img src={uploadUrl} className="img-banner"/>
        </div>
    );
} 

export default ViewerBanner;