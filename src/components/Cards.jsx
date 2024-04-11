import React, { useEffect, useState } from "react";
import Ratings from "../ui/Ratings";
import Pricing from "../ui/Pricing";
import { Link } from "react-router-dom";

export default function Cards({ items }) {
  const [img, setImg] = useState();

  useEffect(() => {
    const image = new Image();
    image.src = items.src;
    image.onload = () => {
      setImg(image);
    };
  }, []);

  return (
    <>
      {img ? (
        <div className="card">
          <Link to={`/productsInfo/${items.id}`} className="card-link">
            <div className="card-image-container">
              <img src={img.src} alt={items.title} onClick={() => window.scrollTo({ top: 0, left: 0 })} />
            </div>
          </Link>
          <div className="card-description">
            <h1 className="card-title">{items.title}</h1>
            <Ratings rating={items.rating} />
            <Pricing salePrice={items.salePrice} originalPrice={items.originalPrice} />
          </div>
        </div>
      ) : (
        <div className="card skeleton">
          <div className="card-image-container skeleton"> </div>
          <div className="card-description skeleton"> </div>
        </div>
      )}
    </>
  );
}
