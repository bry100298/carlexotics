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
        img="https://firebasestorage.googleapis.com/v0/b/mern-corpsite.appspot.com/o/carlexotics%2Four_cars%2Fservice10.jpg?alt=media&token=c3162661-8a44-42c0-bf61-fe2017d5a0e7"
        title="Our Cars"
        text="Here are some of our cars for sale right now.
        "
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
      />

      <div
        style={{
          marginBottom: "20px",
          position: "relative",
          padding: "20px",
          background: "#445566", // Change the background color to a shade of grey or blue
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
          Cars for sale at the moment
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
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "20px",
              }}
            >
              <div style={{ flex: 1, marginRight: "10px" }}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/mern-corpsite.appspot.com/o/carlexotics%2Four_cars%2Fhonda%2Fclarity.png?alt=media&token=29f23b51-8caa-4605-8c4a-9fe1cee9dd65"
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
                  src="https://firebasestorage.googleapis.com/v0/b/mern-corpsite.appspot.com/o/carlexotics%2Four_cars%2Fhonda%2Fhondaaccord.png?alt=media&token=134e4274-54b4-41bb-9e35-45563dcfd81b"
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
                  src="https://firebasestorage.googleapis.com/v0/b/mern-corpsite.appspot.com/o/carlexotics%2Four_cars%2Fhonda%2Fhondacivic.png?alt=media&token=5b99613e-fc1b-4b6b-87a6-a3d402c9f158"
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
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "20px",
              }}
            >
              <div style={{ flex: 1, marginRight: "10px" }}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/mern-corpsite.appspot.com/o/carlexotics%2Four_cars%2Fnissan%2Faltima.jpg?alt=media&token=30556530-32a8-49b1-b6c1-c5e4f30ee573"
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
                  src="https://firebasestorage.googleapis.com/v0/b/mern-corpsite.appspot.com/o/carlexotics%2Four_cars%2Fnissan%2Fmaxima.jpg?alt=media&token=f733376d-34b4-48e3-8908-408753ca38f2g"
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
                  Maxima - Nissan&#39;s flagship sedan with premium features.
                </p>
              </div>
              <div style={{ flex: 1 }}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/mern-corpsite.appspot.com/o/carlexotics%2Four_cars%2Fnissan%2Fsentra.jpg?alt=media&token=2ef728dd-76c0-4a2b-afca-16eb0c1be151"
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
            src="https://firebasestorage.googleapis.com/v0/b/mern-corpsite.appspot.com/o/carlexotics%2Four_cars%2Ffooter-bg.png?alt=media&token=95ac5458-df1f-42e3-8ea1-c10e1b1f9729"
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
