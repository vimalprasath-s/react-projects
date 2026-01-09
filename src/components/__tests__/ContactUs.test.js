import React from "react";
import { render, screen } from "@testing-library/react";
import Contact from "../ContactUs";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", () => {
  it("Should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("Should load button component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("Should load contact us text", () => {
    render(<Contact />);
    const contactText = screen.getByText("ContactUs Page");
    expect(contactText).toBeInTheDocument();
  });
});
