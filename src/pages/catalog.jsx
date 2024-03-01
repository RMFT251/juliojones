import "./catalog.css";
import Product from "../components/products";
import { useEffect, useState } from "react";
import DataService from "../services/dataService";
function Catalog() {
  const [productState, setProducts] = useState([]);

  useEffect(function () {
    console.log("component is loaded");
    loadCatalog();
  }, []);
  async function loadCatalog() {
    let service = new DataService();
    let products = await service.getProducts();
    setProducts(products);
    console.log(products);
  }

  return (
    <div>
      <h1>here look my {productState.length} awesome product</h1>;
      {productState.map((p) => (
        <Product data={p}></Product>
      ))}
    </div>
  );
}
export default Catalog;
