"use client";
import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import ISubscriptionItem from "../../interfaces/SubscriptionItem";
import getSubscriberData from "../../utils/getSubscriberData";
import ChipStyled from "../ChipStyled/ChipStyled";
import ChipStyledEnum from "../../interfaces/ChipStyledEnum";
import { useRouter } from "next/navigation";
import CommonBtn from "../CommonBtn/CommonBtn";

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
    employmentOptions,
    country,
    id,
    salaryRange,
    responsibilities,
    requirements,
    benefits,
    idealAdditions,
    aboutStudio,
    theirCulture,
    reasonsToWork,
    logoFile,
    created_at,
  } = getSubscriberData(subscriber);
  const theme = useTheme();

  return (
    <Box
      sx={{
        borderBottom: `1px solid ${theme.palette.gray.strong}`,
        padding: "40px 16px 40px 0",
        cursor: "pointer",
        position: "relative",
      }}
      onClick={() => push(`/info/${id}`)}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
        {/* The comment below is about disabling MUI and TS discord */}
        {/* @ts-ignore comment */}
        <Typography variant="candidateTitle">{jobTitle}</Typography>
        {seniorityLevel && (
          <ChipStyled text={seniorityLevel} type={ChipStyledEnum.corner} />
        )}
        {employmentOptions && (
          <ChipStyled text={employmentOptions} type={ChipStyledEnum.corner} />
        )}
        {country && <ChipStyled text={country} type={ChipStyledEnum.corner} />}
      </Box>

      {/* TODO: Make the component */}
      <Stack sx={{ gap: 1 }}>
        {specialities.toString() !== "" && (
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
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
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
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

        {gameGenres.toString() !== "" && (
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {/* The comment below is about disabling MUI and TS discord */}
            {/* @ts-ignore comment */}
            <Typography variant="candidateOptionText">Game Ganres:</Typography>
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
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
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
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
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
        {salaryRange.toString() !== "[0, 100000]" && (
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {/* The comment below is about disabling MUI and TS discord */}
            {/* @ts-ignore comment */}
            <Typography variant="candidateOptionText">
              Salary Range:
            </Typography>
            {gamePlatforms.map((platform: any) => (
              <ChipStyled
                key={platform}
                text={`€ ${salaryRange[0]} - ${salaryRange[1]}`}
                type={ChipStyledEnum.round}
              />
            ))}
          </Box>
        )}
        <Box position="absolute" top="20px" right="10px" maxWidth="250px">
          <img src={logoFile.url}  style={{maxWidth: '70px', maxHeight: '70px', position: 'absolute', left: '-90px'}}/>
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
    </Box>
  );
}
