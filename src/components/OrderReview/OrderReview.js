import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import CartProduct from '../CartProduct/CartProduct';
import happy from '../../images/giphy.gif'

const OrderReview = () => {
    const [products, setProducts] = useState([])
    const [orderedPlaced, setOrderedPlaced] = useState(false)
    const handlePlaceOrder = () =>{
        console.log("order placed")
        processOrder()
        setProducts([])
        setOrderedPlaced(true)

    }
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
        const handleRemove = (productKey) =>{
           const newProduct = products.filter(pd => pd.key !== productKey)
           setProducts(newProduct)
           removeFromDatabaseCart(productKey)
        }
    return (
        <div className='container'>
            <div className= 'product-container'>
           
            {
                products.map(pd => 
                <CartProduct pd={pd}
                handleRemove = {handleRemove} 
                key ={pd.key}>
                </CartProduct>)
            }
             {
                orderedPlaced && <img src={happy} alt=""/>
            }
            </div>
            <div  className= 'cart-container'>
                <Cart count = {products}>
                    <button className='cart-btn' onClick={handlePlaceOrder}>Place Order</button>
                </Cart>
            </div>
           
        </div>
    );
};

export default OrderReview;