import React from 'react'
import { Link } from 'react-router-dom'



export default function Header() {
  return (
    <>
      <header>
        <div>
          <Link to="/">
            <img id="logo-header" src="https://www.vandalnewyork.com/wp-content/themes/vandal/images/nav-logo.svg" />
          </Link>
        </div>
        <div id='header-div'>
          <a href="https://www.vandalnewyork.com/reservations/">RESERVATIONS</a>
          <a href="https://www.vandalnewyork.com/special-events/">SPECIAL EVENTS</a>
          <a href="https://www.vandalnewyork.com/nightclub/">NIGHT CLUB</a>
          <a href="https://www.vandalnewyork.com/delivery/">DELIVERY</a>
          <a href="https://www.taogroup.com/giftcards/">GIFT CARDS</a>
          <a href="https://www.vandalnewyork.com/contact/">CONTACT</a>
        </div>
      </header>

      <div id="headerham-div">
        <a href='#main-menu'
          className='menu-toggle'>
          <div className='bars marg-top'></div>
          <div className='bars'></div>
          <div className='bars'></div>
        </a>
        <nav id='main-menu' className='main-menu' aria-label="Home">
          <a href='#main-menu-toggle'
            className='menu-close'
            aria-label="Close main menu">
            <span>X</span>
          </a>
          <ul>
            <li><a href='/'>HOME</a></li>
            <li><a href='https://www.vandalnewyork.com/reservations/'>RESERVATIONS</a></li>
            <li><a href='https://www.vandalnewyork.com/special-events/'>EVENTS</a></li>
            <li><a href='https://www.vandalnewyork.com/dinner/'>MENU</a></li>
            <li><a href='/nightclub'>NIGHTCLUB</a></li>
            <li><a href='https://www.vandalnewyork.com/delivery/'>DELIVERY</a></li>
            <li><a href='https://www.taogroup.com/giftcards/'>GIFT CARD</a></li>
            <li><a href='https://www.vandalnewyork.com/contact/'>CONTACT</a></li>
          </ul>
        </nav>
        <a href='#main-menu-toggle'
          className='backdrop'
          tabIndex="-1"
          aria-hidden='true'
          hidden></a>
      </div>
    </>
  )
}