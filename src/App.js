import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import Header from "./components/Header/Header";
import CreateForm from "./components/CreateForm/CreateForm";
import ListProducts from "./components/ListProducts/ListProducts";

const AddProductPage = ({
  codes, setCodes, code, setCode, name, setName, productCategory, setProductCategory, price, setPrice, quantity, setQuantity,
}) => (
  <div>
    <Header headerText="Ecommerce Store" navText={["SAVE", "CANCEL"]} name={name} setName={setName} code={code} setCode={setCode} productCategory={productCategory} setProductCategory={setProductCategory} price={price} setPrice={setPrice} quantity={quantity} setQuantity={setQuantity} />
    <CreateForm codes={codes} setCodes={setCodes} name={name} setName={setName} code={code} setCode={setCode} productCategory={productCategory} setProductCategory={setProductCategory} price={price} setPrice={setPrice} quantity={quantity} setQuantity={setQuantity} />
  </div>
);

const ListProductsPage = ({
  headerText, navText, name, setName, code, setCode, productCategory, setProductCategory, price, setPrice, quantity, setQuantity,
}) => (
  <div>
    <Header headerText={headerText} navText={navText} name={name} setName={setName} code={code} setCode={setCode} productCategory={productCategory} setProductCategory={setProductCategory} price={price} setPrice={setPrice} quantity={quantity} setQuantity={setQuantity} />
    <ListProducts />
  </div>
);

function App() {
  const [codes, setCodes] = useState([]);
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ListProductsPage headerText="Ecommerce Store" navText={["ADD", "DELETE"]} name={name} setName={setName} code={code} setCode={setCode} productCategory={productCategory} setProductCategory={setProductCategory} price={price} setPrice={setPrice} quantity={quantity} setQuantity={setQuantity} />} />
        <Route exact path="/add-product" element={<AddProductPage headerText="Ecommerce Store" navText={["SAVE", "CANCEL"]} codes={codes} setCodes={setCodes} name={name} setName={setName} code={code} setCode={setCode} productCategory={productCategory} setProductCategory={setProductCategory} price={price} setPrice={setPrice} quantity={quantity} setQuantity={setQuantity} />} />
      </Routes>
    </Router>
  );
}

AddProductPage.propTypes = {
  headerText: PropTypes.string.isRequired,
  navText: PropTypes.arrayOf(PropTypes.string).isRequired,
  codes: PropTypes.arrayOf(PropTypes.string).isRequired,
  setCodes: PropTypes.func,
};

CreateForm.propTypes = {
  codes: PropTypes.arrayOf(PropTypes.string).isRequired,
  setCodes: PropTypes.func,
};

export default App;
