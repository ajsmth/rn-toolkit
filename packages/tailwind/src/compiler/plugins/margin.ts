import createPlugin from "./createPlugin";

const pluginConfig = {
  name: "margin",

  properties: {
    ["m"]: ["margin"],
    ["mt"]: ["marginTop"],
    ["mb"]: ["marginBottom"],
    ["ml"]: ["marginLeft"],
    ["mr"]: ["marginRight"],
    ["mx"]: ["marginHorizontal"],
    ["my"]: ["marginVertical"],
    ["ms"]: ["marginStart"],
    ["me"]: ["marginEnd"],
  },

  includeNegativeValues: true,

  defaultValues: {
    "m-auto": {
      margin: "auto",
    },

    ["mx-auto"]: {
      marginHorizontal: "auto",
    },

    ["my-auto"]: {
      marginVertical: "auto",
    },
  },
};

const marginPlugin = createPlugin(pluginConfig);

export { marginPlugin as plugin, pluginConfig as config };
