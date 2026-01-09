import { useContext, useEffect, useState } from "react";
import RestaurantCard, { withVegLabelRestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";

const Body = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { setUserName, loggedInUser } = useContext(userContext);

  const navigate = useNavigate();

  const VegLabelRestaurantCard = withVegLabelRestaurantCard(RestaurantCard);

  const fetchRestaurant = async () => {
    setIsLoading(true);
    const response = await fetch(
      "https://corsproxy.io/https://namastedev.com/api/v1/listRestaurants"
    );
    const data = await response.json();
    setRestaurantData(
      data?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ?? []
    );
    setFilteredData(
      data?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ?? []
    );
    setIsLoading(false);
  };

  useEffect(() => {
    fetchRestaurant();
  }, []);

  const getTopRatedRestaurant = () => {
    const updateRestaurantData = restaurantData.filter(
      (restaurant) => restaurant.info.avgRating >= 4.5
    );
    setFilteredData(updateRestaurantData);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    const result =
      restaurantData.filter((restaurant) =>
        restaurant.info.name.toLowerCase().includes(searchQuery.toLowerCase())
      ) || [];
    setFilteredData(result);
  };
  const isOnline = useOnlineStatus();

  if (!isOnline) {
    return <div>Check your internet connection!!!</div>;
  }

  return isLoading ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="flex p-6 justify-between items-center">
        <div>
          <input
            onChange={handleSearchChange}
            value={searchQuery}
            data-testid="searchInput"
            className="w-100 border-2 border-amber-500 mr-4 px-4 py-2 rounded-2xl"
            placeholder="Search Restaurant"
          />
          <button
            onClick={handleSearch}
            className="bg-amber-500 text-white px-4 py-2 rounded-md cursor-pointer"
          >
            Search
          </button>
          <input
            onChange={(e) => setUserName(e.target.value)}
            value={loggedInUser}
            className="w-100 border-2 border-amber-500 mx-4 px-4 py-2 rounded-2xl"
            placeholder="Update Username Context"
          />
        </div>

        <button
          onClick={getTopRatedRestaurant}
          className="bg-amber-500 text-white px-4 py-2 rounded-md cursor-pointer"
          data-testid="topRestaurantBtn"
        >
          Top Restaurants
        </button>
      </div>
      <div className="flex flex-wrap gap-6 px-6 mb-4">
        {filteredData.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`/restaurant/${restaurant.info.id}`}
            data-testid="restroCard"
          >
            {restaurant.info.veg ? (
              <VegLabelRestaurantCard resData={restaurant} />
            ) : (
              <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
