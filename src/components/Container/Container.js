import React, { useState } from 'react';
import './container.css'
import fakeData from '../../fakeData'
import Products from '../Products/Products';
import Cart from '../Cart/Cart';

const Container = () => {
    const first10 = fakeData.slice(0,10)
    const [products, setProducts] = useState(first10)
    const [count, setCount] =useState([])
    const handleClick = (product) =>{
        const newCount = [...count , product]
        setCount(newCount)
        console.log('clicked', product)
    }
    return (
        <div className='container'>
            <div className= 'product-container'>
               {
                   products.map(product => <Products product={product} key={product.key} handleClick={handleClick}></Products>)
               }
            </div>
            <div className= 'cart-container'>
                <Cart count={count}></Cart>
            </div>
        </div>
    );
};

export default Container;