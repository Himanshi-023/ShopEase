import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

interface starprops {
  stars: number;
  reviews: number;
}

const Star: React.FC<starprops> = ({ stars, reviews }) => {
  const ratingstars = Array.from({ length: 5 }, (elem, index) => {
    const number = index + 0.5;

    return (
      <>
        
        <span className="text-yellow-400" >
          {stars >= index + 1 ? (
            <FaStar />
          ) : stars >= number ? (
            <FaStarHalfAlt />
          ) : (
            <FaRegStar />
          )}
        </span>

      </>
    );
  });

  return (
    <>
     <div className="flex space-x-1  ">
     {ratingstars}
     <p >({reviews}) customer reviews</p>
     </div>
    
    </>
  );
};

export default Star;
