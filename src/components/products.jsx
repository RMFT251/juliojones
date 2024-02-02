import "./products.css"

import QuanityPicker from "./quanityPicker";

import { useEffect } from "react";
function Product(props){
    useEffect(function()
    {

    },[]);
        
    return(
        <div className="product">
            
         <img src={"/images/" + props.data.image} alt= ""></img> 
        <QuanityPicker></QuanityPicker>
        </div>

    );
}

export default Product;