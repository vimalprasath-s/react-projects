import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const CategoryList = ({ categoryItem }) => {
  const imageId = categoryItem.card.info.imageId;
  const dispatch = useDispatch();
  const addCart = () => {
    dispatch(
      addItem({
        name: categoryItem.card.info.name,
        restaurant: "Res",
        price: categoryItem.card.info.price / 100,
      })
    );
  };
  return (
    <div
      data-testid="foodMenuCard"
      className="flex justify-between p-3 border-b border-gray-400"
    >
      <div className="text-left">
        <div>{categoryItem.card.info.name}</div>
        <div className="text-gray-700">
          ₹ {categoryItem.card.info.price / 100}
        </div>
      </div>
      <div className="relative">
        <span
          data-testid="addCartButton"
          onClick={addCart}
          className="absolute bg-white text-green-800 bottom-0 left-4 cursor-pointer text-xs px-2 border border-green-300 shadow rounded"
        >
          ADD +
        </span>
        <img className="w-20 rounded" src={CDN_URL + imageId}></img>
      </div>
    </div>
  );
};

export default CategoryList;
