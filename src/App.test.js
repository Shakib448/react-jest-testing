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

  test("initial conditions", () => {
    expect(colorButton).toBeEnabled();
    expect(checkBox).not.toBeChecked();
  });
});
