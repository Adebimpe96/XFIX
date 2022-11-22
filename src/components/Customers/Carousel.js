
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "./Rectangle 12.png";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";


const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = [
  <div className="item text-start pl-4">
    <img src={image1} alt="img" />
    <h5 className="font-semibold">Eng Richard</h5>
    <p className="text-xs">Block 1, Ikorodu</p>
  </div>,
  <div className="item text-start pl-4">
    <img src={image1} alt="img" />
    <h5 className="font-semibold">Eng Richard</h5>
    <p className="text-xs">Block 1, Ikorodu</p>
  </div>,
  <div className="item text-start pl-4">
    <img src={image1} alt="img" />
    <h5 className="font-semibold">Eng Richard</h5>
    <p className="text-xs">Block 1, Ikorodu</p>
  </div>,
  <div className="item text-start pl-4">
    <img src={image1} alt="img" />
    <h5 className="font-semibold">Eng Richard</h5>
    <p className="text-xs">Block 1, Ikorodu</p>
  </div>,
  <div className="item text-start pl-4">
    <img src={image1} alt="img" />
    <h5 className="font-semibold">Eng Richard</h5>
    <p className="text-xs">Block 1, Ikorodu</p>
  </div>,
];

const Carousel = () => (
  <div className="container-lg my-3">
    <AliceCarousel
      paddingRight={150}
      mouseTracking
      items={items}
      keyboardNavigation
      infinite
      disableDotsControls
      responsive={responsive}
      renderPrevButton={() => {
        return (
          <p className="p-2 absolute left-0 top-10 text-blue-900 bg-white rounded-full">
            <BsArrowLeft className="text-2xl" />
          </p>
        );
      }}
      renderNextButton={() => {
        return (
          <p className="p-2 absolute right-0 top-10 text-blue-900 bg-white rounded-full">
            <BsArrowRight className="text-2xl" />
          </p>
        );
      }}
      controlsStrategy="alternate"
    />
  </div>
);

export default Carousel;
