import React from 'react';
import PropTypes from 'prop-types';
import './header.scss';
import { NavLink } from 'react-router-dom';
import axios from "axios";

const onSave = async (code, quantity, price, name, productCategory) => {
  await axios.post("http://localhost:8080/api/product", {
    code, quantity, price, name, productCategory,
  }).then((res) => console.log(res));
};

function Header({
  headerText, navText, code, quantity, price, name, productCategory,
}) {
  const addButton = (
    <NavLink
      to={navText[0] === 'ADD' ? '/add-product' : ''}
      className="control-button"
    >
      {navText[0]}
    </NavLink>
  );
  const saveButton = (
    <button
      type="button"
      className="add control-button"
      onClick={() => onSave(code, quantity, price, name, productCategory)}
    >
      {navText[0]}
    </button>
  );
  const cancelButton = (
    <NavLink to="/" className="control-button">
      {navText[1]}
    </NavLink>
  );
  const deleteButton = (
    <button
      type="button"
      className="add control-button"
      id="delete-product-button"
    >
      {navText[1]}
    </button>
  );
  return (
    <header id="products-heading">
      <h1>{headerText}</h1>
      <div id="products-control-buttons">
        {navText[0].toLowerCase().charAt(0).toUpperCase() + navText[0].slice(1).toLowerCase() === 'Save' ? saveButton : addButton}
        {navText[1].toLowerCase().charAt(0).toUpperCase() + navText[1].slice(1).toLowerCase() === 'Cancel' ? cancelButton : deleteButton}
      </div>
    </header>
  );
}

Header.propTypes = {
  headerText: PropTypes.string.isRequired,
  navText: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Header;
