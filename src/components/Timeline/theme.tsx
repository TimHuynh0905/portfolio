// When using TypeScript 4.x and above
import type {} from "@mui/lab/themeAugmentation";
import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiTimeline: {
      styleOverrides: {
        root: {
          margin: "0",
          width: "100%",
        },
      },
    },
    MuiTimelineItem: {
      styleOverrides: {
        root: {
          height: "150px",
        },
      },
    },
    MuiTimelineContent: {
      styleOverrides: {
        root: {
          padding: "0px 16px !important",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "'Source Sans Pro', sans-serif",
        },
      },
    },
  },
});

export default theme;
