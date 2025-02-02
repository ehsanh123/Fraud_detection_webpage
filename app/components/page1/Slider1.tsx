<<<<<<< HEAD
// components/CustomSlider.js
'use client'
import React from 'react';
import Comp_1_1 from './Comp_1_1';
import Comp_1_2 from './Comp_1_2';
import dynamic from 'next/dynamic';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Dynamically import react-slick to avoid SSR issues in Next.js
const Slider = dynamic(() => import('react-slick'), { ssr: false });

// Custom navigation buttons
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="next-arrow"
    style={{
      position: 'absolute',
      right: '20px',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 10,
      fontSize: '24px',
      cursor: 'pointer',
      background: 'rgba(255,255,255,0.7)',
      border: 'none',
      padding: '10px',
      borderRadius: '50%',
      boxShadow: '0px 0px 10px rgba(0,0,0,0.2)',
    }}
  >
    ▶
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="prev-arrow"
    style={{
      position: 'absolute',
      left: '20px',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 10,
      fontSize: '24px',
      cursor: 'pointer',
      background: 'rgba(255,255,255,0.7)',
      border: 'none',
      padding: '10px',
      borderRadius: '50%',
      boxShadow: '0px 0px 10px rgba(0,0,0,0.2)',
    }}
  >
    ◀
  </button>
);

const CustomSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className="slider-container"
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Slider {...settings} style={{ height: '100%' }}>
        <div
          style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#f4f4f4',
          }}
        >
          <Comp_1_1 />
        </div>
        <div
          style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#ddd',
          }}
        >
          <Comp_1_2 />
        </div>
      </Slider>
    </div>
  );
};

export default CustomSlider;
=======
// components/page1/Slider1.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Comp_1_1 from '../../components/page1/Comp_1_1';
import Comp_1_2 from '../../components/page1/Comp_1_2';

const CustomSlider: React.FC = () => {
  // Slider settings
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite looping
    speed: 500, // Transition speed in ms
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Auto-play the slider
    autoplaySpeed: 3000, // Auto-play speed in ms
    pauseOnHover: true, // Pause on hover
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {/* Slide 1: Comp_1_1 */}
        <div>
          <Comp_1_1 />
        </div>

        {/* Slide 2: Comp_1_2 */}
        <div>
          <Comp_1_2 />
        </div>
      </Slider>
    </div>
  );
};

export default CustomSlider;

>>>>>>> 0209a41b3f2755e7f7b441203ce12f1759f23ec6
