"use client";
import Banners from "@/components/Banners";
import Feedback from "@/components/Feedback";
import Subfooter from "@/components/Subfooter";
import TitleText from "@/components/TitleText";
import React from "react";

const AboutUs = () => {
  return (
    <div>
      <Banners
        img="https://firebasestorage.googleapis.com/v0/b/mern-corpsite.appspot.com/o/carlexotics%2Fabout%2Fabout-banner.jpg?alt=media&token=0a46b8c7-8771-41ca-81a3-7e79f4da964e"
        title="ABOUT US"
        text="Nestled in San Pedro, Laguna, Philippines, our car rental service ensures a smooth drive with auto-refresh features, guaranteeing a hassle-free experience for every journey."
      />
      <TitleText
        title={<span className="">About Us</span>}
        textStyles="mt-16"
      />
      <Feedback />
      {/* <Subfooter /> */}
    </div>
  );
};

export default AboutUs;