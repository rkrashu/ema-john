import React from 'react';
import './products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Products = (props) => {
    const {img, name, seller, price, stock, key } = props.product
    return (
       <div className='products'>
           <div className='products-img'>
            <img src={img} alt=""/>
           </div>
           <div className='products-details'>
            <h2><Link to={'/product/' + key}>{name}</Link></h2>
            <p><small>By: {seller}</small></p>
            <h5>$ {price}</h5>
            <p>Only {stock} left in stock - order soon</p>
            {props.showAddToCart && <button className='cart-btn' onClick={()=>props.handleClick(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>}
           </div>
       </div>
    );
};

export default Products;