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
