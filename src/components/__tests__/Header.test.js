import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Header component test cases", () => {
  it("Should load header component", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const login = screen.getByRole("button", { name: "Login" });
    expect(login).toBeInTheDocument();
  });

  it("Should load cart text with 0 items", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const cartText = screen.getByText(/Cart/);
    expect(cartText).toBeInTheDocument();
  });

  it("Should change login to logout button on click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginButton = screen.getByRole("button", { name: "Login" });
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", { name: "Logout" });
    expect(logoutButton).toBeInTheDocument();
  });

  it("Should show online if the user is online", () => {
    Object.defineProperty(window.navigator, "onLine", {
      writable: true,
      configurable: true,
      value: true,
    });
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    expect(screen.getByText("✅Online")).toBeInTheDocument();
  });

  it("Should show offline if the user is offline", () => {
    Object.defineProperty(window.navigator, "onLine", {
      writable: true,
      configurable: true,
      value: false,
    });
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    expect(screen.getByText("🔴Offline")).toBeInTheDocument();
  });
});
