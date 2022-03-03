import { render, screen } from "./test-utils";
import App from "./App";

test("rendering news page on news route", () => {
  render(<App />, { initialRoutes: ["/news"] });
  const circleHomeText = screen.getByRole("heading", {
    name: /F o c u s - t h e - T r u t h -/i,
  });
  expect(circleHomeText).toBeInTheDocument();
});

test("rendering search page on search route", () => {
  render(<App />, { initialRoutes: ["/search-news"] });
  const circleSearchText = screen.getByRole("heading", {
    name: /Search for Articles by # term/i,
  });
  expect(circleSearchText).toBeInTheDocument();
});

test("redirecting on '/' to '/news'", () => {
  render(<App />, { initialRoutes: ["/"] });
  const circleHomeText = screen.getByRole("heading", {
    name: /F o c u s - t h e - T r u t h -/i,
  });
  expect(circleHomeText).toBeInTheDocument();
});

test("rendering NotFound on no page route", () => {
  render(<App />, { initialRoutes: ["/noPageRoute"] });
  const notFound = screen.getByRole("heading", { name: /page not found/i });
  expect(notFound).toBeInTheDocument();
});
