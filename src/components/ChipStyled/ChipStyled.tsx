import { Box, Typography, useTheme } from "@mui/material";
import ChipStyledEnum from "../../interfaces/ChipStyledEnum";

interface Props {
  text: string;
  type: ChipStyledEnum;
}

export default function ChipStyled({ text, type }: Props) {
  const theme = useTheme();

  return (
    <Box
      sx={() => {
        if (type === ChipStyledEnum.corner) {
          return {
            border: `1px solid ${theme.palette.gray.strong}`,
            borderRadius: "3px",
            width: "fit-content",
            height: "fit-content",
            padding: "3px 6px",
            lineHeight: "12px",
          };
        } else if (type === ChipStyledEnum.round) {
          return {
            border: "1px solid black",
            width: "fit-content",
            height: "fit-content",
            lineHeight: "24px",
            padding: "0 12px",
            borderRadius: "13px",
          };
        } else if (type === ChipStyledEnum.employmentOptions) {
          return {
            border: "1px solid black",
            width: "fit-content",
            height: "fit-content",
            lineHeight: "24px",
            padding: "0 12px",
            borderRadius: "13px",
            position: "relative",
            "::before": {
              content: '"icon here for employmentOptions"',
              color: "red",
              position: "absolute",
              bottom: -20,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: -1,
            },
          };
        } else if (type === ChipStyledEnum.workPreferences) {
          return {
            border: "1px solid black",
            width: "fit-content",
            height: "fit-content",
            lineHeight: "24px",
            padding: "0 12px",
            borderRadius: "13px",
            position: "relative",
            "::before": {
              content: '"icon here for workPreferences"',
              color: "red",
              position: "absolute",
              bottom: -20,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: -1,
            },
          };
        } else {
          return null;
        }
      }}
    >
      {type === ChipStyledEnum.corner && (
        /* The comment below is about disabling MUI and TS discord */
        /* @ts-ignore comment */
        <Typography variant="chipCornerText"> {text} </Typography>
      )}
      {(type === ChipStyledEnum.round ||
        type === ChipStyledEnum.employmentOptions ||
        type === ChipStyledEnum.workPreferences) && (
        /* The comment below is about disabling MUI and TS discord */
        /* @ts-ignore comment */
        <Typography variant="chipRoundText"> {text} </Typography>
      )}
    </Box>
  );
}
