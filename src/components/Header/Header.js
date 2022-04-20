import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className="product">
       <img src={logo} alt="" />
       <div className="nav-items">
          <a href="/order">Order</a>
          <a href="/OrderReview">Order Review</a>
          <a href="/manage inventory">Manage Inventory</a>
          <a href="/login">Login</a>
       </div>
        </nav>
    );
};


export default Header;