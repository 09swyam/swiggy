import { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../utils/themeContext";

const SearchBar = ({restaurantList,setRestaurantList}) => {
  const [searchText, setSearchText] = useState("");
  const {theme, toggleTheme} = useContext(ThemeContext);

  const handleSearch = () => {
    const filteredList = restaurantList.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()))
    setRestaurantList(filteredList);
  }

  const handleFilter = () => {
    const filteredList = restaurantList.filter((res) => res.info.avgRating > 4.3);
    setRestaurantList(filteredList);
  }

  return (
    <div className="p-8 flex justify-center items-center gap-4">
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search..."
        className="w-1/3 border border-gray-400 p-2 rounded-lg text-xl h-10"
      />
      <button 
        className="h-10 bg-blue-500 text-xl text-white px-4 rounded-lg cursor-pointer hover:bg-blue-400" 
        onClick={handleSearch}
      >
        Search
      </button>
      <button 
        className="h-10 bg-blue-500 text-xl text-white px-4 rounded-lg cursor-pointer hover:bg-blue-400" 
        onClick={handleFilter}
      >
        Filter
      </button>
      <button 
        className="h-10 bg-blue-500 text-xl text-white px-4 rounded-lg cursor-pointer hover:bg-blue-400" 
        onClick={() => setRestaurantList(restaurantList)}
      >
        Reset
      </button>
      <button 
        className="h-10 bg-blue-500 text-xl text-white px-4 rounded-lg cursor-pointer hover:bg-blue-400" 
        onClick={toggleTheme} 
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
};

export default SearchBar;
