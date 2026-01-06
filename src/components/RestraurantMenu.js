import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantDetails from "../utils/useRestaurantDetails";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showIndex, setShowIndex] = useState(0);
  const { id } = useParams();

  const restaurantDetails = useRestaurantDetails(id);

  const accordionExpand = (index) => {
    if (showIndex === index) setShowIndex(null);
    else setShowIndex(index);
  };

  const filteredMenu =
    restaurantDetails?.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards?.filter(
      (card) =>
        card?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return isLoading ? (
    <Shimmer />
  ) : (
    <div className="w-180 text-center mx-auto">
      <h1 className="text-lg font-bold my-4">
        {restaurantDetails?.data?.cards?.[2]?.card?.card?.info?.name}
      </h1>
      {filteredMenu?.map((category, index) => (
        <RestaurantCategory
          key={index}
          showItems={showIndex === index ? true : false}
          category={category}
          accordionExpand={() => accordionExpand(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
