import React, { useState, useEffect } from "react";

const BannersChanging = ({ imageUrls, title, text, currentImageIndex, setCurrentImageIndex }) => {
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
      }, 2000); // Change every 2 seconds
  
      return () => clearInterval(intervalId);
    }, [imageUrls, setCurrentImageIndex]);
  
    const handleClick = (index) => {
      setCurrentImageIndex(index);
    };
  
    return (
      <div className="h-[30vh] lg:h-[70vh] bg-no-repeat bg-center bg-cover relative flex justify-center items-center">
        <img
          src={imageUrls[currentImageIndex]}
          alt={title}
          className="w-full h-full object-cover"
          onClick={() => handleClick((currentImageIndex + 1) % imageUrls.length)}
        />
  
        <div className="content-[''] absolute top-0 right-0 bottom-0 left-0 bg-[rgba(0,0,0,0.2)] bg-black opacity-40"></div>
  
        <div className="w-full absolute inset-0 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-2xl lg:text-7xl font-medium text-third-color mb-2 lg:mb-5">
            {title}
          </h1>
          <h2 className="text-lg md:text-4xl leading-6 md:leading-[55px]">
            {text}
          </h2>
        </div>
      </div>
    );
  };
  
  export default BannersChanging;