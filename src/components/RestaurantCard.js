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
  // console.log("detailsss", avgRating, cloudinaryImageId, costForTwo, cuisines, locality, name, sla, totalRatingsString, veg)
  const restroImage =
    name === "Spice Kingdom"
      ? DEFAULT_RESTAURANT_IMAGE
      : `${CDN_URL + cloudinaryImageId}`;
  return (
    <div className="restro-card">
      <img className="restro-image" alt="restro-image" src={restroImage} />
      <div className="restro-header">{name}</div>
      <div className="restro-cuisine">{cuisines.join(", ")}</div>
      <div className="restro-details">
        <span className="restro-rating">{avgRating}</span>
        <span className="restro-mins">{sla.deliveryTime}</span>
        <span className="restro-budget">{costForTwo}</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
