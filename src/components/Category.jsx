import CategoryList from "./CategoryList";
import { useState } from "react";

const Category = ({ category, items, resName }) => {
    const [openCategories, setOpenCategories] = useState(false);

    return (
        <div>
            <div className="flex justify-between border border-gray-300 rounded-lg py-2 px-4 my-4">
                <h1 className="text-md font-bold">{category}</h1>
                <div className="cursor-pointer" onClick={() => setOpenCategories(!openCategories)}>
                    {openCategories ? "⬆️" : "⬇️"}
                </div>
            </div>
            <div>
                {openCategories && items.map((item) => {
                    return (
                        <CategoryList key={item?.card?.info?.id} item={item} resName={resName} />
                    )
                })}
            </div>
        </div>
    )
}

export default Category;