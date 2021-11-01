import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("testing color button", () => {
  let colorButton;
  let checkBox;
  beforeAll(() => {
    render(<App />);
    colorButton = screen.getByRole("button", { name: /change to blue/i });
    checkBox = screen.getByRole("checkbox");
  });

  it("button has correct initial color", () => {
    expect(colorButton).toHaveStyle({
      backgroundColor: "red",
    });

    fireEvent.click(colorButton);

    expect(colorButton).toHaveStyle({
      backgroundColor: "blue",
    });

    expect(colorButton.textContent).toBe("Change to red");
  });
  it("initial conditions", () => {
    expect(colorButton).toBeEnabled();
    expect(checkBox).not.toBeChecked();
  });
  it("checkbox disable button on first click and enables on second click", () => {
    render(<App />);
    const check = screen.getByRole("checkbox");
    const button = screen.getByRole("button");

    fireEvent.click(check);
    expect(button).toBeDisabled();

    fireEvent.click(check);
    expect(button).toBeEnabled();
  });
});
