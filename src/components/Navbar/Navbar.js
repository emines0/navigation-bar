/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from '../../data'
import logo from '../../logo.svg'

const Navbar = () => {
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo' />
          <button className='nav-toggle'>
            <FaBars />
          </button>
        </div>
        <div className='links-container show-container'>
          <ul className='links'>
            <li>
              <a href='#'>home</a>
            </li>
            <li>
              <a href='#'>about</a>
            </li>
            <li>
              <a href='#'>projects</a>
            </li>
            <li>
              <a href='#'>profile</a>
            </li>
          </ul>
        </div>
        <ul className='social-icons'>
          <li>
            <a href='https://www.facebook.com'>
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href='https://www.facebook.com'>
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href='https://www.facebook.com'>
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href='https://www.facebook.com'>
              <FaTwitter />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
/*
 *           {social.map((link) => {
            const { id, url, icon } = link
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          })} 
 */
