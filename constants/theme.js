const COLORS = {
  primary: "#003D77",
  secondary: "#444262",
  tertiary: "#FF7754",

  lightPrimary: "#3bc",

  gray: "#83829A",
  gray2: "#C1C0C8",

  background: "#101",
  background2: "#000",
  white: "#F3F4F8",
  lightWhite: "#FAFAFC",

  stockStatus(status) {
    if (status == "outofstock") return this.tertiary
    if (status == "") return this.tertiary
    if (status == "onbackorder") return this.secondary
    if (status == "instock") return this.lightPrimary
  }
};

const FONT = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };