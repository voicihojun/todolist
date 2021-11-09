import { render, screen } from "@testing-library/react";
import App from "../App";

test("clock content should have a form like '00:00:00'", () => {
  render(<App />);
  const linkElement = screen.getByText("aa");
  expect(linkElement).toBeInTheDocument();
});
