import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SummaryForm from "../SummaryForm";

describe("Summary Form testing", () => {
  it("initial condition", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });

    expect(checkbox).not.toBeDisabled();

    const confirmButton = screen.getByRole("button", {
      name: /confirm order/i,
    });
    expect(confirmButton).toBeDisabled();
  });

  it("checkbox disables button on first click and enables on second click", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });

    expect(checkbox).not.toBeDisabled();

    const confirmButton = screen.getByRole("button", {
      name: /confirm order/i,
    });
    userEvent.click(checkbox);
    expect(confirmButton).toBeEnabled();

    userEvent.click(checkbox);
    expect(confirmButton).toBeDisabled();
  });

  it("popover responds to hover", async () => {
    render(<SummaryForm />);

    const nullPopOver = screen.queryByText(
      /no ice cream will actually be delivered/i
    );
    expect(nullPopOver).not.toBeInTheDocument();

    const termsAndConditions = screen.getByText(/terms and conditions/i);

    userEvent.hover(termsAndConditions);

    const popover = screen.getByText(
      /No ice cream will actually be delivered/i
    );
    expect(popover).toBeInTheDocument();

    userEvent.unhover(termsAndConditions);

    await waitFor(() => {
      screen.queryByText(/no ice cream will actually be delivered/i);
    });
  });
});
