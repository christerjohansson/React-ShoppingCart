import React from 'react';
import './Product.css';
import {FaCartArrowDown} from 'react-icons/fa';

export default function Product({ onAddToCartClick, price, title }) {
    return(
        <div className="Product">
            <h2 className="Product-title">{title}</h2>
            <div className="Product-price">€ {price}</div>
            <button className="Product-buy-button" onClick={onAddToCartClick}>
                <FaCartArrowDown /> Add to cart
            </button>
        </div>
    );
} 