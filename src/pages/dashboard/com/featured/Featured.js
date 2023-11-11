import React from 'react'
import './featured.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider1 from '../../../../static/slider/slider1.png'
import Slider2 from '../../../../static/slider/slider2.png'
import Slider3 from '../../../../static/slider/slider3.png'
import Slider4 from '../../../../static/slider/slider4.png'
import Slider5 from '../../../../static/slider/slider5.png'
import Product from '../products/Product';

function Featured() {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
          
        },
      },
    ]
  };
  return (
    <div>

      <div className="slider_move">
      <Slider {...settings}>
      <div>
        <img src={Slider1} alt="" />
      </div>
      <div>
        <h3><img src={Slider2} alt="" /></h3>
      </div>
      <div>
        <h3><img src={Slider3} alt="" /></h3>
      </div>
      <div>
        <h3><img src={Slider4} alt="" /></h3>
      </div>
      <div>
        <h3><img src={Slider5} alt="" /></h3>
      </div>
     
    </Slider>
      </div>
    


    <Product/>
    </div>


  )
}

export default Featured