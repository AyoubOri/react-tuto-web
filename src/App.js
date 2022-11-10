import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

const Component = () => (
  <div>
    <h1>
      <p>Hello!</p>
    </h1>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Header headerText="Ecommerce Store" navText={["ADD", "DELETE"]} />} />
        <Route exact path="/" element={<Component />} />
        <Route exact path="/add-product" element={<Header headerText="Ecommerce Store" navText={["SAVE", "CANCEL"]} />} />
      </Routes>
    </Router>
  );
}

export default App;
