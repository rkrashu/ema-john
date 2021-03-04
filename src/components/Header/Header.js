import React from 'react';
import './header.css'
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div className='header'>
        <div className='logo'>
            <img src={logo} alt=""/>
        </div>
        <div className='nav'>
        <a href="/shop">Shop</a>
        <a href="/review">Order Review</a>
        <a href="/manage">Manage Inventory</a>
        </div>
        </div>
    );
};

export default Header;