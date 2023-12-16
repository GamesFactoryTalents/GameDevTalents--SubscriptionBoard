import { createTheme } from "@mui/material/styles";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});


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
    fontFamily: montserrat.style.fontFamily,
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
      color: "#767677",
      minWidth: "120px",
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
    subtitle2: {
      fontSize: "14px",
      lineHeight: "17px",
      fontWeight: 600,
      marginBottom: "7px",
    },
    subtitle3: {
      fontSize: "14px",
      lineHeight: "17px",
      fontWeight: 600,
      marginBottom: "32px",
      display: "block",
    }
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
            fontWeight: 700,
            marginTop: "20px",
          },
        },
        {
          /* @ts-ignore comment */
          props: { variant: "pink" },
          style: {
            color: "white",
            backgroundColor: "#ef0354",
            "&:hover": {
              backgroundColor: "#D9D9D9"
            },
          },
        },
      ],
    },
    MuiFormControl: {
      defaultProps: {
        // props
      },
      styleOverrides: {
        root: {
            "& .MuiFormLabel-root": {
              fontSize: "16px",
              fontWeight: "400",
              color: "#1a1a1c",
              transform: "translate(8px,6px) scale(1)",
            },
            "& .MuiInputBase-root": {
              padding: "7px!important",
              borderRadius: "8px", 
            },
            "& .MuiInputBase-input": {
              height: "1.1876em",
              padding: "0"
            }
          }
        }
    }
  },
});

export default customTheme;
