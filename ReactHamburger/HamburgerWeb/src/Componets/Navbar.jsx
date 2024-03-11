import React from 'react'
import Logo from '../Picture/logo.png'
import {Link} from 'react-router-dom'
import '../Style/Navbar.css'


function Navbar() {
  return (
    <div className='Navbar'>
        <div className='Main'>
        <img className='logo' src={Logo} alt="" />
        
        <div className='MainLink'>
            <Link to="/">AnaSayfa</Link>
            <Link to="/about">Hakkımızda</Link>
            <Link to="/menu">Ürünler</Link>
            <Link to="/contact">İletişim</Link>
            

        </div>
        
        </div>
    </div>
  )
}

export default Navbar