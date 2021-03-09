import React, { useEffect, useState } from 'react';
import './container.css'
import fakeData from '../../fakeData'
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';


const Container = () => {
    const first10 = fakeData.slice(0,10)
    const [products] = useState(first10)
    const [cart, setCart] =useState([])
    useEffect(()=>{
        const cartData = getDatabaseCart();
        const productKeys = Object.keys(cartData)

        const counts = productKeys.map (key => {
            const data = fakeData.find ( pd => pd.key === key)
            data.quantity = cartData[key]
            return data
        });
        setCart(counts)
    },[])


    const handleClick = (product) =>{
    const sameProduct = cart.find(pd => pd.key === product.key)
    let count = 1
    let newCart
    if (sameProduct){
    count = product.quantity + 1
    product.quantity = count 
    const others = cart.filter(pd => pd.key !==product.key)
    newCart =[...others, product]
    }   
    else{
        product.quantity = 1
        newCart=[... cart, product]
    }
    setCart(newCart)
    
    addToDatabaseCart(product.key,count)
    }
    return (
        <div className='container'>
            <div className= 'product-container'>
               {
                   products.map(product => <Products showAddToCart ={true} product={product} key={product.key} handleClick={handleClick}></Products>)
               }
            </div>
            <div className= 'cart-container'>
                <Cart count={cart} >
                <Link to='/review'><button className='cart-btn'>Review Order</button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Container;