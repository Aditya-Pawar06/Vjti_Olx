import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import AddListing from './components/AddListing';

const App = () => {
  return (
    <>
      <header>
        <h1> Vjti OLX </h1>
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/add-listing" element={<AddListing />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
