import React from 'react';
import './cart.css'

const Cart = (props) => {
    const item = props.count.reduce((total, product)=> total + product.price * product.quantity,0);
    const price = item.toFixed(2)
    let shipping = 0;
    if(price<=12 && price>0){
        shipping = 12.99
    }
    else if(price>12 && price<=35 ){
        shipping = 4.99
    }
    else{
        shipping = 0
    }
    const totalBeforeTax =(Number(price) + shipping).toFixed(2)
    const estimatedTax = (Number(totalBeforeTax)/10.).toFixed(2)
    const totalValue = (Number(totalBeforeTax)+(Number(estimatedTax))).toFixed(2)
    return (
        <div>
        <div>
            <h3>Ordered Summary</h3>
            <h3>Item Ordered: {props.count.length}</h3>
        </div>
        <div className='cart-details'>
        <p>items: ${price}</p>
        <p>Shipping & Handling: ${shipping}</p>
        <p>Total Before Tax: ${totalBeforeTax}</p>
        <p>Estimated Tax: ${estimatedTax}</p>
        </div>
        <div>
            <h3>Order Total: ${totalValue}</h3>
        </div>
        <br/>
        {
            props.children
        }
        </div>
        
    );
};

export default Cart;