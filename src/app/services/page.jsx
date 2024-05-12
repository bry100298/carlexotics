"use client";
// import Banners from "@/components/Banners";
import React, { useState } from "react";
import BannersChanging from "@/components/BannersChanging";
import Service from "@/components/Service";
import Subfooter from "@/components/Subfooter";
import { serviceList } from "@/constants/appdata";

const Services = () => {
  const imageUrls = [
    "/services/service1.jpg",
    "/services/service2.jpg",
    "/services/service3.jpg",
    "/services/service4.jpg",
    "/services/service5.jpg",
    "/services/service6.jpg",
    "/services/service7.jpg",
    "/services/service8.jpg",
    "/services/service9.jpg",
    "/services/service10.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const handleImageClick = (index) => {
    console.log("Clicked on image index:", index);
    setCurrentImageIndex(index);
  };
  return (
    <div>
      <BannersChanging
        // img="/service-banner.jpg"
        imageUrls={imageUrls}
        title="Services"
        text="CarLEXotics offers unparalleled luxury car rental services, providing a seamless blend of opulence and performance to elevate every journey."
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
      />

      <div
        style={{
          marginBottom: "20px",
          position: "relative",
          padding: "20px",
          background: "linear-gradient(to right, #ff8a00, #da1b60)",
          borderRadius: "10px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2
          style={{
            fontSize: "1.5rem",
            color: "#fff",
            marginBottom: "10px",
            textAlign: "center",
            textShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          Gallery of our CASA
        </h2>
        <div
          style={{
            position: "absolute",
            bottom: "-10px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "80px",
            height: "10px",
            backgroundColor: "#fff",
            borderRadius: "10px",
          }}
        ></div>
      </div>

      <div className="flex overflow-x-auto mt-4">
        {imageUrls.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Service ${index + 1}`}
            className={`cursor-pointer w-23 h-24 object-cover rounded-md mr-2 ${
              index === currentImageIndex ? "border-2 border-blue-500" : ""
            }`}
            onClick={() => handleImageClick(index)} // Call handleImageClick on click
            // onClick={() => setCurrentImageIndex(index)} // Update currentImageIndex on click
          />
        ))}
      </div>
      {/* <div className="mb-5">
        {serviceList?.map((service, index) => (
          <div key={index}>
            <Service service={service} />
          </div>
        ))}
      </div> */}

      {/* <Subfooter /> */}
    </div>
  );
};

export default Services;
