const build = require("./build");

const config = {
  theme: {
    width: {
      tiny: 0.25,
    },
    extend: {
      color: {
        awesome: 'blue',
      },
      fontFamily: {
        hi: "321",
      },
    },
  },
};

test("build fn works", () => {
  const output = build(config);
  expect(output["font-hi"]).toEqual({ fontFamily: "321" });
  expect(output["bg-awesome"]).toEqual({ backgroundColor: "blue" });

  // override width
  expect(output["w-tiny"]).toEqual({ width: 0.25 });
  expect(output["w-1/2"]).toEqual(undefined);
});
