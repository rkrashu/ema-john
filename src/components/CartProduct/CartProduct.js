import React from 'react';

const CartProduct = (props) => {
    const {name, quantity, img, key, price} =props.pd
    return (
        <div >
            <img src={img} alt=""/>
            <h2>{name}</h2>
            <h5>Quantity: {quantity}</h5>
            <h6>Price: {price} </h6>
            <button className='cart-btn' onClick={()=>props.handleRemove(key)}>Remove</button>
        </div>
    );
};

export default CartProduct;