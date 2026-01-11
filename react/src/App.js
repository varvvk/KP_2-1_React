import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import CatalogPage from './pages/CatalogPage';
import ProductPage from './pages/ProductPage';
import Header from './components/Header.js';
import CartPage from './pages/CartPage.js';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />}/>
      </Routes>
    </Router>
  );
};

export default App;
