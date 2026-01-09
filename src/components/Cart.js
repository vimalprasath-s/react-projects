import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const totalPrice = cartItems.reduce((acc, cart) => cart.price + acc, 0);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  if (cartItems.length === 0)
    return <h1 className="text-center p-4 font-bold">No items in the cart</h1>;
  return (
    <div className="text-center w-160 my-4 mx-auto bg-gray-50 shadow-md py-4 px-8 rounded-2xl">
      <div className="font-bold my-3 text-xl">Cart Items</div>
      <button
        onClick={handleClearCart}
        className="rounded bg-black text-white py-2 px-3 cursor-pointer"
      >
        Clear Cart
      </button>
      {cartItems.map((cart) => (
        <div
          data-testid="cartItem"
          key={cart.name}
          className="flex justify-between p-2 border-b"
        >
          <div className="font-semibold">{cart.name}</div>
          <div>₹ {cart.price}</div>
        </div>
      ))}
      <div className="flex justify-between py-3 px-2">
        <div className="font-bold">TO PAY </div>
        <div>₹ {totalPrice}</div>
      </div>
    </div>
  );
};

export default Cart;
