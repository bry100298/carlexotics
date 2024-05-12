"use client";
// import Banners from "@/components/Banners";
import React, { useState } from "react";
import BannersChanging from "@/components/BannersChanging";
import Banners from "@/components/Banners";


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
      <Banners
        img="/our_cars/service10.jpg"
        title="Our Cars"
        text="Here are some of our cars for rent right now.
        "
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
          Cars for rent at the moment
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
