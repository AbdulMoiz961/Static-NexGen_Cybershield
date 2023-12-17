import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] =  useState(false);

  return (
    <div className='ngen__navbar'>
      <div className='ngen__navbar-links'>
        <div className='ngen__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='ngen__navbar-links_container'>
          <p><a href="#home">Home</a></p>
          <p><a href="#wngen">Features</a></p>
          <p><a href="#features">Solutions</a></p>
          <p><a href="#blog">Library</a></p>
          <p><a href="#possibility">About Us</a></p>
        </div>
      </div>
      <div className='ngen__navbar-sign'>
        <p>Sign In</p>
        <button type="button">Sign Up</button>
      </div>
      <div className='ngen__navbar-menu'>
        {toggleMenu 
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className='ngen__navbar-menu_container scale-up-center'>
            <div className='ngen__navbar-menu_container-links'>
              <p><a href="#home">Home</a></p>
              <p><a href="#wngen">Features</a></p>
              <p><a href="#features">Solutions</a></p>
              <p><a href="#blog">Library</a></p>
              <p><a href="#possibility">About Us</a></p>
            </div>
            <div className='ngen__navbar-menu_container-links-sign'>
              <p>Sign In</p>
              <button type="button">Sign Up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar