import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AddForm from './components/AddForm';
import Details from './components/Details';
import EditForm from './components/EditForm';
import ProductList from './components/ProductList';
import axios from 'axios';

const App = () => {
  const API = 'http://localhost:8000/products';

  const [products, setProducts] = useState([]);

  function addProduct(newProduct) {
    axios.post(API, newProduct);
  };

  async function getProducts() {
    let res = await axios.get(API);
    setProducts(res.data);
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList getProducts={getProducts} products={products} />} />
        <Route path="/add" element={<AddForm addProduct={addProduct} />} />
        <Route path="/edit/:id" element={<EditForm />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/contacts" element={<h1>Contacts</h1>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App