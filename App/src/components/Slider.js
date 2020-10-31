import React, { useState } from "react";
import "./Slider.css";
import left from "../images/left.png";
import right from "../images/right.png";

const Slider = () => {
  const images = [
    "https://images.unsplash.com/photo-1465156799763-2c087c332922?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1525673812761-4e0d45adc0cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1571388878919-2d2214775af4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1570650801108-607b4effe23e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1483167902084-6c825fe61556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1543270915-a8381a52e201?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
  ];
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    if (index > 1) setIndex(index - 1);
  };
  const nextSlide = () => {
    if (index < 5) setIndex(index + 1);
  };

  return (
  <div className="wrapper">
    <div className="slider">
      <div className="slider-rectangle">
        <input
          type="image"
          src={left}
          className="button-left"
          alt="left"
          onClick={prevSlide}
        />
        <input
          type="image"
          src={right}
          className="button-right"
          alt="right"
          onClick={nextSlide}
        />
      </div>
      <div className="slider-background">
        <div className="slider-wrapper">
          <img className="image" src={images[index]} alt="s1"/>
          <img className="image" src={images[index + 1]} alt="s2"/>
          <img className="image" src={images[index + 2]} alt="s3"/>
          <img className="image" src={images[index + 3]} alt="s4"/>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Slider;
