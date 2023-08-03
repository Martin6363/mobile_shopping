import React from 'react'
import '../assets/styles/shopHeader.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export function ShopHeader() {
  return (
    <div className='header-cont'>
      <h1>Mobile.com</h1>
      <nav className='navigation'>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <FontAwesomeIcon icon={faBars} className="menu-icon"/>
    </div>
  )
}
