import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {
    const[products, setProducts] =useState([])

    useEffect(() =>{
        fetch('products.json')
        .then(res =>res.json())
        .then(data =>setProducts(data))
    } , [])

    return (
        <div>
            <div className="shop-container">
                <div className="products-container">
                    <h1>This is for product:{products.length}</h1>
                </div>
                <div className="cart-contianer">
                    <h1>Order summary</h1>
                </div>
            </div>
        </div>
    );
};

export default Shop;