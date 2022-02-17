const remToPts = require("./helpers").remToPts;
const colors = require("./colors");
const spacings = require("./spacings");

module.exports = {
  theme: {
    flex: {
      negative: -1,
      0: 0,
      1: 1,
      2: 2,
      4: 4,
      8: 8,
    },

    flexDirection: {
      row: "row",
      ["row-reverse"]: "row-reverse",
      col: "column",
      ["col-reverse"]: "column-reverse",
    },

    flexGrow: {
      0: 0,
      1: 1,
    },

    flexShrink: {
      0: 0,
      1: 1,
    },

    justifyContent: {
      start: "flex-start",
      end: "flex-end",
      center: "center",
      between: "space-between",
      around: "space-around",
      evenly: "space-evenly",
    },

    alignItems: {
      start: "flex-start",
      end: "flex-end",
      center: "center",
      baseline: "baseline",
      stretch: "stretch",
    },

    alignContent: {
      start: "flex-start",
      end: "flex-end",
      center: "center",
      between: "space-between",
      around: "space-around",
      stretch: "stretch",
    },

    alignSelf: {
      auto: "auto",
      start: "flex-start",
      end: "flex-end",
      center: "center",
      stretch: "stretch",
      baseline: "baseline",
    },

    flexWrap: {
      ["flex-wrap"]: "wrap",
      ["flex-wrap-reverse"]: "wrap-reverse",
      ["flex-nowrap"]: "nowrap",
    },

    borderStyle: {
      solid: "solid",
      dotted: "dotted",
      dashed: "dashed",
    },

    resizeMode: {
      cover: "cover",
      contain: "contain",
      stretch: "stretch",
      repeat: "repeat",
      center: "center",
    },

    textAlign: {
      left: "left",
      right: "right",
      center: "center",
      justify: "justify",
    },

    textDecoration: {
      underline: "underline",
      ["line-through"]: "line-through",
      ["underline-line-through"]: "underline line-through",
    },

    textTransform: {
      uppercase: "uppercase",
      lowercase: "lowercase",
      capitalize: "capitalize",
      ["normal-case"]: "none",
    },

    textAlignVertical: {
      auto: "auto",
      top: "top",
      bottom: "bottom",
      center: "center",
    },

    writingDirection: {
      ltr: "ltr",
      auto: "auto",
      rtl: "rtl",
    },

    textDecorationStyle: {
      solid: "solid",
      double: "double",
      dotted: "dotted",
      dashed: "dashed",
    },

    position: {
      relative: "relative",
      absolute: "absolute",
    },

    overflow: {
      hidden: "hidden",
      scroll: "scroll",
      visible: "visible",
    },

    display: {
      flex: "flex",
      hidden: "hidden",
    },

    direction: {
      ltr: "ltr",
      rtl: "rtl",
    },

    color: {
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
      transparent: "transparent",
      current: "currentColor",
    },

    margin: {
      auto: "auto",
      ...spacings,
    },

    padding: {
      ...spacings,
    },

    inset: {
      ...spacings,
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      full: "100%",
    },

    width: {
      ...spacings,
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      full: "100%",
    },

    height: {
      ...require("./spacings"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      full: "100%",
    },

    borderRadius: {
      none: 0,
      sm: remToPts("0.125rem"),
      DEFAULT: remToPts("0.25rem"),
      md: remToPts("0.375rem"),
      lg: remToPts("0.5rem"),
      xl: remToPts("0.75rem"),
      "2xl": remToPts("1rem"),
      "3xl": remToPts("1.5rem"),
      full: {
        default: "50%",
        android: 100,
      },
    },

    borderWidth: {
      DEFAULT: 1,
      0: 0,
      2: 2,
      4: 4,
      8: 8,
    },

    opacity: {
      0: 0,
      5: 0.05,
      10: 0.1,
      20: 0.2,
      30: 0.3,
      40: 0.4,
      50: 0.5,
      60: 0.6,
      70: 0.7,
      80: 0.8,
      90: 0.9,
      95: 0.95,
      100: 1,
    },

    zIndex: {
      0: 0,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
    },

    boxShadow: {
      sm: {
        ios: {
          shadowColor: "rgba(0,0,0)",
          shadowOffset: {
            height: 1,
            width: 0,
          },
          shadowOpacity: 0.05,
          shadowRadius: 2,
        },

        android: {
          elevation: 1,
        },

        web: {
          boxShadow: `0 1px 2px 0 rgba(0, 0, 0, 0.05)`,
        },
      },
      DEFAULT: {
        ios: {
          shadowColor: "rgba(0,0,0)",
          shadowOffset: {
            height: 1,
            width: 0,
          },
          shadowOpacity: 0.1,
          shadowRadius: 3,
        },

        android: {
          elevation: 2,
        },

        web: {
          boxShadow: `0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)`,
        },
      },
      md: {
        ios: {
          shadowColor: "rgba(0,0,0)",
          shadowOffset: {
            height: 4,
            width: 0,
          },
          shadowOpacity: 0.1,
          shadowRadius: 6,
        },

        android: {
          elevation: 3,
        },

        web: {
          boxShadow: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`,
        },
      },
      lg: {
        ios: {
          shadowColor: "rgba(0,0,0)",
          shadowOffset: {
            height: 4,
            width: 0,
          },
          shadowOpacity: 0.1,
          shadowRadius: 0,
        },

        android: {
          elevation: 6,
        },

        web: {
          boxShadow: `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)`,
        },
      },
    },

    fontFamily: {
      sans: "ui-sans-serif",
      serif: "ui-serif",
      mono: "ui-monospace",
    },

    fontSize: {
      xs: remToPts("0.75rem"),
      sm: remToPts("0.875rem"),
      base: remToPts("1rem"),
      lg: remToPts("1.125rem"),
      xl: remToPts("1.25rem"),
      "2xl": remToPts("1.5rem"),
      "3xl": remToPts("1.875rem"),
      "4xl": remToPts("2.25rem"),
      "5xl": remToPts("3rem"),
      "6xl": remToPts("3.75rem"),
      "7xl": remToPts("4.5rem"),
      "8xl": remToPts("6rem"),
      "9xl": remToPts("8rem"),
    },

    aspectRatio: {
      none: 0,
      square: 1,
      ["16/9"]: 16 / 9,
      ["4/3"]: 4 / 3,
      ["21/9"]: 21 / 9,
    },

    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },

    lineHeight: {
      tight: remToPts("1.25rem"),
      snug: remToPts("1.375rem"),
      normal: remToPts("1.5rem"),
      relaxed: remToPts("1.625rem"),
      loose: remToPts("2rem"),
      3: remToPts(".75rem"),
      4: remToPts("1rem"),
      5: remToPts("1.25rem"),
      6: remToPts("1.5rem"),
      7: remToPts("1.75rem"),
      8: remToPts("2rem"),
      9: remToPts("2.25rem"),
      10: remToPts("2.5rem"),
    },

    letterSpacing: {
      tighter: remToPts("-0.05rem"),
      tight: remToPts("-0.025rem"),
      normal: remToPts("0rem"),
      wide: remToPts("0.025rem"),
      wider: remToPts("0.05rem"),
      widest: remToPts("0.1rem"),
    },

    translate: {
      ...spacings,
    },

    rotate: {
      0: "0deg",
      1: "1deg",
      2: "2deg",
      3: "3deg",
      6: "6deg",
      12: "12deg",
      30: "30deg",
      45: "45deg",
      90: "90deg",
      180: "180deg",
    },

    scale: {
      0: 0,
      50: 0.5,
      75: 0.75,
      90: 0.9,
      95: 0.95,
      100: 1,
      105: 1.05,
      110: 1.1,
      125: 1.25,
      150: 1.5,
    },

    skew: {
      0: "0deg",
      1: "1deg",
      2: "2deg",
      3: "3deg",
      6: "6deg",
      12: "12deg",
    },

    platformColors: {
      blue: {
        ios: "systemBlue",
        android: "?attr/systemBlue",
        default: colors.blue["500"],
      },
      brown: {
        ios: "systemBrown",
        android: "?attr/systemBrown",
        default: "brown",
      },
      green: {
        ios: "systemGreen",
        android: "?attr/systemGreen",
        default: colors.green["500"],
      },
      indigo: {
        ios: "systemIndigo",
        android: "?attr/systemIndigo",
        default: colors.indigo["500"],
      },
      orange: {
        ios: "systemOrange",
        android: "?attr/systemOrange",
        default: colors.orange["500"],
      },
      pink: {
        ios: "systemPink",
        android: "?attr/systemPink",
        default: colors.pink["500"],
      },
      purple: {
        ios: "systemPurple",
        android: "?attr/systemPurple",
        default: colors.purple["500"],
      },
      red: {
        ios: "systemRed",
        android: "?attr/systemRed",
        default: colors.red["500"],
      },
      teal: {
        ios: "systemTeal",
        android: "?attr/systemTeal",
        default: colors.teal["500"],
      },
      yellow: {
        ios: "systemYellow",
        android: "?attr/systemYellow",
        default: colors.yellow["500"],
      },
      ["gray-1"]: {
        ios: "systemGray",
        android: "?attr/systemGray",
        default: colors.gray["600"],
      },
      ["gray-2"]: {
        ios: "systemGray2",
        android: "?attr/systemGray2",
        default: colors.gray["500"],
      },
      ["gray-3"]: {
        ios: "systemGray3",
        android: "?attr/systemGray3",
        default: colors.gray["400"],
      },
      ["gray-4"]: {
        ios: "systemGray4",
        android: "?attr/systemGray4",
        default: colors.gray["300"],
      },
      ["gray-5"]: {
        ios: "systemGray5",
        android: "?attr/systemGray5",
        default: colors.gray["200"],
      },
      ["gray-6"]: {
        ios: "systemGray6",
        android: "?attr/systemGray6",
        default: colors.gray["100"],
      },
      clear: {
        ios: "clear",
        android: "?attr/clear",
        default: colors.transparent,
      },
      label: {
        ios: "label",
        android: "?attr/label",
        default: colors.gray["900"],
      },
      ["label-2"]: {
        ios: "secondaryLabel",
        android: "?attr/secondaryLabel",
        default: colors.gray["700"],
      },
      ["label-3"]: {
        ios: "tertiaryLabel",
        android: "?attr/tertiaryLabel",
        default: colors.gray["500"],
      },
      ["label-4"]: {
        ios: "quaternaryLabel",
        android: "?attr/quaternaryLabel",
        default: colors.gray["400"],
      },

      ["fill"]: {
        ios: "systemFill",
        android: "?attr/systemFill",
        default: colors.gray["200"],
      },
      ["fill-2"]: {
        ios: "secondarySystemFill",
        android: "?attr/secondarySystemFill",
        default: colors.gray["300"],
      },
      ["fill-3"]: {
        ios: "tertiarySystemFill",
        android: "?attr/tertiarySystemFill",
        default: colors.gray["400"],
      },
      ["fill-4"]: {
        ios: "quaternarySystemFill",
        android: "?attr/quaternarySystemFill",
        default: colors.gray["400"],
      },

      ["placeholder"]: {
        ios: "placeholderText",
        android: "?attr/placeholderText",
        default: colors.gray["700"],
      },

      ["bg"]: {
        ios: "systemBackground",
        android: "?attr/systemBackground",
        default: colors.gray["100"],
      },
      ["bg-2"]: {
        ios: "secondarySystemBackground",
        android: "?attr/secondarySystemBackground",
        default: colors.gray["200"],
      },
      ["bg-3"]: {
        ios: "tertiarySystemBackground",
        android: "?attr/tertiarySystemBackground",
        default: colors.gray["300"],
      },

      ["grouped-bg"]: {
        ios: "systemGroupedBackground",
        android: "?attr/systemGroupedBackground",
        default: colors.gray["100"],
      },
      ["grouped-bg-2"]: {
        ios: "secondarySystemGroupedBackground",
        android: "?attr/secondarySystemGroupedBackground",
        default: colors.gray["200"],
      },
      ["grouped-bg-3"]: {
        ios: "tertiarySystemGroupedBackground",
        android: "?attr/tertiarySystemGroupedBackground",
        default: colors.gray["300"],
      },

      ["separator"]: {
        ios: "separator",
        android: "?attr/separator",
        default: colors.gray["100"],
      },
      ["opaque-separator"]: {
        ios: "opaqueSeparator",
        android: "?attr/opaqueSeparator",
        default: colors.gray["100"],
      },

      ["link"]: {
        ios: "link",
        android: "?attr/link",
        default: colors.blue["400"],
      },
      ["text-dark"]: {
        ios: "darkText",
        android: "?attr/darkText",
        default: colors.gray["900"],
      },
      ["text-light"]: {
        ios: "lightText",
        android: "?attr/lightText",
        default: colors.gray["400"],
      },
    },

    textShadow: {
      sm: {
        default: {
          textShadowColor: "rgba(0,0,0)",
          textShadowOffset: {
            height: 1,
            width: 0,
          },
          textShadowOpacity: 0.05,
          textShadowRadius: 2,
        },
      },
      DEFAULT: {
        default: {
          textShadowColor: "rgba(0,0,0)",
          textShadowOffset: {
            height: 1,
            width: 0,
          },
          textShadowOpacity: 0.1,
          textShadowRadius: 3,
        },
      },
      md: {
        default: {
          textShadowColor: "rgba(0,0,0)",
          textShadowOffset: {
            height: 4,
            width: 0,
          },
          textShadowOpacity: 0.1,
          textShadowRadius: 6,
        },
      },
      lg: {
        default: {
          textShadowColor: "rgba(0,0,0)",
          textShadowOffset: {
            height: 4,
            width: 0,
          },
          textShadowOpacity: 0.1,
          textShadowRadius: 0,
        },
      },
    },
  },

  purge: {
    whitelist: [],
    files: `**/*.{ts,tsx,js,jsx}`,
  },
};
