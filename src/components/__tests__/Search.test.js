import { act } from "react";
import Body from "../Body";
import resListMock from "../mocks/resListMock.json";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(resListMock);
    },
  });
});

it("Should Search for Spice Text", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const restroCardsBefore = screen.getAllByTestId("restroCard");
  expect(restroCardsBefore.length).toBe(9);

  const searchButton = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "Spice" } }); // because, js-dom is not an actual browser, so e.target.value is not there, so we are providing it

  fireEvent.click(searchButton);

  const restroCards = screen.getAllByTestId("restroCard");
  expect(restroCards.length).toBe(2);
});

it("It Should Give Top Restaurants when Click on Top Restaurant Button", async () => {
  await act(() =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const topRestaurantButton = screen.getByTestId("topRestaurantBtn");
  fireEvent.click(topRestaurantButton);
  const restroCards = screen.getAllByTestId("restroCard");
  expect(restroCards.length).toBe(5);
});
