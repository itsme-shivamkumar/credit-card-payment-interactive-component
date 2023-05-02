import React from 'react'
import {Link} from 'react-router-dom'
import '../assets/stylesheet/style.css';
const Navbar = () => {
  return (
    <>
    <nav>
      <div className="logo">
        <h4>Payment gateway...</h4>
      </div>
      <div className="side--nav--bar">
        <ul>
          <li className='links' ><Link to="/">Products</Link></li>
          <li className='links' ><Link to="/payment">Services</Link></li>
          <li className='links' ><Link to="/aboutus">About us</Link></li>
          <li className='links' ><Link to="/contactus">Contact us</Link></li>
          <li className='links' ><Link to="/">Log out</Link></li>
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Navbar