import React from 'react';
import './Header.css';
import './common/common.css';

const Header = function(props) {
    return(
        <div className="header">
        {props.heading}
        </div>
    )
}

export default Header;