/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";

import { getByTestId } from "@testing-library/dom";

import { router } from "./index";

describe("Router Integration Test Suites", () => {
  it("should render the sign in page", async () => {
    document.body.innerHTML = `
            <div id="root"></div>
        `;

    await router();

    expect(getByTestId(document.body, "sign-in-form-title")).toHaveTextContent(
      "Veuillez vous connecter"
    );
  });

  it("should render the sensors home page", async () => {
    document.body.innerHTML = `
            <div id="root"></div>
        `;

    document.location = "/#/home";

    await router();

    expect(getByTestId(document.body, "home-sensors-title")).toHaveTextContent(
      "Vos capteurs"
    );
  });

  it("should render the sensor page", async () => {
    document.body.innerHTML = `
            <div id="root"></div>
        `;

    document.location = "/#/facade-details";

    await router();

    expect(getByTestId(document.body, "sensor-detail-title")).toHaveTextContent(
      "Détails du capteur #7"
    );
  });

  it("should render the add sensor page", async () => {
    document.body.innerHTML = `
            <div id="root"></div>
        `;

    document.location = "/#/add-sensor";

    await router();

    expect(getByTestId(document.body, "add-sensor-title")).toHaveTextContent(
      "Ajout d'un nouveau capteur"
    );
  });
});

describe("Login Form Integration Tests Suite", () => {
  it("Should display email error message", async () => {
    document.location = "/";
    document.body.innerHTML = `<div id="root"></div`;
    await router();

    document.querySelector("#user-email").value = "thomas@tomas.com";
    document.querySelector("form.sign-in-form").submit();

    expect(getByTestId(document.body, "user-email-error-msg")).not.toHaveClass(
      "hidden"
    );
  });

  it("Should hide email error message & display pwd one's", async () => {
    document.querySelector("#user-email").value = "thomas@facadia.com";
    document.querySelector("form.sign-in-form").submit();

    expect(getByTestId(document.body, "user-email-error-msg")).toHaveClass(
      "hidden"
    );
    expect(
      getByTestId(document.body, "user-password-error-msg")
    ).not.toHaveClass("hidden");
  });

  it("Should hide pwd error message", async () => {
    document.querySelector("#user-email").value = "thomas@facadia.com";
    document.querySelector("#user-password").value = "any_wrong_pwd";
    document.querySelector("form.sign-in-form").submit();

    expect(
      getByTestId(document.body, "user-password-error-msg")
    ).not.toHaveClass("hidden");
  });

  it("Shouldn't display any error message", async () => {
    document.querySelector("#user-email").value = "thomas@facadia.com";
    document.querySelector("#user-password").value = "azerty";
    document.querySelector("form.sign-in-form").submit();

    expect(getByTestId(document.body, "user-email-error-msg")).toHaveClass(
      "hidden"
    );
    expect(getByTestId(document.body, "user-password-error-msg")).toHaveClass(
      "hidden"
    );
  });
});
