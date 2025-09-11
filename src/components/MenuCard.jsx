import useResMenu from "../utils/useResMenu";
import Category from "./Category";
import { useContext } from "react";
import { ThemeContext } from "../utils/ThemeContext"; 
import { useParams } from "react-router-dom";

const MenuCard = () => {
  const { id } = useParams();
  const [menuData, menuItems] = useResMenu(id);
  const {theme} = useContext(ThemeContext); 

  return (
    <div className={theme === "dark" ? "bg-gray-900 text-white " : "bg-white text-black"}>
      <div className="w-1/2 m-auto ">
        <h1 className="text-2xl font-extrabold">{menuData?.name}</h1>
        <div className="border border-gray-300 p-4 rounded-lg shadow-lg my-6">
          <h1 className="text-lg font-bold mx-4">
            ⭐ {menuData?.avgRating} ({menuData?.costForTwoMessage})
          </h1>
          <h1 className="text-sm font-bold mx-4 text-blue-500">
            {menuData?.cuisines}
          </h1>
          <h1 className="text-lg font-bold mx-4">
            Outlet : <span className="text-gray-400">{menuData?.locality}</span>
          </h1>
          <h1 className="text-lg font-bold mx-4">{menuData?.sla?.slaString}</h1>
        </div>

        <div>
          {menuItems.slice(2).map((item, index) => {
            const category = item?.card?.card?.title;
            const items = item?.card?.card?.itemCards || [];
            return <Category key={index} category={category} items={items} resName={menuData?.name} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
