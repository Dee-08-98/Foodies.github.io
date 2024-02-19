import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import List from './Imgsection';
import '../HappyCustomers/Customers.css'


function HappyCustomers(props) {
  var settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          //   dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>


      <div className='container mt-5 pt-4 '>
        <h2 id='happycustomers'>Our Happy Customers</h2>
        <Slider {...settings} >
          {
            List.map((itms) => {
              return (
                <>
                  <div className="card" id='happy'>
                    <div className='aaa p-4'>
                      <img src={itms.img}></img>
                    </div>
                    <div className='bbb p-4'>
                      <h6>{itms.title}</h6>
                    </div>
                  </div>

                </>
              )
            })
          }


        </Slider>
      </div>


    </div>
  );
}

export default HappyCustomers;