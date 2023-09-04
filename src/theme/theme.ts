import { createTheme } from "@mui/material/styles";

interface CustomPalette {
  gray: {
    strong: string;
    light: string;
  };
  pink: {
    strong: string;
  };
}

declare module "@mui/material/styles" {
  interface PaletteOptions extends CustomPalette {}
}
declare module "@mui/material/styles/createPalette" {
  interface Palette extends CustomPalette {}
}

const customTheme = createTheme({
  palette: {
    mode: "light",
    gray: {
      strong: "#a1a1a1",
      light: "#e0e0e0",
    },
    pink: {
      strong: "#ef0354",
    },
  },

  typography: {
    /* @ts-ignore comment */
    candidateTitle: {
      fontSize: 22,
      lineHeight: "38px",
      color: "#1a1a1c",
      fontWeight: 700,
    },
    candidateOptionText: {
      fontSize: "14px",
      lineHeight: "17px",
      marginRight: "4px",
      color: "#1a1a1c",
      minWidth: "110px",
    },
    chipCornerText: {
      fontSize: 10,
      color: "#a1a1a1",
      fontWeight: 700,
      lineHeight: "12px",
    },
    chipRoundText: {
      fontSize: 12,
      color: "black",
      fontWeight: 400,
      lineHeight: "24px",
    },
    singleSubscriptionTitle: {
      fontSize: "20px",
      fontWeight: 700,
    },
    singleSubscriptionSubtitle: {
      fontSize: "15px",
      fontWeight: 500,
    },
    singleSubscriptionText: {
      fontSize: "13px",
    },
  },

  components: {
    MuiButton: {
      variants: [
        {
          /* @ts-ignore comment */
          props: { variant: "gray" },
          style: {
            color: "rgba(0, 0, 0, .87)",
            backgroundColor: "#e0e0e0",
          },
        },
        {
          /* @ts-ignore comment */
          props: { variant: "pink" },
          style: {
            color: "white",
            backgroundColor: "#ef0354",
          },
        },
      ],
    },
  },
});

export default customTheme;