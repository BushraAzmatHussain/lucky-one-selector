import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    // let productName = 0;
    // for(const product of cart){
    //     productName = product.name;
    // }
    return (
        <div className='cart'>
            <div>
                <h2>Selected List</h2>
                <h4>Selected Items:{cart.length}</h4> 
                {/* <h4>{productName}</h4>  */}
            </div>
            <div>
                {
                    cart.map(product=><h4>{product.name}</h4>)
                }
            </div>
        </div>
        
    );
};

export default Cart;