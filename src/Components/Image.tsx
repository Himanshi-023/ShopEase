
import React, { useState } from 'react';

interface ImageProps {
  image: { url: string }[];
}

const Image: React.FC<ImageProps> = ({ image }) => {
  // Check if image is undefined or an empty array
  if (!Array.isArray(image) || image.length === 0) {
    return <div>No images available</div>; // Fallback UI
  }

  const [mainImage, setMainImage] = useState(image[0]);

  return (
    <div className='grid grid-cols-2'>
      <div className='grid grid-rows-4 gap-4 justify-center items-center'>
        {image.map((cur, index) => (
          <figure key={index} className='flex justify-center'>
            <img
              className='h-36'
              src={cur.url}
              alt=""
              onClick={() => setMainImage(cur)}
            />
          </figure>
        ))}
      </div>

      <div className='flex items-center justify-center'>
        <img src={mainImage.url} alt="" />
      </div>
    </div>
  );
};

export default Image;
