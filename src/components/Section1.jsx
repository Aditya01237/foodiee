import React, { useRef } from "react";

const Section1 = ({resData}) => {
  const data = resData.data.cards[0].card.card;
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -600, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 600, behavior: "smooth" });
  };

  return (
    <div className="my-8 px-4 sm:px-12 md:px-28 lg:mx-32">
      {/* Header */}
      <div className="flex justify-between items-center flex-wrap gap-2">
        <h1 className="text-xl sm:text-2xl font-bold">{data.header.title}</h1>
        <ul className="flex text-xl sm:text-2xl cursor-pointer">
          <li onClick={scrollLeft}>⬅️</li>
          <li onClick={scrollRight}>➡️</li>
        </ul>
      </div>

      {/* Scrollable Image Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 mt-4 overflow-x-auto scroll-smooth scrollbar-hide"
      >
        {data.imageGridCards?.info?.map((items, index) => (
          <img
            key={index}
            className="w-28 h-40 sm:w-32 sm:h-44 md:w-36 md:h-48 flex-shrink-0 rounded-md object-cover"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${items.imageId}`}
            alt={`Image ${index}`}
          />
        ))}
      </div>

      {/* Divider */}
      <div className="bg-gray-300 h-[1px] mx-auto my-4"></div>
    </div>
  );
};

export default Section1;
