import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, incItem } from "../utils/cartSlice";

const CategoryList = ({ item, resName }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const cartItem = cartItems.find(
    (cartItem) => cartItem.id === item?.card?.info?.id
  );

  return (
    <div className="p-4 flex items-center gap-4 justify-between">
      <div>
        <h1 className="font-bold">{item?.card?.info?.name}</h1>
        <div className="font-bold text-gray-500">
          ₹
          {(item?.card?.info?.price || item?.card?.info?.defaultPrice || 0) /
            100}
        </div>
        <div className="font-medium text-xs text-gray-400 ">
          {item?.card?.info?.description}
        </div>
      </div>

      <div className="flex">
        {cartItem ? (
          <>
            <button
              onClick={() => dispatch(incItem(cartItem.id))}
              className="h-8 bg-blue-500 text-lg text-white px-2 rounded-l-lg cursor-pointer hover:bg-blue-400"
            >
              +
            </button>
            <div className="h-8 flex items-center justify-center px-4 bg-gray-100 font-bold">
              {cartItem.quantity}
            </div>
            <button
              className="h-8 bg-blue-500 text-lg text-white px-2 rounded-r-lg cursor-pointer hover:bg-blue-400"
              onClick={() => dispatch(removeItem(cartItem))}
            >
              -
            </button>
          </>
        ) : (
          <button
            className="h-8 bg-blue-500 text-lg text-white px-4 rounded-lg cursor-pointer hover:bg-blue-400"
            onClick={() => {
              const itemWithRestaurant = {
                ...item?.card?.info,
                resName,
                quantity: 1,
              };
              dispatch(addItem(itemWithRestaurant));
            }}
          >
            ADD
          </button>
        )}
      </div>
    </div>
  );
};

export default CategoryList;
