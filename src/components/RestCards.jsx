import React from "react";

const RestCards = ({ data }) => {
  //const restData = data;
  console.log(data);

  return (
    <div className="w-68 overflow-x-auto rounded-3xl bg-gray-50 p-2 cursor-pointer hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <div className="relative h-40 w-64 rounded-3xl overflow-hidden">
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${data.info.cloudinaryImageId}`}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black opacity-100"></div>
        <div className="flex items-center absolute bottom-3/4 -left-1 z-20 rounded-lg text-white font-semibold text-md p-1">
            <img className="h-4 z-20" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${data.info.loyaltyDiscoverPresentationInfo.logoCtx.logo}`} alt="" />
            <p className="z-20 mx-2 ">Free delivery</p>
            <div className="absolute bg-red-100 inset-0 bg-gradient-to-l from-red-500 to-orange-400 opacity-100 rounded-lg "></div>
        </div>
        {data.info.aggregatedDiscountInfoV3 && (
          <h1 className="absolute bottom-1 left-3 z-20 text-white font-bold text-xl">
            {data.info.aggregatedDiscountInfoV3.header +
              " " +
              data.info.aggregatedDiscountInfoV3.subHeader}
          </h1>
        )}
      </div>
      <div className="p-1 w-64">
        <h2 className="mt-4 font-bold text-lg">{data.info.name}</h2>
        <div className="flex items-center gap-2 mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff0000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
            <h3 className="font-bold text-md">
            {data.info.avgRatingString + " " + data.info.sla.slaString}
            </h3>
        </div>
        <p className="truncate w-full">{data.info.cuisines.join(", ")}</p>
        <p>{data.info.areaName}</p>
      </div>
    </div>
  );
};

export default RestCards;
