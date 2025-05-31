import React from "react";
import RestCards from "./RestCards";
import { useState } from "react";

const Section3 = ({ resData }) => {
  const data = resData.data.cards[4].card.card;
  const restList = data.gridElements.infoWithStyle.restaurants;
  const sectionTitle = resData.data.cards[2].card.card.title;
  console.log(restList);

  const [resList, setresList] = useState(restList);
  const [filterApplied, setfilterApplied] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const doFiltering = ({ label, index }) => {
    const newFilter = [...filterApplied];
    newFilter[index] = !newFilter[index];
    setfilterApplied(newFilter);
    if (label === "Pure Veg") {
      const filteredList = resList.filter(
        (rest) => rest?.info?.veg !== undefined && rest?.info?.veg === true
      );
      if (newFilter[index] === true) {
        setresList(filteredList);
      } else {
        setresList(restList);
      }
    }
    if (label === "Offers") {
      const filteredList = resList.filter(
        (rest) => rest?.info?.aggregatedDiscountInfoV3.header.includes("OFF") === true
      );
      if (newFilter[index] === true) {
        setresList(filteredList);
      } else {
        setresList(restList);
      }
    }
  };

  return (
    <div className="my-8 px-4 sm:px-12 md:px-32 lg:mx-12">
      <div className="flex justify-between items-center flex-wrap gap-2">
        <h1 className="text-xl mx-2 sm:text-2xl font-bold">{sectionTitle}</h1>
      </div>
      <div className="flex flex-wrap gap-3 mt-6 mb-8 mx-2">
        {["Filter", "Ratings 4.0+", "Pure Veg", "New on Swiggy", "Offers"].map(
          (label, index) => (
            <button
              key={index}
              onClick={() => doFiltering({ label, index })}
              className={`min-w-[120px] px-4 py-2 rounded-full text-sm font-medium border border-gray-300 ${
                filterApplied[index] === true
                  ? "bg-red-500 text-white "
                  : "bg-white text-gray-700"
              } `}
            >
              {label}
            </button>
          )
        )}
      </div>

      <div className="flex mt-4 gap-2 flex-wrap ">
        {resList.map((rest) => (
          <div key={rest.info.id} className="mr-4">
            <RestCards data={rest} type={3} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section3;
