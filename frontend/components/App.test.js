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
  test("text for down directional button is rendered on the screen", async () => {
    const text2 = screen.getByText("DOWN")
    expect(text2).toBeVisible();
  });
  test("the coordinates message is rendered on the screen", () => {
    const coordinates = screen.getByText("Coordinates (2,2)");
    expect(coordinates).toBeVisible();
  });
  test("the steps message is rendered on the screen", () => {
    const steps = screen.getByText("You moved 0 times");
    expect(steps).toBeVisible();
  });
  test("typing on the input results in its value changing to the entered text", async () => {
    const user = userEvent.setup();
    const input = screen.getByPlaceholderText("type email");
    await user.type(input, "goodbye@gmail.com");
    expect(input).toHaveValue("goodbye@gmail.com");
  });
});
