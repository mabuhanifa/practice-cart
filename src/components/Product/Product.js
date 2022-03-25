import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';
const Product = ({product, addToCart}) => {
    //const {product, addToCart} = props;
    const {name, img, seller, price, ratings} = product;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="p-info">
            <p className='p-name'>{name}</p>
            <p>Price : {price}</p>
            <p>Seller : {seller}</p>
            <p>Ratings : {ratings}</p>
            </div>
            <button onClick={()=>addToCart(product)} className='btn'>
                <p>
                    Add to Cart  <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </p>
            </button>
        </div>
    );
};

export default Product;