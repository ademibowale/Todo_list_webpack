import { hello } from "./functions";

test ('Does hello exist ?', () => {
  expect(hello).toBeDefined();
})

test ('Does hello output fit ?', () => {
  let x = "Chrispaix";
  expect(hello(x)).toBe("Hello Chrispaix");
})