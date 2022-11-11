import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PropTypes from "prop-types";
import Header from "./components/Header/Header";
import Component from "./components/Component/Component";

const AddProductPage = ({
  codes, setCodes, code, setCode, name, setName, productCategory, setProductCategory, price, setPrice, quantity, setQuantity,
}) => (
  <div>
    <Header headerText="Ecommerce Store" navText={["SAVE", "CANCEL"]} name={name} code={code} productCategory={productCategory} price={price} quantity={quantity} />
    <Component codes={codes} setCodes={setCodes} name={name} setName={setName} code={code} setCode={setCode} productCategory={productCategory} setProductCategory={setProductCategory} price={price} setPrice={setPrice} quantity={quantity} setQuantity={setQuantity} />
  </div>
);

// const onSave = () => {
//     axios.post()
// }

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
        <Route exact path="/" element={<Header headerText="Ecommerce Store" navText={["ADD", "DELETE"]} name={name} code={code} productCategory={productCategory} price={price} quantity={quantity} />} />
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

Component.propTypes = {
  codes: PropTypes.arrayOf(PropTypes.string).isRequired,
  setCodes: PropTypes.func,
};

export default App;
