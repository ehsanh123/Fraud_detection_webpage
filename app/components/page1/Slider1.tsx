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

