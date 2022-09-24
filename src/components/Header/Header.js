import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/orders">Order</a>
                <a href="/review">Order Review</a>
                <a href="/manage">Manage</a>
                <a href="/inventory">Inventory</a>
            </div>
        </nav>
    );
};

export default Header;