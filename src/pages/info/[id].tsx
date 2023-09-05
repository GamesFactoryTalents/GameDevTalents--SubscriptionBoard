import { Box, Container, Stack, Typography, Link, Tooltip } from "@mui/material";
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
    jobLocation,
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
    showLogo,
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
          gap: 4,
          mt: {
            xs: "150px",
            md: "50px",
          }
        }}
      >
        {info.showLogo && (
          <img
            src={logoFile.url}
            style={{
              maxWidth: "70px",
              maxHeight: "70px"
            }}
          />
        )}
      
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, alignItems: "center" }}>
          {/* @ts-ignore comment */}
          <Typography variant="singleSubscriptionTitle">
            {info.jobTitle}
          </Typography>
          {info.employmentOptions &&
            Array.isArray(info.employmentOptions) &&
            info.employmentOptions.map((option: any) => (
              option &&
              <ChipStyled
                text={option}
                type={ChipStyledEnum.corner}
              />
            ))}

          {info.country && (
            <ChipStyled text={info.country} type={ChipStyledEnum.corner} />
          )}
        </Box>

        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          {/* @ts-ignore comment */}
          <Typography variant="singleSubscriptionTitle">
            {"Studio's Preferred Countries of Hire"}
          </Typography>
          <ChipStyled text={info.jobLocation} type={ChipStyledEnum.corner} />
        </Box>

        <Stack sx={{ gap: 2 }}>
          <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
            {/* @ts-ignore comment */}
            <Typography variant="singleSubscriptionSubtitle">
              {"Role Description:"}
            </Typography>
            {/* @ts-ignore comment */}
            <Typography variant="singleSubscriptionSubtitle">
              {"Responsibilities:"}
            </Typography>
            {/* @ts-ignore comment */}
            <Typography variant="singleSubscriptionText">
             {responsibilities}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
            {/* @ts-ignore comment */}
            <Typography variant="singleSubscriptionSubtitle">
              {"Requirements:"}
            </Typography>
            {/* @ts-ignore comment */}
            <Typography variant="singleSubscriptionText">
              {requirements}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
            {/* @ts-ignore comment */}
            <Typography variant="singleSubscriptionSubtitle">
              {"Team Member would ideally also have: "}
            </Typography>
            {/* @ts-ignore comment */}
            <Typography variant="singleSubscriptionText">
              {idealAdditions}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
            {/* @ts-ignore comment */}
            <Typography variant="singleSubscriptionSubtitle">
              {"About the Studio:"}
            </Typography>
            {/* @ts-ignore comment */}
            <Typography variant="singleSubscriptionText">
             {aboutStudio}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
            {/* @ts-ignore comment */}
            <Typography variant="singleSubscriptionSubtitle">
              {"Their Culture:"}
            </Typography>
            {/* @ts-ignore comment */}
            <Typography variant="singleSubscriptionText">
             {theirCulture}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
            {/* @ts-ignore comment */}
            <Typography variant="singleSubscriptionSubtitle">
              {"Reasons to work with them:"}
            </Typography>
            {/* @ts-ignore comment */}
            <Typography variant="singleSubscriptionText">
              {reasonsToWork}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
            {/* @ts-ignore comment */}
            <Typography variant="singleSubscriptionSubtitle">
              {"Benefits:"}
            </Typography>
            {/* @ts-ignore comment */}
            <Typography variant="singleSubscriptionText">
              {benefits}
            </Typography>
          </Box>
        </Stack>

        {/* TODO: Make the component */}
        <Stack sx={{ gap: 2 }}>
          {specialities.toString() !== "" && (
            <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px" }}>
              {/* The comment below is about disabling MUI and TS discord */}
              {/* @ts-ignore comment */}
              <Typography variant="candidateOptionText">
                Specialisations:
              </Typography>
              {Array.isArray(specialities) &&
                specialities.map((speciality: any) => (
                  <ChipStyled
                    key={speciality}
                    text={speciality}
                    type={ChipStyledEnum.round}
                  />
                ))}
            </Box>
          )}
          {skills.toString() !== "" && (
            <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px" }}>
              {/* The comment below is about disabling MUI and TS discord */}
              {/* @ts-ignore comment */}
              <Typography variant="candidateOptionText">Skills:</Typography>
              {Array.isArray(skills) &&
                skills.map((skill: any) => (
                  <ChipStyled
                    key={skill}
                    text={skill}
                    type={ChipStyledEnum.round}
                  />
                ))}
            </Box>
          )}

          {gameGenres.toString() !== "" && (
            <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px" }}>
              {/* The comment below is about disabling MUI and TS discord */}
              {/* @ts-ignore comment */}
              <Typography variant="candidateOptionText">
                Game Genres:
              </Typography>
              {Array.isArray(gameGenres) &&
                gameGenres.map((ganre: any) => (
                  <ChipStyled
                    key={ganre}
                    text={ganre}
                    type={ChipStyledEnum.round}
                  />
                ))}
            </Box>
          )}
          {gameEngines.toString() !== "" && (
            <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px" }}>
              {/* The comment below is about disabling MUI and TS discord */}
              {/* @ts-ignore comment */}
              <Typography variant="candidateOptionText">
                Game Engines:
              </Typography>
              {Array.isArray(gameEngines) &&
                gameEngines.map((engine: any) => (
                  <ChipStyled
                    key={engine}
                    text={engine}
                    type={ChipStyledEnum.round}
                  />
                ))}
            </Box>
          )}
          {gamePlatforms.toString() !== "" && (
            <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px" }}>
              {/* The comment below is about disabling MUI and TS discord */}
              {/* @ts-ignore comment */}
              <Typography variant="candidateOptionText">
                Game Platforms:
              </Typography>
              {Array.isArray(gamePlatforms) &&
                gamePlatforms.map((platform: any) => (
                  <ChipStyled
                    key={platform}
                    text={platform}
                    type={ChipStyledEnum.round}
                  />
                ))}
            </Box>
          )}
          {salaryRange.toString() !== "[0, 100000]" && (
            <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px" }}>
              {/* The comment below is about disabling MUI and TS discord */}
              {/* @ts-ignore comment */}
              <Typography variant="candidateOptionText">
                Salary Range:
              </Typography>
              {(salaryRange[0] === '0' && salaryRange[1] === '100000') ? (
              <ChipStyled
              key={'Negotiable'}
              text={'Negotiable'}
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
        </Stack>
        {(workPreferences || employmentOptions) && (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, flexDirection: "column" }}>
            {/* @ts-ignore comment */}
            <Typography variant="singleSubscriptionSubtitle">
              {"Employment Preferences:"}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {employmentOptions !== "" &&
                Array.isArray(employmentOptions) &&
                employmentOptions.map((option: any) => (
                  option &&
                  <ChipStyled
                    text={option}
                    type={ChipStyledEnum.employmentOptions}
                  />
                ))}
              {(workPreferences !== "" &&
                Array.isArray(workPreferences)) &&
                workPreferences.map((option: any) => (
                  option &&
                  <ChipStyled
                    text={option}
                    type={ChipStyledEnum.workPreferences}
                  />
                ))}
            </Box>
          </Box>
        )}
        <Box margin="30px 0">
          <CommonBtn
            variant="big"
            topic={`${jobTitle} ${companyName}`}
            recipient={emailAddress}
          />
          <Link
            href='/'
            sx={{ display: 'flex', justifyContent: 'end', alignItems: "center", gap: 1, margin: '10px 0', fontSize: '12px', color: 'black', textDecoration: 'none', "::before": {content:'""',width: 0,height: 0, borderStyle: "solid", borderWidth: "10px 15px 10px 0", borderColor: "transparent #d9d9d9 transparent transparent"}}}
          >
            Back to Roles search
          </Link>
        </Box>

        <Box position="absolute" right="10px" maxWidth="250px" sx={{ top: {xs: "-130px", md: "20px"}, textAlign: {xs:"right", md: "left"}}}>
          <Typography variant="subtitle2">{`Job ID: ${id}`}</Typography>
          <Typography variant="subtitle2">{`Job Posted: ${new Date(
            created_at
          ).getUTCFullYear()}-${(new Date(created_at).getUTCMonth() + 1)
            .toString()
            .padStart(2, "0")}-${new Date(created_at)
            .getUTCDate()
            .toString()
            .padStart(2, "0")}`}</Typography>
            {/* @ts-ignore comment */}
          <Typography variant="subtitle3">{`Category: ${category}`}</Typography>
          <Box sx={{position: "relative", display: "inline"}}>
            <CommonBtn
              variant="small"
              topic={`${jobTitle} ${companyName}`}
              recipient={emailAddress}
            />
            <Tooltip title="Send us an email expressing interest in the role and we will reach out to you within 2 working days" placement="right">
                <Link sx={{ cursor: "pointer", backgroundColor: "#F0F0F0", border: "1px solid #D9D9D9", borderRadius: "50%", fontSize: "14px", color: "#A7A7A7", textDecoration: "none", fontWeight: "600", width: "26px", height: "26px", display: "flex", justifyContent: "center", alignItems: "center", position: "absolute", top: "-24px", right: "-28px"}}>?</Link>
            </Tooltip>
          </Box>  
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
