import React from 'react';
import {Link} from 'react-router-dom';

function Header() {

    const divStyle = {
        border:'1px solid lightgrey',
        backgroundColor:'lightblue'
    }

    return(
        <div id="links" style={divStyle}>
            <ul>
                <li><Link to="/" className={"Link"}>Home</Link></li>
                <li><Link to="/products" className={"Link"}>Products</Link></li>
            </ul>
        </div>
    );
}

export default Header;