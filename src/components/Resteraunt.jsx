import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import Header from './Header';




export default function Resteraunt() {
  return (
    <div>
      <Header />
      <div id="business-page">
        <h2>Resteraunt Page</h2>
        <div id="business-image">
        </div>

        <div id="resteraunt-about">
          <img src="https://www.vandalnewyork.com/wp-content/uploads/2016/02/Screenshot-2017-06-14-11.24.47.jpg" alt="resteruant" />

          {/* <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/66/ElmerFudd.gif/220px-ElmerFudd.gif" alt="resteruant" /> */}



          <div className="text-about-container">


            <p className="about">About</p>
            <p className="about-text">Located on Bowery, a street that dates back to the 17th century, Vandal is the latest restaurant/nightclub by the Tao Group Hospitality and Chef Chris Santos. Vandal celebrates the art, architecture, and food of global culture from New York to Vietnam to Barcelona and beyond, as well as the history and culture of the restaurant’s Lower East Side location. The two-level space includes a bar/lounge, restaurant, garden dining area, private dining room, and cellar nightclub.</p>
          </div>
        </div>
        <div id="resteraunt-chef">
          <img src="https://www.vandalnewyork.com/wp-content/uploads/2016/02/Screenshot-2017-06-14-11.24.47.jpg" alt="resteruant" />
          <div className="text-chef-container">
            <p className="about">Chris Santos</p>
            <p className="about-text">Inspired by street fare from around the world, VANDAL’s menu is a culmination of Chef Santos’ personal travels and reflects his signature style of multi-ethnic small plates that are ideal for tasting and sharing. The resulting menu includes nods to global street culture of locales from Chile to Thailand, Greece to Amsterdam and beyond. VANDAL’s signature dishes include Pressed New York Hot Pretzel, Grilled Sea Bass Tacos, Crispy Bao Buns, Old School Chicken Parm and VANDAL S'mores.</p>
          </div>
        </div>

      </div>

    </div>

  )

}