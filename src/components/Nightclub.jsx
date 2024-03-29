import React from 'react';
import { Link } from 'react-router-dom';
import NightForm from './NightForm';
import Footer from './Footer';
import Header from './Header';
import CustomSlider from './CustomSlider';


export default function Nightclub() {
  return (
    <div>
      <Header />
      <div id="business-page">
        <div id="business-image">
          <img id="night-img"
            src="https://www.vandalnewyork.com/wp-content/uploads/2016/03/TAO1424cellar_bar-2.jpg" alt="resteruant" />
        </div>
        <div id="logo">
          <img id="logo-img"
            src="https://www.vandalnewyork.com/wp-content/themes/vandal/images/nav-logo.svg" alt="Logo" />
        </div>
        <div id="restaurant-about">
          <div id="resteraunt-img-div">
            <img id="resteraunt-img" src="https://www.vandalnewyork.com/wp-content/uploads/2016/02/TAO1401exterior.jpg" alt="resteruant" />
          </div>
          <div id="text-about-container">
            <p id="about-head" className="about">ABOUT</p>
            <p id="about-text" className="about-text">Located on Bowery, a street that dates back to the 17th century, Vandal is the latest restaurant/nightclub by the Tao Group Hospitality and Chef Chris Santos. Vandal celebrates the art, architecture, and food of global culture from New York to Vietnam to Barcelona and beyond, as well as the history and culture of the restaurant’s Lower East Side location. The two-level space includes a bar/lounge, restaurant, garden dining area, private dining room, and cellar nightclub.</p>
          </div>
        </div>
        <div className="menu-button-container">
          {/* <button className="menu-button" href="https://www.vandalnewyork.com/dinner" >MENU</button> */}

          {/* <a className="menu-button" href="https://www.vandalnewyork.com/dinner" ><button className="menu-button-buttom">MENU</button></a> */}
          <a className="club-menu-button" href="https://www.vandalnewyork.com/dinner">Bar Menu</a>
        </div>

        <NightForm />

        <div id="art-area">
          <p id="art-head" className="art-head">Artists</p>
          <div id="art-area-img">
            <img className="art-imgs" src=" https://www.vandalnewyork.com/wp-content/themes/vandal/images/icey-grape.jpg" alt="Art" />
            <img className="art-imgs" src="https://www.vandalnewyork.com/wp-content/themes/vandal/images/hush.jpg" alt="Art" />
            <img className="art-imgs" src="https://www.vandalnewyork.com/wp-content/themes/vandal/images/shepard-fairey.jpg" alt="Art" />
            <img className="art-imgs" src="https://www.vandalnewyork.com/wp-content/themes/vandal/images/tristan-eaton.jpg" alt="Art" />
            <img className="art-imgs" src="https://www.vandalnewyork.com/wp-content/themes/vandal/images/apexer.jpg" alt="Art" />
            <img className="art-imgs" src="https://www.vandalnewyork.com/wp-content/themes/vandal/images/vhils.jpg" alt="Art" />
            <img className="art-imgs" src="https://www.vandalnewyork.com/wp-content/themes/vandal/images/will-barras.jpg" alt="Art" />
            <img className="art-imgs" src="https://www.vandalnewyork.com/wp-content/themes/vandal/images/eelus.jpg" alt="Art" />
          </div>
        </div>

        <div id="gallery-area">
          <p id="gallery-head" className="gallery-head">Gallery</p>
          <CustomSlider />
          {/* <div id="gallery-area-img">
            <img className="gallery-imgs" src="https://www.vandalnewyork.com/wp-content/uploads/2016/02/by-lauramvila-for-website.jpg" alt="gallery" />
            <img className="gallery-imgs" src="https://www.vandalnewyork.com/wp-content/uploads/2016/02/042117-Vandal-Restaurant-Shoot-289-for-website.jpg" alt="gallery" />
            <img className="gallery-imgs" src="https://www.vandalnewyork.com/wp-content/uploads/2016/02/by-nigelbarker-for-website.jpg" alt="gallery" />
            <img className="gallery-imgs" src="https://www.vandalnewyork.com/wp-content/uploads/2016/02/by-jimebozzuto-for-website.jpg" alt="gallery" />
            {/* <img className="gallery-imgs" src="https://www.vandalnewyork.com/wp-content/uploads/2016/02/Screenshot-2017-06-14-11.24.47.jpg" alt="Art" />
            <img className="gallery-imgs" src="https://www.vandalnewyork.com/wp-content/uploads/2016/02/Screenshot-2017-06-14-11.24.47.jpg" alt="Art" />
            <img className="gallery-imgs" src="https://www.vandalnewyork.com/wp-content/uploads/2016/02/Screenshot-2017-06-14-11.24.47.jpg" alt="Art" />
            <img className="gallery-imgs" src="https://www.vandalnewyork.com/wp-content/uploads/2016/02/Screenshot-2017-06-14-11.24.47.jpg" alt="Art" /> }
        </div> */}
        </div>
      </div>
      <Footer />
    </div >
  )

}