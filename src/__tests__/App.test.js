import { render, screen } from "@testing-library/react";
import App from "../App";

it("renders app header", () => {
  render(<App/>);
  expect(screen.getByText("Leap Test App")).toBeInTheDocument();
});

/* Optional: add some tests! */
