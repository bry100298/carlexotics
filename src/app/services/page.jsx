"use client";
// import Banners from "@/components/Banners";
import React, { useState } from "react";
import BannersChanging from "@/components/BannersChanging";
import Service from "@/components/Service";
import Subfooter from "@/components/Subfooter";
import { serviceList } from "@/constants/appdata";

const Services = () => {
  const imageUrls = [
    "https://firebasestorage.googleapis.com/v0/b/mern-corpsite.appspot.com/o/carlexotics%2Fservices%2Fservice1.jpg?alt=media&token=c36dd6e3-5210-47d4-a253-d7eb6a67c93e",
    "https://firebasestorage.googleapis.com/v0/b/mern-corpsite.appspot.com/o/carlexotics%2Fservices%2Fservice2.jpg?alt=media&token=d6beb6b1-59cf-4c1e-b07e-51b3f739e9cf",
    "https://firebasestorage.googleapis.com/v0/b/mern-corpsite.appspot.com/o/carlexotics%2Fservices%2Fservice3.jpg?alt=media&token=aaaff68c-7d34-433a-8f63-d3d16eb3e4f7",
    "https://firebasestorage.googleapis.com/v0/b/mern-corpsite.appspot.com/o/carlexotics%2Fservices%2Fservice4.jpg?alt=media&token=455f06c3-26d7-428e-ae48-19ce6bbb3f1c",
    "https://firebasestorage.googleapis.com/v0/b/mern-corpsite.appspot.com/o/carlexotics%2Fservices%2Fservice5.jpg?alt=media&token=fba57acc-2b91-4fee-a574-e759a0e51507",
    "https://firebasestorage.googleapis.com/v0/b/mern-corpsite.appspot.com/o/carlexotics%2Fservices%2Fservice6.jpg?alt=media&token=c16acba2-ff06-4c34-9d5e-136bfb8fbae2",
    "https://firebasestorage.googleapis.com/v0/b/mern-corpsite.appspot.com/o/carlexotics%2Fservices%2Fservice7.jpg?alt=media&token=d0fc245e-2d55-4b8b-8914-30061d4ee232",
    "https://firebasestorage.googleapis.com/v0/b/mern-corpsite.appspot.com/o/carlexotics%2Fservices%2Fservice8.jpg?alt=media&token=55e5d612-b5d1-4967-9bdf-3d9d5f85806f",
    "https://firebasestorage.googleapis.com/v0/b/mern-corpsite.appspot.com/o/carlexotics%2Fservices%2Fservice9.jpg?alt=media&token=5751a264-a537-4d81-9c42-a463f72d40c3",
    "https://firebasestorage.googleapis.com/v0/b/mern-corpsite.appspot.com/o/carlexotics%2Fservices%2Fservice10.jpg?alt=media&token=c39aeb0b-7126-4f18-949f-30f0fb547877",
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
