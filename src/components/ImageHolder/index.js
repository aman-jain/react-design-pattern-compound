'use strict';

import React, {Component} from 'react';
import Description from '../core-components/Description';
import Image from '../core-components/Image';
class ImageHolder extends Component{
    static Description = Description;
    static Image = Image;
    constructor(props) {
        super(props);
    }
    render(){
        const children = React.Children.map(
            this.props.children,
            child =>
              React.cloneElement(child),
          )
        return <div>{children}</div>
    }
}

export default ImageHolder;
