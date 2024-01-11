"use client";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import ISubscriptionItem from "../../interfaces/SubscriptionItem";
import getSubscriberData from "../../utils/getSubscriberData";
import ChipStyled from "../ChipStyled/ChipStyled";
import ChipStyledEnum from "../../interfaces/ChipStyledEnum";
import { useRouter } from "next/navigation";
import CommonBtn from "../CommonBtn/CommonBtn";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function SubscriptionItem({
  subscriber,
}: {
  subscriber: ISubscriptionItem;
}) {
  const { push } = useRouter();
  const {
    firstName,
    lastName,
    linkCompany,
    linkJob,
    companyName,
    emailAddress,
    jobTitle,
    category,
    specialities,
    skills,
    gameGenres,
    gameEngines,
    gamePlatforms,
    seniorityLevel,
    artAndAnimationStyles,
    employmentOptions,
    country,
    roleLocation,
    id,
    salaryRange,
    responsibilities,
    requirements,
    jobDescription,
    logoFile,
    created_at,
  } = getSubscriberData(subscriber);
  const theme = useTheme();
  return (
    <Container
      className={montserrat.className}
      sx={{
        borderBottom: `1px solid ${theme.palette.gray.strong}`,
        padding: { xs: "25px", md: "40px 16px" },
        cursor: "pointer",
        position: "relative",
        borderRadius: "14px",
        background: "white",
        maxWidth: "100%!important",
        overflow: "hidden"
      }}
      // onClick={() => push(`/info/${id}`)}
      onClick={() => window.open(`/info/${id}`, "_blank")}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          maxWidth: { xs: "100%", md: "60%"},
          flexWrap: "wrap",
          rowGap: 0,
          columnGap: 1,
          mb: 1,
        }}
      >
        {/* The comment below is about disabling MUI and TS discord */}
        {/* @ts-ignore comment */}
        <Typography variant="candidateTitle">{jobTitle}</Typography>
        {seniorityLevel &&
          seniorityLevel.map(
            (seniority: any, index: number) =>
              seniority && (
                <ChipStyled
                  key={index}
                  text={seniority}
                  type={ChipStyledEnum.corner}
                />
              )
          )}
        {employmentOptions &&
          employmentOptions.map(
            (employmentOption: any, index: number) =>
              employmentOption && (
                <ChipStyled
                  key={index}
                  text={employmentOption}
                  type={ChipStyledEnum.corner}
                />
              )
          )}
        {roleLocation && <ChipStyled text={roleLocation[0]} type={ChipStyledEnum.corner} />}
      </Box>

      {/* TODO: Make the component */}
      <Stack sx={{ gap: 1, position: {xs: "relative", md: "static" } }}>
        {specialities.toString() !== "" && (
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
            {/* The comment below is about disabling MUI and TS discord */}
            {/* @ts-ignore comment */}
            <Typography variant="candidateOptionText">
              Specialisations:
            </Typography>
            {specialities.map((speciality: any) => (
              <ChipStyled
                key={speciality}
                text={speciality}
                type={ChipStyledEnum.round}
              />
            ))}
          </Box>
        )}
        {skills.toString() !== "" && (
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
            {/* The comment below is about disabling MUI and TS discord */}
            {/* @ts-ignore comment */}
            <Typography variant="candidateOptionText">Skills:</Typography>
            {skills.map((skill: any) => (
              <ChipStyled
                key={skill}
                text={skill}
                type={ChipStyledEnum.round}
              />
            ))}
          </Box>
        )}
        {artAndAnimationStyles.toString() !== "" && (
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
            {/* The comment below is about disabling MUI and TS discord */}
            {/* @ts-ignore comment */}
            <Typography variant="candidateOptionText">Art And Animation Styles:</Typography>
            {artAndAnimationStyles.map((style: any) => (
              <ChipStyled
                key={style}
                text={style}
                type={ChipStyledEnum.round}
              />
            ))}
          </Box>
        )}

        {gameGenres.toString() !== "" && (
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
            {/* The comment below is about disabling MUI and TS discord */}
            {/* @ts-ignore comment */}
            <Typography variant="candidateOptionText">Game Genres:</Typography>
            {gameGenres.map((ganre: any) => (
              <ChipStyled
                key={ganre}
                text={ganre}
                type={ChipStyledEnum.round}
              />
            ))}
          </Box>
        )}
        {gameEngines.toString() !== "" && (
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
            {/* The comment below is about disabling MUI and TS discord */}
            {/* @ts-ignore comment */}
            <Typography variant="candidateOptionText">Game Engines:</Typography>
            {gameEngines.map((engine: any) => (
              <ChipStyled
                key={engine}
                text={engine}
                type={ChipStyledEnum.round}
              />
            ))}
          </Box>
        )}
        {gamePlatforms.toString() !== "" && (
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
            {/* The comment below is about disabling MUI and TS discord */}
            {/* @ts-ignore comment */}
            <Typography variant="candidateOptionText">
              Game Platforms:
            </Typography>
            {gamePlatforms.map((platform: any) => (
              <ChipStyled
                key={platform}
                text={platform}
                type={ChipStyledEnum.round}
              />
            ))}
          </Box>
        )}
        {salaryRange.toString() !== "[0, 25000]" && (
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
            {/* The comment below is about disabling MUI and TS discord */}
            {/* @ts-ignore comment */}
            <Typography variant="candidateOptionText">Salary Range:</Typography>
            {salaryRange[0] === "0" && salaryRange[1] === "25000" ? (
              <ChipStyled
                key={"Negotiable"}
                text={"Negotiable"}
                type={ChipStyledEnum.round}
              />
            ) : (
              <ChipStyled
                key={`${salaryRange[0]} - ${salaryRange[1]}`}
                text={`€ ${salaryRange[0]} - ${salaryRange[1]}`}
                type={ChipStyledEnum.round}
              />
            )}
          </Box>
        )}
        <Box
          sx={{ position: { xs: "static", md: "absolute" }, pl: "90px", mt: {xs: "20px", md: "0"} }}
          top="40px"
          right="10px"
          maxWidth="340px"
        >
          <img
              src={logoFile.url}
              style={{
                maxWidth: "70px",
                maxHeight: "70px",
                position: "absolute",
                left: 0,
              }}
          />
          <Typography variant="subtitle2">{`Job ID: ${id}`}</Typography>
          <Typography variant="subtitle2">{`Job Posted: ${new Date(
            created_at
          ).getUTCFullYear()}-${(new Date(created_at).getUTCMonth() + 1)
            .toString()
            .padStart(2, "0")}-${new Date(created_at)
            .getUTCDate()
            .toString()
            .padStart(2, "0")}`}</Typography>
          <Typography variant="subtitle2">{`Category: ${category}`}</Typography>
        </Box>
      </Stack>
      {/* The comment below is about disabling MUI and TS discord */}
      {/* @ts-ignore comment */}
      <Button variant="gray" sx={{ width: "content-fit" }}>
        READ MORE
      </Button>
    </Container>
  );
}
