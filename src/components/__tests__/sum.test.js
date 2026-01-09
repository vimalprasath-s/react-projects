import { sum } from "../sum";

test("Sum of two numbers", () => {
  const result = sum(5, 5);
  expect(result).toBe(10);
});
