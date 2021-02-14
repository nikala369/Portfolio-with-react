import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Icon from './SvgLogo';
import {FaBars, FaTimes} from 'react-icons/fa';
import { Button } from './Button';
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    return (
            <>
            <div className="navbar">
                <div className="navbar-container container">

                    <Link to="/Portfolio-with-react" className="navbar-logo" onClick={closeMobileMenu} >
                    <Icon />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/Portfolio-with-react'className="nav-link" onClick={closeMobileMenu}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/Experience'className="nav-link" onClick={closeMobileMenu}>Experience</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/My-work'className="nav-link" onClick={closeMobileMenu}>My Work</Link>
                        </li>

                        <li className="nav-btn">
                            {button ? (
                            <Link to="/sing-up" className="btn-link" onClick={closeMobileMenu}>
                                <Button buttonSyle="btn--outline" >CONTACT ME</Button>
                            </Link>) : (
                                <Link to="/sing-up"  className="btn-link">
                                    <Button buttonSyle="btn--outline" 
                                    buttonSize="btn--mobile"></Button>
                                </Link>
                            )}

                        </li>
                    </ul>
                </div>
            </div>  
        </>
    )
}

export default Navbar
