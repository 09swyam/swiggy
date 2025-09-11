import { useContext, useEffect, useState } from "react";
import CardBox from "./CardBox";
import SearchBar from "./SearchBar";
import { ThemeContext } from "../utils/ThemeContext"; 

const Body = () => {
  const [masterResList, setMasterResList] = useState([]);
  const [resList, setResList] = useState([]);
  const { theme } = useContext(ThemeContext);

  const fetchRestaurant = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.3670355&lng=79.4304381&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();
      const list =
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setMasterResList(list);
      setResList(list);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  };
  
  useEffect(() => {
    fetchRestaurant();
  }, []);

  return (
    <div className={theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}>
      <SearchBar restaurantList={masterResList} setRestaurantList={setResList} />
      <CardBox restaurantList={resList} />
    </div>
  );
};

export default Body;
