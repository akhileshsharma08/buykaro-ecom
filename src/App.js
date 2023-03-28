import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Header from './Components/Header'
import Cart from './Components/Cart'
import Products from './Components/Products'
import Footer from './Components/Footer'
import ProductDetail from './Components/ProductDetail'



const App = () => {
  return (
    <>
        <Router>
      <Header/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/product/:id" element={<ProductDetail />} />
          </Routes>
          <Footer/>
        </Router>
    </>
  )
}

export default App
