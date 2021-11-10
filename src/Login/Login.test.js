import { render, screen } from "@testing-library/react";
import App from "../App";
import Login from "./Login";

test("login button text content", () => {
  render(<App />);
  const loginButtonElement = screen.getByTestId("login-button", {
    name: "Log in",
  });
  expect(loginButtonElement.textContent).toEqual("Log in");
});

test("login input should be empty", () => {
  render(<Login />);
  const loginInputElement = screen.getByTestId("login-input");
  expect(loginInputElement.textContent).toBeFalsy();
});
