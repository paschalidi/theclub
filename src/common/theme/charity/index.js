import colors from "./colors";

export const charityTheme = {
  breakpoints: ["480px", "768px", "990px", "1220px"],
  space: [0, 5, 10, 15, 20, 25, 30, 40, 56, 71, 91],
  fontSizes: [10, 12, 14, 15, 16, 20, 24, 36, 48, 55, 60, 81],
  fontWeights: [300, 400, 500, 600, 700, 800, 900],
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5,
  },
  letterSpacings: {
    normal: "normal",
    tracked: "0.1em",
    tight: "-0.05em",
    mega: "0.25em",
  },
  fonts: {
    roboto: '"Roboto", sans-serif',
  },
  borders: [0, "1px solid", "2px solid", "4px solid"],
  radius: [0, 3, 5, 10, 15, 20, 25, 50, 60, "50%"],
  colors,
  colorStyles: {
    primary: {
      color: colors.primary,
      borderColor: colors.primary,
      "&:hover": {
        color: colors.primaryHover,
        borderColor: colors.primaryHover,
      },
    },
    secondary: {
      color: colors.secondary,
      borderColor: colors.secondary,
      "&:hover": {
        color: colors.primaryHover,
        borderColor: colors.primaryHover,
      },
    },
    warning: {
      color: colors.yellow,
      borderColor: colors.yellow,
      "&:hover": {
        color: colors.yellowHover,
        borderColor: colors.yellowHover,
      },
    },
    error: {
      color: colors.primaryHover,
      borderColor: colors.primaryHover,
      "&:hover": {
        color: colors.secondary,
        borderColor: colors.secondary,
      },
    },
    primaryWithBg: {
      color: colors.heading,
      backgroundColor: colors.primary,
      borderColor: colors.primary,
      "&:hover": {
        backgroundColor: colors.primaryHover,
        borderColor: colors.primaryHover,
      },
    },
    secondaryWithBg: {
      color: colors.white,
      backgroundColor: colors.secondary,
      borderColor: colors.secondary,
      "&:hover": {
        backgroundColor: colors.primaryHover,
        borderColor: colors.primaryHover,
      },
    },
    warningWithBg: {
      color: colors.heading,
      backgroundColor: colors.yellow,
      borderColor: colors.yellow,
      "&:hover": {
        backgroundColor: colors.yellowHover,
        borderColor: colors.yellowHover,
      },
    },
    errorWithBg: {
      color: colors.white,
      backgroundColor: colors.primaryHover,
      borderColor: colors.primaryHover,
      "&:hover": {
        backgroundColor: colors.secondary,
        borderColor: colors.secondary,
      },
    },
  },
  buttonStyles: {
    textButton: {
      border: 0,
      color: colors.primary,
      padding: 0,
      height: "auto",
      backgroundColor: `${colors.transparent}`,
    },
    outlined: {
      borderWidth: "2px",
      borderStyle: "solid",
      backgroundColor: "transparent",
      color: colors.heading,
      "&:hover": {
        backgroundColor: colors.primary,
        color: colors.heading,
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: colors.primary,
      },
    },
    outlinedLight: {
      borderWidth: "2px",
      borderStyle: "solid",
      backgroundColor: "transparent",
      color: colors.primary,
      "&:hover": {
        backgroundColor: colors.primary,
        color: colors.heading,
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: colors.primary,
      },
    },
    fab: {
      border: "0",
      width: "40px",
      height: "40px",
      padding: 0,
      borderRadius: "50%",
      justifyContent: "center",
      "span.btn-icon": {
        paddingLeft: 0,
      },
    },
    extendedFab: {
      border: "0",
      minWidth: "50px",
      height: "40px",
      borderRadius: "50px",
      justifyContent: "center",
    },
  },
};
