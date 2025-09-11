import { useState ,useEffect } from "react";

const useResMenu = (resId) => {
    const [menuData,setMenuData] = useState({});
    const [menuItems, setMenuItems] = useState([]);
    const id = resId;

    const fetchMenuData = async () => {
        try {
            const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.3670355&lng=79.4304381&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
            const data = await response.json();

            setMenuData(data?.data?.cards[2]?.card?.card?.info);
            setMenuItems(data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || []);
        } catch (error) {
            console.error("Failed to fetch menu data", error);
        }
    };

    useEffect(() => {
        fetchMenuData();
    }, [id]);

    return [menuData, menuItems];
}

export default useResMenu;