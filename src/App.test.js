import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders demo title", () => {
  const { getByText } = render(<App />);
  const title = getByText(/Hello from code formatting demo/i);
  expect(title).toBeInTheDocument();
});
