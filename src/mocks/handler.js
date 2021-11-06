import { rest } from "mws";

const url = "http://localhost/3030/";

export const handlers = [
  rest.get(url + "scopes", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: "Chocolate",
          imagePath: "/images/chocolate.png",
        },
        {
          name: "Salted caramel",
          imagePath: "/images/salted-caramel.png",
        },
      ])
    );
  }),
];
