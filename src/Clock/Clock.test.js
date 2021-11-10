import { render, screen } from "@testing-library/react";
import App from "../App";

test("clock content should have a form like '00:00:00'", () => {
  render(<App />);
  const clockElement = screen.getByTestId("clock");
  expect(clockElement.textContent).toMatch(
    /^([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/
  );
  console.log(clockElement);
});
