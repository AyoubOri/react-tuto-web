import axios from "axios";
import React from "react";
import "./Component.scss";

const CreateForm = ({
  code, setCode, name, setName, productCategory, setProductCategory, price, setPrice, quantity, setQuantity, codes, setCodes,
}) => {
  (async () => {
    await axios.get("http://localhost:8080/api/codes").then((res) => setCodes(res.data));
  })();
  const codesOptions = codes.map((code, index) => (
    <option key={index}>{code}</option>
  ));

  const onChangeCode = (e) => {
    setCode(e.target.value);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangePC = (e) => {
    console.log(e.target.value);
    setProductCategory(e.target.value);
  };

  const onChangeQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const onChangePrice = (e) => {
    setPrice(e.target.value);
  };

  const setPC = (e) => {
    setProductCategory(e.target.value);
  };

  return (
    <form>
      <label htmlFor="code">
        Code
        <input type="text" name="code" value={code} onChange={onChangeCode} />
      </label>
      <label htmlFor="name">
        Name
        <input type="text" name="name" value={name} onChange={onChangeName} />
      </label>
      <label htmlFor="productCategory">
        Product Category Code
        <select name="productCategory" id="pc" value={productCategory} onChange={(e) => onChangePC(e)}>
          <option />
          {codes.map((code, index) => (
            <option key={index}>{code}</option>
          ))}
        </select>
      </label>
      <label htmlFor="price">
        price
        <input type="number" name="price" value={price} onChange={onChangePrice} />
      </label>
      <label htmlFor="quantity">
        quantity
        <input type="number" name="quantity" value={quantity} onChange={onChangeQuantity} />
      </label>
    </form>
  );
};

export default CreateForm;
