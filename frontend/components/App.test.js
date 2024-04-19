import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import AppFunctional from "./AppFunctional";


let coordinates, steps, message, submit;
const setElements = (document) => {
  coordinates = document.querySelector("#coordinates");
  steps = document.querySelector('#steps');
  message = document.querySelector('#message');
  submit = document.querySelector('#submit');
};

// Write your tests here
describe("function test", () => {
  beforeEach(() => {
    render(<AppFunctional />);
    setElements(document);
  });
  test("text for up directional button is rendered on the screen", () => {
    const text = screen.getByText("UP");
    expect(text).toBeVisible();
  });
  test("the coordinates message is rendered on the screen", () => {
    expect(coordinates).toBeVisible();
    expect(coordinates).toHaveTextContent('Coordinates (2,2)');
  });
  test("the steps message is rendered on the screen", () => {
    expect(steps).toBeVisible();
    expect(steps).toHaveTextContent('You moved 0 times');
  });
  test("the form submit message renders on the screen", async () => {
    const user = userEvent.setup();
    const input = screen.getByPlaceholderText("type email");
    await user.type(input, "hello@gmail.com");
    await user.click(submit);
    expect(message).toBeVisible();
  });
  test("typing on the input results in its value changing to the entered text", async () => {
    const user = userEvent.setup();
    const input = screen.getByPlaceholderText("type email");
    await user.type(input, "hello@gmail.com");
    expect(input).toHaveValue("hello@gmail.com");
  });
});
