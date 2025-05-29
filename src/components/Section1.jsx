import React, { useRef } from "react";
import { resData } from "../../assets/Data/data";

const Section1 = () => {
  const data = resData.data.cards[0].card.card;
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -600, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 600, behavior: "smooth" });
  };

  return (
    <div className="my-8 mx-56">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">{data.header.title}</h1>
        <ul className="flex gap-4 text-2xl cursor-pointer">
          <li onClick={scrollLeft}>⬅️</li>
          <li onClick={scrollRight}>➡️</li>
        </ul>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex gap-6 mt-4  overflow-x-auto scroll-smooth scrollbar-hide"
      >
        {data.imageGridCards?.info?.map((items, index) => (
          <img
            key={index}
            className="w-36 h-48 flex-shrink-0"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${items.imageId}`}
            alt={`Image ${index}`}
          />
        ))}
      </div>
      <div className="bg-gray-300 h-[1px] mx-auto my-4"></div>
    </div>
  );
};

export default Section1;
