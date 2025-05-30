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
        <div className="flex items-center absolute bottom-2/3 -left-1 z-20 rounded-lg text-white font-semibold text-md p-1">
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
        <h3 className="font-bold text-md">
          {"⭐" + data.info.avgRatingString + " " + data.info.sla.slaString}
        </h3>
        <p className="truncate w-full">{data.info.cuisines.join(", ")}</p>
        <p>{data.info.areaName}</p>
      </div>
    </div>
  );
};

export default RestCards;
