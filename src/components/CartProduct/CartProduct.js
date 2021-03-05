import React from 'react';

const CartProduct = (props) => {
    const {name, quantity, img} =props.pd
    return (
        <div >
            <img src={img} alt=""/>
            <h2>{name}</h2>
            <h5>Quantity: {quantity}</h5>
            <button className='cart-btn'>Remove</button>
        </div>
    );
};

export default CartProduct;