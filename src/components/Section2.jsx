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
    <div className="my-8 px-4 sm:px-12 md:px-28 lg:mx-12">
      <div className="flex justify-between items-center flex-wrap gap-2">
        <h1 className="text-xl mx-2 sm:text-2xl font-bold">{data.header.title}</h1>
        <div className="hidden sm:flex text-xl sm:text-2xl gap-2">
          <button onClick={scrollLeft} aria-label="Scroll Left">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-chevron-left-icon lucide-circle-chevron-left"><circle cx="12" cy="12" r="10"/><path d="m14 16-4-4 4-4"/></svg>
          </button>
          <button onClick={scrollRight} aria-label="Scroll Right">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-chevron-right-icon lucide-circle-chevron-right"><circle cx="12" cy="12" r="10"/><path d="m10 8 4 4-4 4"/></svg>
          </button>
        </div>
      </div>
      <div>
      </div>
      <div
        className="flex mt-4 gap-1 overflow-x-auto scroll-smooth scrollbar-hide"
        ref={scrollContainerRef}
      >
        {restList.map((rest) => (
          <div key={rest.info.id} className="mr-4">
            <RestCards data={rest} type={2} />
          </div>
        ))}
      </div>
      <div className="bg-gray-300 h-[1px] mx-auto my-4"></div>
    </div>
  );
};

export default Section2;
