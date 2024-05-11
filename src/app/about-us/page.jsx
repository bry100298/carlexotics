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
        img="/about/about-banner.jpg"
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