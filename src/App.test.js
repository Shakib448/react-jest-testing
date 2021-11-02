import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { replaceCamelWithSpaces } from "./App";

describe("testing color button", () => {
  it("button has correct initial color", () => {
    render(<App />);
    const colorButton = screen.getByRole("button", {
      name: /change to midnight blue/i,
    });

    expect(colorButton).toHaveStyle({
      backgroundColor: "MediumVioletRed",
    });

    fireEvent.click(colorButton);

    expect(colorButton).toHaveStyle({
      backgroundColor: "MidnightBlue",
    });

    expect(colorButton).toHaveTextContent("Change to Medium Violet Red");
  });
  it("initial conditions", () => {
    render(<App />);
    const colorButton = screen.getByRole("button", {
      name: /change to midnight blue/i,
    });
    const checkBox = screen.getByRole("checkbox");

    expect(colorButton).toBeEnabled();
    expect(checkBox).not.toBeChecked();
  });
  it("checkbox disable button on first click and enables on second click", () => {
    render(<App />);
    const checkBox = screen.getByRole("checkbox", { name: /disable button/i });
    const colorButton = screen.getByRole("button", {
      name: /change to midnight blue/i,
    });

    fireEvent.click(checkBox);
    expect(colorButton).toBeDisabled();

    fireEvent.click(checkBox);
    expect(colorButton).toBeEnabled();
  });
  it("disable button has gray background an reverts to red", () => {
    render(<App />);
    const checkBox = screen.getByRole("checkbox", { name: /disable button/i });
    const colorButton = screen.getByRole("button", {
      name: /change to midnight blue/i,
    });

    fireEvent.click(checkBox);
    expect(colorButton).toHaveStyle("backgroundColor : gray");

    fireEvent.click(checkBox);
    expect(colorButton).toHaveStyle("backgroundColor :MediumVioletRed");
  });

  it("disable button has gray background an reverts to blue", () => {
    render(<App />);
    const checkBox = screen.getByRole("checkbox", { name: /disable button/i });
    const colorButton = screen.getByRole("button", {
      name: /change to midnight blue/i,
    });

    fireEvent.click(colorButton);

    fireEvent.click(checkBox);
    expect(colorButton).toHaveStyle("backgroundColor : gray");

    fireEvent.click(checkBox);
    expect(colorButton).toHaveStyle("backgroundColor : MidnightBlue");
  });
});

describe("spaces before camel-case capital letters", () => {
  it("Works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });

  it("Works for one inner capital letter", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });
  it("Works for multiple inner capital letters", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
