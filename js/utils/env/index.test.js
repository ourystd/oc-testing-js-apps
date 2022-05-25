import { isInTestEnv } from ".";

describe("isInTestEnv Unit Tests Suite", () => {
  it("Should return true", () => {
    expect(isInTestEnv()).toBe(true);
  });

  it("Should return false", () => {
    process.env.NODE_ENV = "prod";
    expect(isInTestEnv()).toBe(false);
  });
});
