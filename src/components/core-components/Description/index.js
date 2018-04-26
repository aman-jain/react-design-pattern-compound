'use strict';

import React from 'react';

function Description(props){
    return(
        <div>
            <h4>{props.imageDescription}</h4>
        </div>    
    );
}

// Specifies the default values for props:
Description.defaultProps = {
    imageDescription: 'Lorem Ipsum'
  };
export default Description;
