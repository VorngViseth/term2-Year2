import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ images }) => {
  /* You will need to  use  state to mnage the current image */
  const [ img, setImg ] = useState(0); 

  /* You will need to hanle the click on left and right button */
  function leftClick() {
    (img == 0) ? setImg(images.length - 1) : setImg(img-1);
  }

  function rightClick() {
    (img >= images.length - 1) ? setImg(0) : setImg(img+1);
  }

  /* You will need to manage the cases when we are on the last image or first image*/

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={leftClick}/>

      {/* YOu will need to display the current image, not the first one.. */}
      <img src={images[img].src} alt={images[img].alt} className="slide" />

      <BsArrowRightCircleFill className="arrow arrow-right" onClick={rightClick} />
    </div>
  );
};
