import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';

export default class CustomSlider extends Component {
  render() {
    const settings = {
      autoplay: true,
      autoplaySpeed: 10000,
      autoplayScroll: 1,
      centerPadding: 40,
      slidesPerRow: 4,
      slidesToShow: 1,
      dotsScroll: 1,
      className: "slider-div"
    };
    return (
      <div className="gallery-area-img-slide">
        <Slider {...settings}>
          <div>
            <img className="gallery-imgs" src="https://www.vandalnewyork.com/wp-content/uploads/2016/02/by-jimebozzuto-for-website.jpg" alt="gallery" />
          </div>
          <div>
            <img className="gallery-imgs" src="https://www.vandalnewyork.com/wp-content/uploads/2016/02/V-5-for-website.jpg" alt="gallery" />
          </div>
          <div>
            <img className="gallery-imgs" src="https://www.vandalnewyork.com/wp-content/uploads/2016/02/Screenshot-2017-06-14-11.24.47.jpg" alt="gallery" />
          </div>
          <div>
            <img className="gallery-imgs" src="https://www.vandalnewyork.com/wp-content/uploads/2016/02/by-lauramvila-for-website.jpg" alt="gallery" />
          </div>
          <div>
            <img className="gallery-imgs" src="https://www.vandalnewyork.com/wp-content/uploads/2016/02/042117-Vandal-Restaurant-Shoot-289-for-website.jpg" alt="gallery" />
          </div>
          <div>
            <img className="gallery-imgs" src="https://www.vandalnewyork.com/wp-content/uploads/2016/02/JLE05975-for-website.jpg" alt="gallery" />
          </div>
          <div>
            <img className="gallery-imgs" src="https://www.vandalnewyork.com/wp-content/uploads/2016/02/by-jimebozzuto-for-website.jpg" alt="gallery" />
          </div>
          <div>
            <img className="gallery-imgs" src="https://www.vandalnewyork.com/wp-content/uploads/2016/02/by-nigelbarker-for-website.jpg" alt="gallery" />
          </div>
          <div>
            <img className="gallery-imgs" src="https://www.vandalnewyork.com/wp-content/themes/vandal/images/shepard-fairey.jpg" alt="gallery" />
          </div>
          <div>
            <img className="gallery-imgs" src="https://www.vandalnewyork.com/wp-content/uploads/2016/02/by-lauramvila-for-website.jpg" alt="gallery" />
          </div>
          <div>
            <img className="gallery-imgs" src="https://www.vandalnewyork.com/wp-content/uploads/2016/02/JLE05975-for-website.jpg" alt="gallery" />
          </div>
          <div>
            <img className="gallery-imgs" src="https://www.vandalnewyork.com/wp-content/uploads/2016/02/by-nigelbarker-for-website.jpg" alt="gallery" />
          </div>
        </Slider>
      </div >
    );
  }
}