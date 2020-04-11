import React, { Fragment } from 'react';
import {Link, Route, BrowserRouter} from 'react-router-dom';


const Routing = () => {

    return (
        <div>
            <ul >
                <li>
                    <Link to='/'>Home</Link>
                    <Link to='/about-me'>About me</Link>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </div>
            
    )
}

export default Routing