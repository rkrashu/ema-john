import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Products from '../Products/Products';

const ProductDetails = () => {
    const {productKey} = useParams()
    const product = fakeData.find(pd => pd.key ===productKey)
    return (
        <Products showAddToCart = {false}  product={product}></Products>
    )
};

export default ProductDetails;