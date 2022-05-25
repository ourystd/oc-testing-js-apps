import { data } from "../../../data/mock-homepage-data.js";
import { isInTestEnv } from "../env";
import { retrieveSensorsData } from "./sensorsApi";

describe("retrieveSensorsData Unit Tests Suite", () => {
  it("Should returne mocked data", () => {
    if (isInTestEnv) {
      expect(retrieveSensorsData()).toEqual(data.facades);
    }
  });
});
