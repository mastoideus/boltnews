import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import MainHeader from "./MainHeader";

test("header background initial color to white on scroll", () => {
  render(<MainHeader />, { wrapper: MemoryRouter });

  const header = screen.getByRole("banner");
  expect(header).toHaveClass();
});
