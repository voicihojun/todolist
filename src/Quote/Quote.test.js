import { findRandomNumber } from "./Quote";

test("random number should be less than [quotes array length - 1]", () => {
  expect(findRandomNumber(10)).toBeLessThan(10);
});
