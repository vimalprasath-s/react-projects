import { useEffect, useState } from "react";

const useRestaurantDetails = (id) => {
  const [restaurantDetails, setRestaurantDetails] = useState(null);
  const fetchRestaurantDetails = async () => {
    // setIsLoading(true);
    const response = await fetch(
      `https://corsproxy.io/https://namastedev.com/api/v1/listRestaurantMenu/${id}`
    );
    const data = await response.json();
    setRestaurantDetails(data);
    console.log("printing hook", restaurantDetails);
    // setIsLoading(false);
  };
  useEffect(() => {
    fetchRestaurantDetails();
  }, []);

  return restaurantDetails;
};

export default useRestaurantDetails;
