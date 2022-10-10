import React from 'react';
import './Product.css';

const Product = (props) => {
    const {img, name, price } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <h1 className='product-name'>{name}</h1>
            <h3>Price: ${price}</h3>
            </div>
            <button className='btn-cart'>
                <p className='btn-text'>Select</p>
            </button>
        </div>
    );
};

export default Product;