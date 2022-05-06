const palette = {
  black: "black",
  white: "white",
  whiteDis: "#C5D8F7",
  whiteDiv: "#CCCCCC",
  gray: "#555555",
  blue: "#3A7CE0",
  blueDark: "#0866AC",
  green: "#A8DB39",
};

const theme = {
  breakpoints: {
    smallPhone: 0,
    phone: 321,
    tablet: 768,
  },

  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },

  textVariants: {
    nav: {
      fontFamily: "Segoe-UI-Semi-Light",
      fontSize: 26,
      fontWeight: "400",
    },
    h1: {
      fontFamily: "Segoe-UI-Light",
      fontSize: 34,
      fontWeight: "300",
    },
    listTitle: {
      fontFamily: "Segoe-UI-Semi-Light",
      fontSize: 12,
      fontWeight: "400",
      color: palette.black,
    },
    listParagraph: {
      fontFamily: "Segoe-UI-Light",
      fontSize: 10.5,
      fontWeight: "400",
      color: palette.gray,
    },
    info: {
      fontFamily: "Segoe-UI",
      fontSize: 12,
      fontWeight: "100",
      color: palette.black,
    },
    title: {
      fontFamily: "Segoe-UI-Semi-Light",
      fontSize: 20,
      fontWeight: "500",
      color: palette.white,
    },
    subTitle: {
      fontFamily: "Segoe-UI-Semi-Light",
      fontSize: 16,
      fontWeight: "500",
      color: palette.white,
      opacity: 0.5,
    },
    p: {
      fontFamily: "Segoe-UI-Light",
      fontSize: 16,
      fontWeight: "400",
      color: palette.black,
    },

    pBold: {
      fontFamily: "Segoe-UI",
      fontSize: 16,
      fontWeight: "500",
      color: palette.black,
    },
  },
};

export { theme, palette };
