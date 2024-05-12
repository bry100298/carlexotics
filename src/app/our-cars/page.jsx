"use client";
// import Banners from "@/components/Banners";
import React, { useState } from "react";
import BannersChanging from "@/components/BannersChanging";
import Banners from "@/components/Banners";

const Services = () => {
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

      {/* New Section */}
      <div style={{ background: "#D2DADF", padding: "20px 0" }}>
        <div
          style={{
            width: "80%",
            margin: "0 auto",
            background: "#fff",
            borderRadius: "10px",
            position: "relative",
          }}
        >
          {/* Content of the container */}

          <div>
            <h3
              style={{
                padding: "20px",
                marginBottom: "10px",
                fontFamily: "Arial, sans-serif",
                fontSize: "1.5rem",
                textTransform: "uppercase",
                color: "#333",
                letterSpacing: "1px",
                fontWeight: "bold",
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
              }}
            >
              Honda
            </h3>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
              <div style={{ flex: 1, marginRight: "10px" }}>
                <img
                  src="/our_cars/honda/clarity.png"
                  alt="Clarity"
                  style={{
                    width: "100%",
                    borderRadius: "5px",
                    marginBottom: "5px",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Adding a subtle shadow
                  }}
                />
                <p
                  style={{
                    fontFamily: "Arial, sans-serif",
                    fontSize: "1rem",
                    color: "#666",
                    textShadow: "1px 1px 1px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  Clarity - Electric vehicle with advanced features.
                </p>
              </div>
              <div style={{ flex: 1, marginRight: "10px" }}>
                <img
                  src="/our_cars/honda/hondaaccord.png"
                  alt="Honda Accord"
                  style={{
                    width: "100%",
                    borderRadius: "5px",
                    marginBottom: "5px",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Adding a subtle shadow
                  }}
                />
                <p
                  style={{
                    fontFamily: "Arial, sans-serif",
                    fontSize: "1rem",
                    color: "#666",
                    textShadow: "1px 1px 1px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  Honda Accord - A reliable and comfortable sedan.
                </p>
              </div>
              <div style={{ flex: 1 }}>
                <img
                  src="/our_cars/honda/hondacivic.png"
                  alt="Honda Civic"
                  style={{
                    width: "100%",
                    borderRadius: "5px",
                    marginBottom: "5px",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Adding a subtle shadow
                  }}
                />
                <p
                  style={{
                    fontFamily: "Arial, sans-serif",
                    fontSize: "1rem",
                    color: "#666",
                    textShadow: "1px 1px 1px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  Honda Civic - A compact car with sporty design.
                </p>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "20px" }}>
            <h3
              style={{
                padding: "20px",
                marginBottom: "10px",
                fontFamily: "Arial, sans-serif",
                fontSize: "1.5rem",
                textTransform: "uppercase",
                color: "#333",
                letterSpacing: "1px",
                fontWeight: "bold",
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
              }}
            >
              Nissan
            </h3>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "20px"}}>
              <div style={{ flex: 1, marginRight: "10px" }}>
                <img
                  src="/our_cars/nissan/altima.jpg"
                  alt="Altima"
                  style={{
                    width: "100%",
                    borderRadius: "5px",
                    marginBottom: "5px",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Adding a subtle shadow
                  }}
                />
                <p
                  style={{
                    fontFamily: "Arial, sans-serif",
                    fontSize: "1rem",
                    color: "#666",
                    textShadow: "1px 1px 1px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  Altima - A stylish and efficient midsize sedan.
                </p>
              </div>
              <div style={{ flex: 1, marginRight: "10px" }}>
                <img
                  src="/our_cars/nissan/maxima.jpg"
                  alt="Maxima"
                  style={{
                    width: "100%",
                    borderRadius: "5px",
                    marginBottom: "5px",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Adding a subtle shadow
                  }}
                />
                <p
                  style={{
                    fontFamily: "Arial, sans-serif",
                    fontSize: "1rem",
                    color: "#666",
                    textShadow: "1px 1px 1px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  Maxima - Nissan's flagship sedan with premium features.
                </p>
              </div>
              <div style={{ flex: 1 }}>
                <img
                  src="/our_cars/nissan/sentra.jpg"
                  alt="Sentra"
                  style={{
                    width: "100%",
                    borderRadius: "5px",
                    marginBottom: "5px",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Adding a subtle shadow
                  }}
                />
                <p
                  style={{
                    fontFamily: "Arial, sans-serif",
                    fontSize: "1rem",
                    color: "#666",
                    textShadow: "1px 1px 1px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  Sentra - A compact car known for its reliability.
                </p>
              </div>
            </div>
          </div>
          <img
            src="/our_cars/footer-bg.png"
            alt="Footer Border"
            style={{
              display: "block",
              margin: "0 auto",
              marginTop: "20px",
              width: "90%", // Expand image to full width
              height: "auto", // Maintain aspect ratio
            }}
          />
        </div>
      </div>
      {/* End of New Section */}
    </div>
  );
};

export default Services;
