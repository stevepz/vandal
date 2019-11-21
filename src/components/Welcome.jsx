import React from 'react';
import { Link } from 'react-router-dom';




export default function Welcome() {
  return (

    <div className='landing-pg'>
      <img id='vandal-logo' src={'https://www.vandalnewyork.com/wp-content/themes/vandal/images/vandal-logo.png'} alt='vandal logo' height='auto' />
      <div className='display-name'>
        <Link to='/restaurant'>
          <h2 className='rest-name'>Restauraunt</h2>
        </Link>

        <Link to='/nightclub'>
          <h2 className='night-name'>Nightclub</h2>
        </Link>
      </div>
    </div>
  )

}