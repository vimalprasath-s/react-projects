import { CDN_URL, DEFAULT_RESTAURANT_IMAGE } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    avgRating,
    cloudinaryImageId,
    costForTwo,
    cuisines,
    locality,
    name,
    sla,
    totalRatingsString,
    veg,
    id,
  } = resData?.info;

  // console.log("afaf", resData);

  const restroImage =
    name === "Spice Kingdom"
      ? DEFAULT_RESTAURANT_IMAGE
      : `${CDN_URL + cloudinaryImageId}`;
  return (
    <div className="w-65 p-2 shadow-sm border border-gray-400 min-h-80 rounded hover:shadow-lg">
      <img
        className="w-full h-50 rounded"
        alt="restro-image"
        src={restroImage}
      />
      <div className="font-semibold my-1">{name}</div>
      <div className="text-sm text-gray-600 pb-1">{cuisines.join(", ")}</div>
      <div className="flex justify-between [&>span]:text-sm">
        <span className="restro-rating">{avgRating}</span>
        <span className="restro-mins">{sla.deliveryTime}</span>
        <span className="restro-budget">{costForTwo}</span>
      </div>
    </div>
  );
};

export const withVegLabelRestaurantCard = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <div className="absolute p-2 m-2 bg-green-900 text-white rounded">
          Veg
        </div>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
