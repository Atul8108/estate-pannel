import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { PROPERTY } from "../../Api/localStorage";
import image from "../../assets/images/PropertyListImage/architecture.jpg";
import "./PropertyList.css";

const PropertyList = () => {
  let propertyList = JSON.parse(PROPERTY());

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 5000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
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
    {
      propertyList?.length ?<Carousel responsive={responsive}
        autoPlay={true}
        swipeable={true}
        infinite={true}
      >
        {
          propertyList?.map((item, index) => {
            return (
              <div className="property-card" key={item?.id}>
                <div className="image">
                  <img src={image} alt={item?.propertyName} />
                </div>
                <div className="info">
                  <p>{item?.propertyName}</p>
                  <p>{item?.propertyPrice}</p>
                </div>
              </div>
            )
          })
        }
      </Carousel> :<p>no data found</p>
    }
    </>
  );
};

export default PropertyList;
