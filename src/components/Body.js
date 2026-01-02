import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

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
    setRestaurantData(updateRestaurantData);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    console.log(searchQuery);
  };

  const handleSearch = () => {
    const result =
      restaurantData.filter((restaurant) =>
        restaurant.info.name.toLowerCase().includes(searchQuery.toLowerCase())
      ) || [];
    setFilteredData(result);
    console.log(restaurantData);
  };

  return isLoading ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="search">
        <input
          onChange={handleSearchChange}
          value={searchQuery}
          className="search-input"
          placeholder="Search Restaurant"
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
        <button onClick={getTopRatedRestaurant} className="search-button">
          Top Restaurants
        </button>
      </div>
      <div className="restro-container">
        {filteredData.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`/restaurant/${restaurant.info.id}`}
          >
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
