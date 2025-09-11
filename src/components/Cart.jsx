import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem, incItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const total = useSelector((store) => store.cart.total);
  const resName = useSelector((store) => store.cart.resName);
  const dispatch = useDispatch();

  if (cartItems.length === 0) {
    return (
      <div className="w-1/2 p-6 my-6 mx-auto border border-gray-300 rounded-lg shadow-lg text-center">
        <h1 className="text-xl font-semibold">Your Cart is Empty 🛒</h1>
      </div>
    );
  }

  return (
    <div className="w-1/2 p-4 my-4 mx-auto border border-gray-300 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">{resName}</h1>

      {cartItems.map((item) => (
        <div key={item.id} className="flex items-center justify-between my-4">
          <h1 className="text-lg font-semibold">{item.name}</h1>
          <div className="flex items-center gap-8">
            <div className="flex items-center">
              <button
                className="h-8 bg-blue-500 text-lg text-white px-4 rounded-l-lg cursor-pointer hover:bg-blue-400"
                onClick={() => dispatch(incItem(item.id))}
              >
                +
              </button>
              <p className="h-8 flex items-center px-4 bg-blue-500 text-lg text-white">
                {item.quantity}
              </p>
              <button
                className="h-8 bg-blue-500 text-lg text-white px-4 rounded-r-lg cursor-pointer hover:bg-blue-400"
                onClick={() => dispatch(removeItem(item))}
              >
                -
              </button>
            </div>
            <h1 className="text-lg font-semibold">
              ₹ {(item.quantity * (item.price || item.defaultPrice)) / 100}
            </h1>
          </div>
        </div>
      ))}

      <hr className="my-4" />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Total:</h1>
        <h1 className="text-xl font-bold">₹ {total.toFixed(2)}</h1>
      </div>

      <button
        className="w-full mt-4 bg-red-500 text-white py-2 rounded-lg hover:bg-red-400"
        onClick={() => dispatch(clearCart())}
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
