import React from "react";
import "./PropertyList.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image from "../../assets/images/PropertyListImage/architecture.jpg";

const PropertyList = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Carousel responsive={responsive}>
        <div className="property-card">
          <div className="image">
            <img src={image} alt="" />
          </div>
          <div className="info">
            <p>Star Sun Hotel & Apartment</p>
            <p>Star</p>
          </div>
        </div>
        <div className="property-card">
          <div className="image">
            <img src={image} alt="" />
          </div>
          <div className="info">
            <p>Star Sun Hotel & Apartment</p>
            <p>Star</p>
          </div>
        </div>
        <div className="property-card">
          <div className="image">
            <img src={image} alt="" />
          </div>
          <div className="info">
            <p>Star Sun Hotel & Apartment</p>
            <p>Star</p>
          </div>
        </div>
        <div className="property-card">
          <div className="image">
            <img src={image} alt="" />
          </div>
          <div className="info">
            <p>Star Sun Hotel & Apartment</p>
            <p>Star</p>
          </div>
        </div>
        <div className="property-card">
          <div className="image">
            <img src={image} alt="" />
          </div>
          <div className="info">
            <p>Star Sun Hotel & Apartment</p>
            <p>Star</p>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default PropertyList;
