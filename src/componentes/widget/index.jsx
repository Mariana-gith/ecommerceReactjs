import React from 'react';
import { useCartContext } from '../../context/CartContext';
import './index.scss';

const Widget =()=> {
    
    const {cart,countTotal}= useCartContext()

    return<div className="d-flex" >
        <p>{countTotal()}</p>
        <img src="https://st4.depositphotos.com/4326917/24325/v/600/depositphotos_243253336-stock-illustration-shopping-cart-sign-vector-red.jpgx" alt="carritoimg"  />
    </div>
};

export default Widget