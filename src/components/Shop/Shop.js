import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products,setProducts]= useState([]);
    const [cart, setCart]= useState([]);

    useEffect( () =>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res=> res.json())
        .then(data=> setProducts(data))
    },[]);
    const addToCart = (product)=>{
        console.log(products);
        //cart.push(product);
        const newCart = [...cart, product];
        setCart(newCart);
    };
    return (
        <div className='s-container'>
            <div className="p-container">
                {
                    products.map(product => <Product 
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                        ></Product>

                    )
                }
            </div>
            <div className="c-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;