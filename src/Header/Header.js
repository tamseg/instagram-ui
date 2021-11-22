import React from 'react';
import './Header.scss';
import HeaderProfile from './HeaderProfile/HeaderProfile';
import Logo from './Logo/Logo';
import Menu from './Menu/Menu';

function Header() {
    if (localStorage.getItem('token') === null) {
        return(
        <div className='Header'>
            <Logo />
            <ul className="userStatus">
                <li className="userLogin">
                    <a href="http://localhost:3000/login">Sign in</a>
                </li>
                <li className="userSignup">
                <a href="http://localhost:3000/register">Register</a>
                </li>
            </ul>
        </div>
        );
    } else {
        return (
            <div className='Header'>
                <Logo />
                <Menu />
                <HeaderProfile />
            </div>
        );
    }
};

export default Header;