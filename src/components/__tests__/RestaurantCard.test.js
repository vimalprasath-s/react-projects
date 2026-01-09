import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import { withVegLabelRestaurantCard } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import VEG_MOCK_DATA from "../mocks/vegResCardMock.json";
import "@testing-library/jest-dom";

it("Should render Restaurant Card Component With Props", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const restoName = screen.getByText("Pasta Palace");
  expect(restoName).toBeInTheDocument();
});

it("Should render Restaurant Card Component With Props and With Veg Label", () => {
  const VegLabelRestaurantCard = withVegLabelRestaurantCard(RestaurantCard);
  render(<VegLabelRestaurantCard resData={VEG_MOCK_DATA} />);
  //   const restoName = screen.getByText("Pasta Palace");
  expect(screen.getByText("Veg")).toBeInTheDocument();
  //   expect(restoName).toBeInTheDocument();
});
