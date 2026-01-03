import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { CDN_URL } from "../utils/constants";
import useRestaurantDetails from "../utils/useRestaurantDetails";

const RestaurantMenu = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  const restaurantDetails = useRestaurantDetails(id);

  return isLoading ? (
    <Shimmer />
  ) : (
    <div className="restraurant-menu-container">
      <h1>{restaurantDetails?.data?.cards?.[2]?.card?.card?.info?.name}</h1>
      {restaurantDetails?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards?.map(
        (menuCard, index) => (
          <div key={index}>
            <div className="menu-item-container">
              <div className="menu-item-name">{menuCard?.card?.info?.name}</div>
              <img
                className="menu-image"
                src={CDN_URL + menuCard?.card?.info?.imageId}
              ></img>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default RestaurantMenu;
