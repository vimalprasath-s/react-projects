import { useContext } from "react";
import CategoryList from "./CategoryList";
import userContext from "../utils/userContext";

const RestaurantCategory = ({ category, showItems, accordionExpand }) => {
  const { loggedInUser } = useContext(userContext);
  const handleAccordion = () => {
    accordionExpand();
  };
  return (
    <div className="border-gray-200 border-b-4 shadow-md my-3 ">
      <div
        onClick={handleAccordion}
        className="flex justify-between p-3 cursor-pointer bg-gray-50"
      >
        <div className="font-bold">
          {category.card.card.title} ({category.card.card.itemCards.length}) for{" "}
          {loggedInUser}
        </div>
        <span>{!showItems ? "⬇️" : "⬆️"}</span>
      </div>

      {showItems &&
        category.card.card.itemCards.map((categoryItem, index) => (
          <CategoryList key={index} categoryItem={categoryItem} />
        ))}
    </div>
  );
};

export default RestaurantCategory;
