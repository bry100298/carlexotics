import Banners from "@/components/Banners";
import Insights from "@/components/Insights";
import React from "react";

const Ourfleet = () => {
  return (
    <div>
      <Banners
        img="/car_trends/our-fleet-banner.jpg"
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