'use strict';

import React from 'react';

function Image(props){
    return(
        <div>
            <img src={props.imageSrc} className={props.size}/>
        </div>    
    );
}

export default Image;
