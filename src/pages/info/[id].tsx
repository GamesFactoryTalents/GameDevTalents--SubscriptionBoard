import { Box, Container, Stack, Typography } from "@mui/material";
import ISubscriptionItem from "../../interfaces/SubscriptionItem";
import getOneSubscriptionById from "../../utils/getOneSubscriptionById";
import { Montserrat } from "next/font/google";
import ChipStyled from "../../components/ChipStyled/ChipStyled";
import ChipStyledEnum from "../../interfaces/ChipStyledEnum";
import customTheme from "../../theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import CommonBtn from "../../components/CommonBtn/CommonBtn";

interface Props {
  id: string;
  info: ISubscriptionItem;
}

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const InfoPage = ({ id, info }: Props) => {
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
    salaryRange,
    responsibilities,
    requirements,
    benefits,
    idealAdditions,
    aboutStudio,
    theirCulture,
    reasonsToWork,
    logoFile,
    workPreferences,
    created_at,
  } = info;
  return (
    <ThemeProvider theme={customTheme}>
      <Container
        className={montserrat.className}
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          {/* @ts-ignore comment */}
          <Typography variant="singleSubscriptionTitle">
            {info.jobTitle}
          </Typography>
          {info.employmentOptions && (
            <ChipStyled
              text={info.employmentOptions}
              type={ChipStyledEnum.corner}
            />
          )}

          {info.country && (
            <ChipStyled text={info.country} type={ChipStyledEnum.corner} />
          )}
        </Box>

        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          {/* @ts-ignore comment */}
          <Typography variant="singleSubscriptionTitle">
            {"Studio's Preferred Countries of Hire"}
          </Typography>
          <ChipStyled text={info.country} type={ChipStyledEnum.corner} />
        </Box>

        <Stack sx={{ gap: 1 }}>
          <Box sx={{ display: "flex", gap: 1, flexDirection: "column" }}>
            {/* @ts-ignore comment */}
            <Typography variant="singleSubscriptionSubtitle">
              {"Responsiolities:"}
            </Typography>
            {/* @ts-ignore comment */}
            <Typography variant="singleSubscriptionText">
              • Empower the team for success by removing obstacles, managing
              risks, and may be even making coffee
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1, flexDirection: "column" }}>
            {/* @ts-ignore comment */}
            <Typography variant="singleSubscriptionSubtitle">
              {"Requirements:"}
            </Typography>
            {/* @ts-ignore comment */}
            <Typography variant="singleSubscriptionText">
              • Empower the team for success by removing obstacles, managing
              risks, and may be even making coffee
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1, flexDirection: "column" }}>
            {/* @ts-ignore comment */}
            <Typography variant="singleSubscriptionSubtitle">
              {"Team Member would ideally also have: "}
            </Typography>
            {/* @ts-ignore comment */}
            <Typography variant="singleSubscriptionText">
              • Empower the team for success by removing obstacles, managing
              risks, and may be even making coffee
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1, flexDirection: "column" }}>
            {/* @ts-ignore comment */}
            <Typography variant="singleSubscriptionSubtitle">
              {"About the Studio:"}
            </Typography>
            {/* @ts-ignore comment */}
            <Typography variant="singleSubscriptionText">
              The hiring studio is a multinational team of over 70 individuals
              representing more than 20 nationalities, including a mix of
              experienced industry professionals and up-and-coming talents. It
              is a rapidly expanding studio that offers opportunities to work on
              some of the most renowned game IPs worldwide. The studio aspires
              to become the favored partner for AAA developers and publishers on
              a global scale. To realize this ambition, the team plans to
              continue growing until it can rightfully claim the distinction of
              being Europe most exciting co-development employer.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1, flexDirection: "column" }}>
            {/* @ts-ignore comment */}
            <Typography variant="singleSubscriptionSubtitle">
              {"Their Culture:"}
            </Typography>
            {/* @ts-ignore comment */}
            <Typography variant="singleSubscriptionText">
              Every member contributes to shaping the company culture and
              crafting distinctive, appealing games. When seeking new team
              members, they highl • Quanties such as passion, integrity, and c
              colaborative minoset
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1, flexDirection: "column" }}>
            {/* @ts-ignore comment */}
            <Typography variant="singleSubscriptionSubtitle">
              {"Reasons to work wire teaam:"}
            </Typography>
            {/* @ts-ignore comment */}
            <Typography variant="singleSubscriptionText">
              • Empower the team for success by removing obstacles, managing
              risks, and may be even making coffee
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1, flexDirection: "column" }}>
            {/* @ts-ignore comment */}
            <Typography variant="singleSubscriptionSubtitle">
              {"Benefits:"}
            </Typography>
            {/* @ts-ignore comment */}
            <Typography variant="singleSubscriptionText">
              • Empower the team for success by removing obstacles, managing
              risks, and may be even making coffee
            </Typography>
          </Box>
        </Stack>

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
              <Typography variant="candidateOptionText">
                Game Ganres:
              </Typography>
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
              <Typography variant="candidateOptionText">
                Game Engines:
              </Typography>
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
                Game Platforms:
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
        </Stack>
        {(workPreferences || employmentOptions) && (
          <Box sx={{ display: "flex", gap: 1, flexDirection: "column" }}>
            {/* @ts-ignore comment */}
            <Typography variant="singleSubscriptionSubtitle">
              {"Employment Preferences:"}
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              {employmentOptions !== "" && (
                <ChipStyled
                  text={employmentOptions}
                  type={ChipStyledEnum.employmentOptions}
                />
              )}
              {workPreferences !== "" && (
                <ChipStyled
                  text={workPreferences || "123"}
                  type={ChipStyledEnum.workPreferences}
                />
              )}
            </Box>
          </Box>
        )}
        <Box margin="50px 0">
          <CommonBtn
            variant="big"
            topic={`${jobTitle} ${companyName}`}
            recipient={emailAddress}
          />
        </Box>

        <Box position="absolute" top="20px" right="10px" maxWidth="250px">
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
          <CommonBtn
            variant="small"
            topic={`${jobTitle} ${companyName}`}
            recipient={emailAddress}
          />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default InfoPage;

export async function getServerSideProps(context: { query: { id: string } }) {
  const { id } = context.query;
  return {
    props: {
      id,
      info: getOneSubscriptionById(id),
    },
  };
}
