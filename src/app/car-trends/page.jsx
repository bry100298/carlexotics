import Banners from "@/components/Banners";
import Insights from "@/components/Insights";
import React from "react";

const Ourfleet = () => {
  return (
    <div>
      <Banners
        img="https://firebasestorage.googleapis.com/v0/b/mern-corpsite.appspot.com/o/carlexotics%2Fcar_trends%2Four-fleet-banner.jpg?alt=media&token=da1d1a7a-d205-44df-8180-b6de0c285cdf"
        title="Car Trends"
        text="Here are the car trendsfor our gearheads friends out there."
      />
      <div className="relative">
        <Insights isForm={false} />
      </div>
    </div>
  );
};

export default Ourfleet;