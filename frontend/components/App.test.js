import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import AppFunctional from "./AppFunctional";


// Write your tests here
describe("function test", () => {
  beforeEach(() => {
    render(<AppFunctional />);
  });
  test("text for up directional button is rendered on the screen", () => {
    const text = screen.getByText("UP");
    expect(text).toBeVisible();
  });
  test("the coordinates message is rendered on the screen", () => {
    const coordinates = screen.getByText("Coordinates (2,2)");
    expect(coordinates).toBeVisible();
  });
  test("the steps message is rendered on the screen", () => {
    const steps = screen.getByText("You moved 0 times");
    expect(steps).toBeVisible();
  });
  test("the form submit message renders on the screen", async () => {
    const user = userEvent.setup();
    const input = screen.getByPlaceholderText("type email");
    const submit = screen.getByRole("button", {name: "Submit"});
    await user.type(input, "hello@gmail.com");
    await user.click(submit);
    const message = await screen.findByText("hello win #27");
    expect(message).toBeVisible();
  });
  test("typing on the input results in its value changing to the entered text", async () => {
    const user = userEvent.setup();
    const input = screen.getByPlaceholderText("type email");
    await user.type(input, "goodbye@gmail.com");
    expect(input).toHaveValue("goodbye@gmail.com");
  });
});
