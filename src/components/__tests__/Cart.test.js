import { act, fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestraurantMenu";
import MOCK_DATA from "../mocks/resMenuMock.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    // We can remove return and make it oneline function
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("Should Render The Restaurant Menu Component", async () => {
  await act(() =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );
  const accordionHeader = screen.getByText(/Ramen/);
  expect(accordionHeader).toBeInTheDocument();

  fireEvent.click(accordionHeader);
  expect(screen.getAllByTestId("foodMenuCard").length).toBe(2);

  expect(screen.getByText("Cart - (0)")).toBeInTheDocument();

  const addButtons = screen.getAllByTestId("addCartButton");
  fireEvent.click(addButtons[0]);
  expect(screen.getByText("Cart - (1)")).toBeInTheDocument();

  expect(screen.getAllByTestId("cartItem").length).toBe(1);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(screen.getByText("No items in the cart")).toBeInTheDocument();
  expect(screen.getByText("Cart - (0)")).toBeInTheDocument(); // All the expect we can write a separate Tc if it's not tightly coupled
});
