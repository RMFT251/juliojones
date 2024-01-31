import "./products.css"

import QuanityPicker from "./quanityPicker";

function Product(){
    return(
        <div className="product">
            <h5>hello im a product</h5>
        <img src="https://picsum.photos/160/220"></img>
        <QuanityPicker></QuanityPicker>
        </div>

    );
}

export default Product;