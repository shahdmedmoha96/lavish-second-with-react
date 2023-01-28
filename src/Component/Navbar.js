import React, { useState } from 'react'
import{Link} from "react-router-dom"
import"./Navbar.css"
import Button from './Button';
function Navbar() {
    const [click,useclick]=useState(false);
    const onClick= function(){
        useclick(!click);
    }
    const onclosed= function(){
        useclick(false);
    }
  return (
    <>
     
<div className='Navbar'>
<Link to='/' className="logo"  onClick={onclosed}>
   
    LAVISH</Link>
<div className='menu-icon' onClick={onClick}>
<i className={click ?'fas fa-times' :'fas fa-bars'} ></i>
</div>
<ul className={click ? "menu-links active ": "menu-links"} >
    <li className='nav-link'>
        <Link className="menu-link" to='/'  onClick={onclosed}>Home</Link>
    </li >
    <li className='nav-link'>
        <Link className="menu-link" to='/Services'  onClick={onclosed}>Services</Link>
    </li>
    <li className='nav-link'>
        <Link className="menu-link" to='/Products'  onClick={onclosed}>Products</Link>
    </li>
    <li className='nav-link'>                                                                                                                                                                                                                                                                                                                                                 
        <Link className="menu-link-mobile" to='/Sign-up'  onClick={onclosed}>Sign up</Link>
    </li>
   

</ul>
<Button type="primary" checkButtonStyle="btn--outline">Sign Up</Button>
</div>
    </>
  )
}

export default Navbar
