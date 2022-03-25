import React from 'react';
import './cart.css';

const Cart = (props) => {
    const {cart} = props;

    let total =0;
    let shipping =0;
    for(const product of cart){
        total += product.price;
        shipping += product.shipping;
    }
    const tax = parseFloat((total*.10).toFixed(2));
    const grandtotal = total + shipping + tax ;
    return (
        <div className='cart'>
            <h4>Order Summery</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price:$ {total}</p>
            <p>Total Shipping:${shipping}</p>
            <p>Tax:${tax}</p>
            <h4>Grand Total:${grandtotal} </h4>
        </div>
    );
};

export default Cart;