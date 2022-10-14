import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);
    useEffect (()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[]);

    const handleAddToCart = (newProduct) =>{
        console.log(newProduct);
        const exists = cart.find(product=>product.id === newProduct.id);
        if(exists){
            return
        }
        const newCart = [...cart, newProduct];
        setCart(newCart);
    }
    return (
        <div className='shop'>
            <div className="products-container">
                {
                    products.map(product => <Product
                    key={product.id}
                    product = {product}
                    handleAddToCart = {handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
                
            </div>
        </div>
    );
};

export default Shop;