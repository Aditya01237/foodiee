import React from "react";
import { restaurantData } from "../../assets/Data/data";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

const Body = () => {
  return (
    <div className="bg-gray-50">
      <Section1 resData={restaurantData} />
      <Section2 resData={restaurantData} />
      <Section3 resData={restaurantData} />
    </div>
  );
};

export default Body;
