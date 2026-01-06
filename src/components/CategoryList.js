import { CDN_URL } from "../utils/constants";

const CategoryList = ({ categoryItem }) => {
  const imageId = categoryItem.card.info.imageId;
  return (
    <div className="flex justify-between p-3 border-b border-gray-400">
      <div className="text-left">
        <div>{categoryItem.card.info.name}</div>
        <div className="text-gray-700">
          ₹ {categoryItem.card.info.price / 100}
        </div>
      </div>
      <div className="relative">
        <span className="absolute bg-white text-green-800 bottom-0 left-4 cursor-pointer text-xs px-2 border border-green-300 shadow rounded">
          ADD+
        </span>
        <img className="w-20 rounded" src={CDN_URL + imageId}></img>
      </div>
    </div>
  );
};

export default CategoryList;
