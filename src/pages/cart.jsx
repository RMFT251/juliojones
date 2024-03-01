import './cart.css';
import { useEffect, useState } from 'react';
import DataService from '../services/dataService';

function Cart() {
    const [cartList, setCartList] = useState([]);


    useEffect(function(){
        loadcart();

    },[]);

    function loadCart(){
        let service = new DataService();
        let cart = service.readCart();
        console.log(cart);
        // put the cart on state variable
        // display the products on a list (map)
    }



    return (
        <div></div> className='cart'> 
        <><h1 Are you ready for the tide></h1><div></div></>

         {cartList.map(prod => <div>{prod.title} </div>)}

    );
}

eport default Cart;