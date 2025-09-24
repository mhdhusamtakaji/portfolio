import { createTheme } from "@mui/material/styles";

// Define your modern custom colors
const colors = {
  // Modern Black Palette
  black: "#0a0a0a",
  blackSecondary: "#1a1a1a",
  blackTertiary: "#2a2a2a",
  blackQuaternary: "#3a3a3a",

  // Modern Gold Palette (for dark theme)
  gold: "#FFD700",
  goldSecondary: "#FFA500",
  goldTertiary: "#B8860B",
  goldDark: "#DAA520",
  goldLight: "#FFF8DC",

  // Dark Gold Palette (for light theme)
  darkGold: "#B8860B", // Dark goldenrod
  darkGoldSecondary: "#DAA520", // Goldenrod
  darkGoldTertiary: "#CD853F", // Peru
  darkGoldDark: "#8B6914", // Darker gold
  darkGoldLight: "#F5DEB3", // Wheat

  // Gradient Colors
  gradientStart: "#FFD700",
  gradientMiddle: "#FFA500",
  gradientEnd: "#B8860B",

  // Light theme gradients (darker gold)
  lightGradientStart: "#B8860B",
  lightGradientMiddle: "#DAA520",
  lightGradientEnd: "#8B6914",

  // Neutral Colors
  white: "#ffffff",
  whiteSecondary: "#f8f9fa",
  gray: "#6c757d",
  grayLight: "#e9ecef",
  grayDark: "#343a40",

  // Status Colors
  success: "#28a745",
  warning: "#ffc107",
  error: "#dc3545",
  info: "#17a2b8",
};

// Define themes for light and dark modes
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: colors.darkGold,
      light: colors.darkGoldLight,
      dark: colors.darkGoldDark,
      contrastText: colors.white,
    },
    secondary: {
      main: colors.darkGoldSecondary,
      light: colors.darkGoldLight,
      dark: colors.darkGoldTertiary,
      contrastText: colors.white,
    },
    background: {
      default: colors.white,
      paper: colors.whiteSecondary,
    },
    text: {
      primary: colors.black,
      secondary: colors.grayDark,
    },
    action: {
      hover: colors.grayLight,
    },
    success: {
      main: colors.success,
    },
    warning: {
      main: colors.warning,
    },
    error: {
      main: colors.error,
    },
    info: {
      main: colors.info,
    },
  },
  typography: {
    fontFamily: "'Inter', 'Poppins', 'Roboto', sans-serif",
    h1: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontWeight: 600,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    "none",
    "0px 2px 4px rgba(0, 0, 0, 0.1)",
    "0px 4px 8px rgba(0, 0, 0, 0.12)",
    "0px 8px 16px rgba(0, 0, 0, 0.15)",
    "0px 16px 32px rgba(0, 0, 0, 0.2)",
    "0px 32px 64px rgba(0, 0, 0, 0.25)",
    "0px 2px 4px rgba(0, 0, 0, 0.1)",
    "0px 4px 8px rgba(0, 0, 0, 0.12)",
    "0px 8px 16px rgba(0, 0, 0, 0.15)",
    "0px 16px 32px rgba(0, 0, 0, 0.2)",
    "0px 32px 64px rgba(0, 0, 0, 0.25)",
    "0px 2px 4px rgba(0, 0, 0, 0.1)",
    "0px 4px 8px rgba(0, 0, 0, 0.12)",
    "0px 8px 16px rgba(0, 0, 0, 0.15)",
    "0px 16px 32px rgba(0, 0, 0, 0.2)",
    "0px 32px 64px rgba(0, 0, 0, 0.25)",
    "0px 2px 4px rgba(0, 0, 0, 0.1)",
    "0px 4px 8px rgba(0, 0, 0, 0.12)",
    "0px 8px 16px rgba(0, 0, 0, 0.15)",
    "0px 16px 32px rgba(0, 0, 0, 0.2)",
    "0px 32px 64px rgba(0, 0, 0, 0.25)",
    "0px 2px 4px rgba(0, 0, 0, 0.1)",
    "0px 4px 8px rgba(0, 0, 0, 0.12)",
    "0px 8px 16px rgba(0, 0, 0, 0.15)",
    "0px 16px 32px rgba(0, 0, 0, 0.2)",
    "0px 32px 64px rgba(0, 0, 0, 0.25)",
  ],
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: colors.gold,
      light: colors.goldLight,
      dark: colors.goldDark,
      contrastText: colors.black,
    },
    secondary: {
      main: colors.goldSecondary,
      light: colors.goldLight,
      dark: colors.goldTertiary,
      contrastText: colors.white,
    },
    background: {
      default: colors.black,
      paper: colors.blackSecondary,
    },
    text: {
      primary: colors.white,
      secondary: colors.grayLight,
    },
    action: {
      hover: colors.blackTertiary,
    },
    success: {
      main: colors.success,
    },
    warning: {
      main: colors.warning,
    },
    error: {
      main: colors.error,
    },
    info: {
      main: colors.info,
    },
  },
  typography: {
    fontFamily: "'Inter', 'Poppins', 'Roboto', sans-serif",
    h1: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontWeight: 600,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    "none",
    "0px 2px 4px rgba(255, 215, 0, 0.1)",
    "0px 4px 8px rgba(255, 215, 0, 0.12)",
    "0px 8px 16px rgba(255, 215, 0, 0.15)",
    "0px 16px 32px rgba(255, 215, 0, 0.2)",
    "0px 32px 64px rgba(255, 215, 0, 0.25)",
    "0px 2px 4px rgba(255, 215, 0, 0.1)",
    "0px 4px 8px rgba(255, 215, 0, 0.12)",
    "0px 8px 16px rgba(255, 215, 0, 0.15)",
    "0px 16px 32px rgba(255, 215, 0, 0.2)",
    "0px 32px 64px rgba(255, 215, 0, 0.25)",
    "0px 2px 4px rgba(255, 215, 0, 0.1)",
    "0px 4px 8px rgba(255, 215, 0, 0.12)",
    "0px 8px 16px rgba(255, 215, 0, 0.15)",
    "0px 16px 32px rgba(255, 215, 0, 0.2)",
    "0px 32px 64px rgba(255, 215, 0, 0.25)",
    "0px 2px 4px rgba(255, 215, 0, 0.1)",
    "0px 4px 8px rgba(255, 215, 0, 0.12)",
    "0px 8px 16px rgba(255, 215, 0, 0.15)",
    "0px 16px 32px rgba(255, 215, 0, 0.2)",
    "0px 32px 64px rgba(255, 215, 0, 0.25)",
    "0px 2px 4px rgba(255, 215, 0, 0.1)",
    "0px 4px 8px rgba(255, 215, 0, 0.12)",
    "0px 8px 16px rgba(255, 215, 0, 0.15)",
    "0px 16px 32px rgba(255, 215, 0, 0.2)",
    "0px 32px 64px rgba(255, 215, 0, 0.25)",
  ],
});

export { lightTheme, darkTheme };
