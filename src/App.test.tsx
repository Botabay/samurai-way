import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  // render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/reduxStore";

test("renders without crashing", () => {
  // const container = document.createElement("div");
  // const root = createRoot(container);
  // root.render(
  //   <Provider store={store}>
  //     <BrowserRouter>
  //       <App />
  //     </BrowserRouter>
  //   </Provider>
  // );
  // root.unmount();
});
