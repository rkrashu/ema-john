import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';
import CartProduct from '../CartProduct/CartProduct';

const OrderReview = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        const cartData = getDatabaseCart();
        const productKeys = Object.keys(cartData)

        const counts = productKeys.map (key => {
            const data = fakeData.find ( pd => pd.key === key)
            data.quantity = cartData[key]
            return data
        });
        setProducts(counts)
    },[])
    return (
        <div>
            <h1>Cart items: {products.length}</h1>
            {
                products.map(pd => <CartProduct pd={pd} key ={pd.key}></CartProduct>)
            }
        </div>
    );
};

export default OrderReview;