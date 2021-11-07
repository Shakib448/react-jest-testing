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
});
