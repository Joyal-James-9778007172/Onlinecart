import React, { useEffect, useState } from 'react'
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { SearchProduct } from '../Slice/productSlice';



function Header({insideHome}) {
  const dispatch= useDispatch()
  const[WishlistCount,setWishlistCount]=useState(0)
  const[CartCount,setCartCount]=useState(0)
  const Wishlist=useSelector((state)=>state.WishlistReducer.Wishlist)
  const Cart=useSelector((state)=>state.CartReducer)
  useEffect(()=>{
    setWishlistCount(Wishlist?.length)
    setCartCount(Cart.length)
  },[Wishlist,Cart])

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand ><Link to={'/'} style={{textDecoration:'none', color:'dark'}}><i class="fa-solid fa-globe" style={{color: 'dark'}}></i> E cart</Link></Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
           {insideHome&& <Nav.Link className=''>
              <input onChange={e=>dispatch(SearchProduct(e.target.value.toLowerCase()))} type="text" className='form-control' placeholder='Search Product' style={{width:"500px"}}/>

              
            </Nav.Link>}

            <Nav.Link className=' btn-light'>

                <Link to={'/wishlist'} style={{color:'black',fontWeight:'bold',textDecoration:'none'}}>
                <i class="fa-solid fa-heart" style={{color: '#ff0000'}}></i> Wishlist <Badge bg="secondary">{WishlistCount}</Badge>
            </Link></Nav.Link>
            <Nav.Link className='btn-light ms-2'>
                <Link to={'/cart'} style={{color:'black',fontWeight:'bold',textDecoration:'none'}}>
                <i class="fa-solid fa-cart-shopping" style={{color: '#63E6BE'}}></i> Cart <Badge bg="secondary">{CartCount}</Badge>
            </Link></Nav.Link>

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
    </div>
  )
}

export default Header