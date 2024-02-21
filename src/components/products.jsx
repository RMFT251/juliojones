import DataService from "../services/dataService";
import "./products.css";

import QuanityPicker from "./quanityPicker";

import { useEffect, useState } from "react";

function Product(props) {
  const [quantity, setQuantity] = useState(1);

  function onQuantityChange(qt) {
    setQuantity(qt);
  }

  useEffect(function () {}, []);
  function add() {
    const prod4Cart = {
      ...props.data,
      quantity: quantity,
    };

    let service = new DataService();
  }
  function getTotal() {
    const total = props.data.price * quantity;
    return total.toFixed(2);
  }

  return (
    <div className="product">
      <img src={"/images/" + props.data.image} alt=""></img>
      <label classname="total">${getTotal()}</label>
      <label classname="price">
        $
        {props.data.price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </label>
      <button onclick={add} type="button" classname="btn btn-outline-danger">
        Danger
      </button>
      <div className="controls"></div>
      <QuanityPicker onQuantityChange={onQuantityChange}></QuanityPicker>
    </div>
  );
}

export default Product;
