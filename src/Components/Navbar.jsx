import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
import { useSelector } from 'react-redux'

function Navbar() {
  const items = useSelector((state)=> state.cart); // in this it subscribes to the cart and by the useSelector hook it can actually read the changes to it and rerender and give the data to the other components
  
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <span className='logo'>Deepak Store</span>
    <div style={{display:'flex',alignItems:'space-between'}}>
        <Link className="navLink"to="/">Home</Link>
        <Link className="navLink"to="/cart">Cart</Link>

        <span className='cartCount'>Cart item: {items.length}</span>
    </div>
    </div>
  )
}

export default Navbar