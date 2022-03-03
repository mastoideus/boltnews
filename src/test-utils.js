import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./store/index";
import { MemoryRouter } from "react-router-dom";

const MemoryRouterWithInitialRoutes = ({ children, initialRoutes }) => {
  return (
    <MemoryRouter initialEntries={initialRoutes}>
      <Provider store={store}>{children}</Provider>
    </MemoryRouter>
  );
};

const customRender = (ui, options) => {
  const initialRoutes =
    options && options.initialRoutes ? options.initialRoutes : ["/"];
  return render(ui, {
    wrapper: (args) =>
      MemoryRouterWithInitialRoutes({
        ...args,
        initialRoutes,
      }),
    ...options,
  });
};

export * from "@testing-library/react";
export { customRender as render };
