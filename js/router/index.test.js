/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { getByTestId } from "@testing-library/dom";
import { router } from ".";

beforeAll(() => {
  document.body.innerHTML = `<div id="root"></div>`;
});

const pages = [
  {
    name: "Login",
    path: "/",
    text: "Veuillez vous connecter",
    testId: "sign-in-form-title",
  },
  {
    name: "Sensors Listing",
    path: "/#/home",
    text: "Vos capteurs",
    testId: "home-sensors-title",
  },
];

describe("Routing Integration Tests Suite", () => {
  pages.forEach((page) => {
    it(`Should render ${page.name} Page`, async () => {
      document.location = page.path;

      await router();

      expect(getByTestId(document.body, page.testId)).toHaveTextContent(
        page.text
      );
    });
  });
});
