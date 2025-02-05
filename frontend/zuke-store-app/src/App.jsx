import { useState } from 'react'
import './App.css'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Product from './components/Product.jsx'

export default function App() {
  return (
    <>
      <Header />
      <div className="products">
        <Product />
        <Product />
      </div>
      <Footer />
    </>
  );
}