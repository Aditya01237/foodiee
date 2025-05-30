import React, { useRef } from "react";
import RestCards from "./RestCards";

const Section2 = ({ resData }) => {
  if (!resData?.data?.cards?.[1]?.card?.card) return null;

  const data = resData.data.cards[1].card.card;
  const restList = data.gridElements.infoWithStyle.restaurants;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -600, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 600, behavior: "smooth" });
  };

  return (
    <div className="my-8 px-4 sm:px-12 md:px-32 lg:mx-28">
      <div className="flex justify-between items-center flex-wrap gap-2">
        <h1 className="text-xl sm:text-2xl font-bold">{data.header.title}</h1>
        <div className="flex text-xl sm:text-2xl">
          <button onClick={scrollLeft} aria-label="Scroll Left">⬅️</button>
          <button onClick={scrollRight} aria-label="Scroll Right">➡️</button>
        </div>
      </div>
      <div
        className="flex mt-4 gap-1 overflow-x-auto scroll-smooth scrollbar-hide"
        ref={scrollContainerRef}
      >
        {restList.map((rest) => (
          <div key={rest.info.id} className="mr-4">
            <RestCards data={rest} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section2;
