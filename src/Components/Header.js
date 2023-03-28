import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart } from 'react-icons/fa'

import { CartData } from '../Context/Context';
import {Link} from 'react-router-dom'
import '../App.css'

const Header = () => {
  const { cart } = CartData()
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand > <Link to="/" className='text-white text-decoration-none mylinks fw-bold hover-text-primary'>BuyKaro</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link ><Link to="/" className='text-white text-decoration-none mylinks fw-bold hover-text-primary'>Home</Link> </Nav.Link>
              <Nav.Link > <Link to="/products" className='text-white text-decoration-none mylinks fw-bold hover-text-primary'>Products</Link> </Nav.Link>

            </Nav>
            <Nav>
              <Nav.Link ><Link to="/cart" className='text-white text-decoration-none mylinks fw-bold hover-text-primary'><FaShoppingCart className=' fs-3 fw-bolder position-relative' /> <span className="position-absolute top-10 right-10 translate-middle badge rounded-pill bg-danger">
                {cart.length}
              </span></Link></Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
