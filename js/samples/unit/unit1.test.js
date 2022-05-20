import { sayHello } from "./unit1";

describe("SayHello Unit Test Suites", () => {
  it("Should should return 'Hello, World'", () => {
    const returned = sayHello();
    expect(returned).toBe("Hello, World");
  });
  it("Should should return 'Hello, John'", () => {
    const returned = sayHello("John");
    expect(returned).toBe("Hello, John");
  });
});
