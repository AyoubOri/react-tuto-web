import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Component.scss";

const Product = ({ product, setCheckbox }) => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="product">
      <input
        type="checkbox"
        id={product.code}
        checked={checked}
        onChange={() => {
          setChecked(!checked);
        }}
        onClick={(e) => setCheckbox(e, product.code)}
      />
      <div className="group">
        <span>Code: </span>
        <p>{product.code}</p>
      </div>
      <div className="group">
        <span>Name: </span>
        <p>{product.name}</p>
      </div>
      <div className="group">
        <span>PC Code: </span>
        <p>{product.productCategory.code}</p>
      </div>
      <div className="group">
        <span>Price: </span>
        <p>{product.price}</p>
      </div>
      <div className="group">
        <span>Quantity: </span>
        <p>{product.quantity}</p>
      </div>
    </div>
  );
};

const ListProducts = () => {
  const [products, setProducts] = useState([]);
  const [codesToDelete, setCodesToDelete] = useState([]);
  const setCheckbox = (e, code) => {
    if (e.target.checked) {
      setCodesToDelete((prevState) => [...prevState, code]);
    } else {
      setCodesToDelete(codesToDelete.filter((codeToKeep) => codeToKeep !== code));
    }
  };
  useEffect(() => {
    axios.get("http://localhost:8080/api/products").then((res) => {
      setProducts(res.data);
    });
  }, []);
  const Products = products.map((product) => (
    <Product product={product} key={product.id} setCheckbox={setCheckbox} />
  ));
  return (
    <div className="products">
      {console.log(codesToDelete)}
      {Products}
    </div>
  );
};

export default ListProducts;
