import { render, screen, waitFor } from "@testing-library/react";

import Options from "../Options";

describe("Server is working well as I expected", () => {
  it("Displays images from each scoop the server", async () => {
    render(<Options optionsType="scoops" />);

    const scoopImages = await screen.findAllByRole("img", {
      name: /scoop$/i,
    });
    expect(scoopImages).toHaveLength(2);

    const altText = scoopImages.map((element) => element.alt);

    expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
  });
  it("Display images from each toppings the server", async () => {
    render(<Options optionsType="toppings" />);
    const toppingsImages = await screen.findAllByRole("img", {
      name: /toppings$/i,
    });
    expect(toppingsImages).toHaveLength(3);

    const altText = toppingsImages.map((el) => el.alt);

    expect(altText).toEqual([
      "Cherries toppings",
      "M&Ms toppings",
      "Hot fudge toppings",
    ]);
  });
});
