import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';


import Routing from '../Routing/Routing';
import About from '../About/About';
import Home from '../Home/Home'
import Contact from '../Contact/Contact';

import './Header.scss'



const Header = () => {
    return (
        <div>
           
                <BrowserRouter>
                    <div className='header'>
                        <Routing></Routing>
                    </div>

                    <Route path='/' exact component={Home}></Route>
                    <Route path='/contact' exact component={Contact}></Route>
                    <Route path='/about-me' exact component={About}></Route>



                </BrowserRouter>

        </div>
        
    )
}

export default Header;