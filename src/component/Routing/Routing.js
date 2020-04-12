import React, { Fragment } from 'react';
import {Link } from 'react-router-dom';

import './Routing.scss';
import hamburger from '../../Images/hamburger.png';



const Routing = () => {

    const showSideBar = () => {
        document.getElementsByClassName('side-container')[0].style.display = 'block';
    }

    const hideSideBar = () => {
        document.getElementsByClassName('side-container')[0].style.display = 'none';

    }

    return (
        <Fragment>
             <div className="routing-container">
                <ul >
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about-me'>About me</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    
                </ul>
                <div className="clear"> </div>
            </div>

            <div className="side-container">
                <span className="close-btn" onClick={ hideSideBar }>x</span>
                <ul onClick={hideSideBar}>
                    <li >
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about-me'>About me</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    
                </ul>
                <div className="clear"> </div>
            </div>


            <div className="hamberger-menu" onClick={showSideBar}>
                <img src={hamburger} ></img>
            </div>
        </Fragment>
       
            
    )
}



export default Routing