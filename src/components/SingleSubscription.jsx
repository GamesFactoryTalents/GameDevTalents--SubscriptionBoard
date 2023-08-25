import { useParams } from "react-router-dom";
import * as subscribers from "../generated/subscribers.json";
import { Box, ListItem, ListItemText, Typography } from "@material-ui/core";
import logo from "./logo.png";
import ChipSelected from "./ChipSelected";
import CommonBtn from "./commonBtn";

const SingleSubscription = () => {
  const { id } = useParams();

  const currentSubscriber = subscribers.default.find(
    (subscriber) => subscriber.ip === id
  );
  console.log("currentSubscriber", currentSubscriber);
  return (
    <Box display="flex" flexDirection="column" position="relative">
      <img
        style={{ width: "105px", height: "105px" }}
        src={logo}
        alt={"logo"}
      />
      <Box display="flex" alignItems="center" gridColumnGap="10px">
        <Typography variant="h6">{currentSubscriber.jobTitle}</Typography>
        <Box display="flex" alignItems="center" gridColumnGap="5px">
          <ChipSelected
            text={currentSubscriber.employmentOptions}
            variant="corner"
          />
          <ChipSelected text={currentSubscriber.country} variant="corner" />
        </Box>
      </Box>
      <Box display="flex" alignItems="center" gridColumnGap="10px">
        <Typography variant="h6">
          {"Studio's Preferred Countries of Hire"}
        </Typography>
        <Box display="flex" alignItems="center" gridColumnGap="5px">
          <ChipSelected text={currentSubscriber.country} variant="corner" />
        </Box>
      </Box>

      <Box>
        <Typography variant="subtitle2">{"Role Description"}</Typography>

        <Box display="flex" flexDirection="column" gridRowGap="30px">
          <Box>
            <Typography variant="subtitle2">{"Responsiolities"}</Typography>
            <Box>
              <ListItem style={{ padding: "0 20px" }}>
                <ListItemText
                  primaryTypographyProps={{ style: { fontSize: "14px" } }}
                  primary={`• Empower the team for success by removing obstacles, managing risks, and may be even making coffee`}
                />
              </ListItem>
              <ListItem style={{ padding: "0 20px" }}>
                <ListItemText
                  primaryTypographyProps={{ style: { fontSize: "14px" } }}
                  primary={`• Empower the team for success by removing obstacles, managing risks, and may be even making coffee`}
                />
              </ListItem>
              <ListItem style={{ padding: "0 20px" }}>
                <ListItemText
                  primaryTypographyProps={{ style: { fontSize: "14px" } }}
                  primary={`• Empower the team for success by removing obstacles, managing risks, and may be even making coffee`}
                />
              </ListItem>
              <ListItem style={{ padding: "0 20px" }}>
                <ListItemText
                  primaryTypographyProps={{ style: { fontSize: "14px" } }}
                  primary={`• Empower the team for success by removing obstacles, managing risks, and may be even making coffee`}
                />
              </ListItem>
              <ListItem style={{ padding: "0 20px" }}>
                <ListItemText
                  primaryTypographyProps={{ style: { fontSize: "14px" } }}
                  primary={`• Empower the team for success by removing obstacles, managing risks, and may be even making coffee`}
                />
              </ListItem>
            </Box>
          </Box>

          <Box>
            <Typography variant="subtitle2">{"Requirements"}</Typography>
            <Box>
              <ListItem style={{ padding: "0 20px" }}>
                <ListItemText
                  primaryTypographyProps={{ style: { fontSize: "14px" } }}
                  primary={`• Empower the team for success by removing obstacles, managing risks, and may be even making coffee`}
                />
              </ListItem>
              <ListItem style={{ padding: "0 20px" }}>
                <ListItemText
                  primaryTypographyProps={{ style: { fontSize: "14px" } }}
                  primary={`• Empower the team for success by removing obstacles, managing risks, and may be even making coffee`}
                />
              </ListItem>
              <ListItem style={{ padding: "0 20px" }}>
                <ListItemText
                  primaryTypographyProps={{ style: { fontSize: "14px" } }}
                  primary={`• Empower the team for success by removing obstacles, managing risks, and may be even making coffee`}
                />
              </ListItem>
              <ListItem style={{ padding: "0 20px" }}>
                <ListItemText
                  primaryTypographyProps={{ style: { fontSize: "14px" } }}
                  primary={`• Empower the team for success by removing obstacles, managing risks, and may be even making coffee`}
                />
              </ListItem>
              <ListItem style={{ padding: "0 20px" }}>
                <ListItemText
                  primaryTypographyProps={{ style: { fontSize: "14px" } }}
                  primary={`• Empower the team for success by removing obstacles, managing risks, and may be even making coffee`}
                />
              </ListItem>
            </Box>
          </Box>

          <Box>
            <Typography variant="subtitle2">
              {"Team Member would ideally also have"}
            </Typography>
            <Box>
              <ListItem style={{ padding: "0 20px" }}>
                <ListItemText
                  primaryTypographyProps={{ style: { fontSize: "14px" } }}
                  primary={`• Empower the team for success by removing obstacles, managing risks, and may be even making coffee`}
                />
              </ListItem>
              <ListItem style={{ padding: "0 20px" }}>
                <ListItemText
                  primaryTypographyProps={{ style: { fontSize: "14px" } }}
                  primary={`• Empower the team for success by removing obstacles, managing risks, and may be even making coffee`}
                />
              </ListItem>
              <ListItem style={{ padding: "0 20px" }}>
                <ListItemText
                  primaryTypographyProps={{ style: { fontSize: "14px" } }}
                  primary={`• Empower the team for success by removing obstacles, managing risks, and may be even making coffee`}
                />
              </ListItem>
              <ListItem style={{ padding: "0 20px" }}>
                <ListItemText
                  primaryTypographyProps={{ style: { fontSize: "14px" } }}
                  primary={`• Empower the team for success by removing obstacles, managing risks, and may be even making coffee`}
                />
              </ListItem>
              <ListItem style={{ padding: "0 20px" }}>
                <ListItemText
                  primaryTypographyProps={{ style: { fontSize: "14px" } }}
                  primary={`• Empower the team for success by removing obstacles, managing risks, and may be even making coffee`}
                />
              </ListItem>
            </Box>
          </Box>

          <Box>
            <Typography variant="subtitle2">{"About the Studio"}</Typography>
            <Box>
              <Typography
                style={{ fontSize: "13px" }}
                variant="caption"
              >{`The hiring studio is a multinational team of over 70 individuals representing more than 20 nationalities, including a mix of experienced industry professionals and up-and-coming talents. It is a rapidly expanding studio that offers opportunities to work on some of the most renowned game IPs worldwide.
          The studio aspires to become the favored partner for AAA developers and publishers on a global scale. To realize this ambition, the team plans to continue growing until it can rightfully claim the distinction of being Europe's most exciting co-development employer.`}</Typography>
            </Box>
          </Box>
          <Box>
            <Typography variant="subtitle2">{"Their Culture"}</Typography>
            <Box>
              <Typography
                style={{ fontSize: "13px" }}
                variant="caption"
              >{`Every member contributes to shaping the company culture and crafting distinctive, appealing games. When seeking new team members, they highl)
• Quanties such as passion, integrity, and c
colaborative minoset`}</Typography>
            </Box>
          </Box>

          <Box>
            <Typography variant="subtitle2">
              {"Reasons to work wire teaam:"}
            </Typography>
            <Box>
              <ListItem style={{ padding: "0 20px" }}>
                <ListItemText
                  primaryTypographyProps={{ style: { fontSize: "14px" } }}
                  primary={`• Empower the team for success by removing obstacles, managing risks, and may be even making coffee`}
                />
              </ListItem>
              <ListItem style={{ padding: "0 20px" }}>
                <ListItemText
                  primaryTypographyProps={{ style: { fontSize: "14px" } }}
                  primary={`• Empower the team for success by removing obstacles, managing risks, and may be even making coffee`}
                />
              </ListItem>
              <ListItem style={{ padding: "0 20px" }}>
                <ListItemText
                  primaryTypographyProps={{ style: { fontSize: "14px" } }}
                  primary={`• Empower the team for success by removing obstacles, managing risks, and may be even making coffee`}
                />
              </ListItem>
              <ListItem style={{ padding: "0 20px" }}>
                <ListItemText
                  primaryTypographyProps={{ style: { fontSize: "14px" } }}
                  primary={`• Empower the team for success by removing obstacles, managing risks, and may be even making coffee`}
                />
              </ListItem>
              <ListItem style={{ padding: "0 20px" }}>
                <ListItemText
                  primaryTypographyProps={{ style: { fontSize: "14px" } }}
                  primary={`• Empower the team for success by removing obstacles, managing risks, and may be even making coffee`}
                />
              </ListItem>
            </Box>
          </Box>
          <Box>
            <Typography variant="subtitle2">{"Benefits"}</Typography>
            <Box>
              <ListItem style={{ padding: "0 20px" }}>
                <ListItemText
                  primaryTypographyProps={{ style: { fontSize: "14px" } }}
                  primary={`• Empower the team for success by removing obstacles, managing risks, and may be even making coffee`}
                />
              </ListItem>
              <ListItem style={{ padding: "0 20px" }}>
                <ListItemText
                  primaryTypographyProps={{ style: { fontSize: "14px" } }}
                  primary={`• Empower the team for success by removing obstacles, managing risks, and may be even making coffee`}
                />
              </ListItem>
              <ListItem style={{ padding: "0 20px" }}>
                <ListItemText
                  primaryTypographyProps={{ style: { fontSize: "14px" } }}
                  primary={`• Empower the team for success by removing obstacles, managing risks, and may be even making coffee`}
                />
              </ListItem>
              <ListItem style={{ padding: "0 20px" }}>
                <ListItemText
                  primaryTypographyProps={{ style: { fontSize: "14px" } }}
                  primary={`• Empower the team for success by removing obstacles, managing risks, and may be even making coffee`}
                />
              </ListItem>
              <ListItem style={{ padding: "0 20px" }}>
                <ListItemText
                  primaryTypographyProps={{ style: { fontSize: "14px" } }}
                  primary={`• Empower the team for success by removing obstacles, managing risks, and may be even making coffee`}
                />
              </ListItem>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        gridRowGap="10px"
        marginTop="20px"
      >
        {currentSubscriber.specialities && (
          <Box
            display="grid"
            gridTemplateColumns="100px 1fr"
            alignItems="center"
            gridColumnGap="30px"
          >
            <Typography
              style={{ fontSize: "14px", color: "gray" }}
              variant="caption"
            >
              {"Specialisations"}
            </Typography>
            <Box display="flex" alignItems="center" gridColumnGap="5px">
              {currentSubscriber.specialities.split(",").map((speciality) => (
                <ChipSelected text={speciality} variant="round" />
              ))}
            </Box>
          </Box>
        )}
        {currentSubscriber.skills && (
          <Box
            display="grid"
            gridTemplateColumns="100px 1fr"
            gridColumnGap="30px"
          >
            <Typography
              style={{ fontSize: "14px", color: "gray" }}
              variant="caption"
            >
              {"Skills"}
            </Typography>
            <Box display="flex" alignItems="center" gridColumnGap="5px">
              {currentSubscriber.skills.split(",").map((speciality) => (
                <ChipSelected text={speciality} variant="round" />
              ))}
            </Box>
          </Box>
        )}

        {currentSubscriber.gameGenres && (
          <Box
            display="grid"
            gridTemplateColumns="100px 1fr"
            gridColumnGap="30px"
          >
            <Typography
              style={{ fontSize: "14px", color: "gray" }}
              variant="caption"
            >
              {"Game Ganres"}
            </Typography>
            <Box display="flex" alignItems="center" gridColumnGap="5px">
              {currentSubscriber.gameGenres.split(",").map((speciality) => (
                <ChipSelected text={speciality} variant="round" />
              ))}
            </Box>
          </Box>
        )}

        {currentSubscriber.gameEngines && (
          <Box
            display="grid"
            gridTemplateColumns="100px 1fr"
            gridColumnGap="30px"
          >
            <Typography
              style={{ fontSize: "14px", color: "gray" }}
              variant="caption"
            >
              {"Game Engines"}
            </Typography>
            <Box display="flex" alignItems="center" gridColumnGap="5px">
              {currentSubscriber.gameEngines.split(",").map((speciality) => (
                <ChipSelected text={speciality} variant="round" />
              ))}
            </Box>
          </Box>
        )}
        {currentSubscriber.gamePlatforms && (
          <Box
            display="grid"
            gridTemplateColumns="110px 1fr"
            gridColumnGap="30px"
          >
            <Typography
              style={{ fontSize: "14px", color: "gray" }}
              variant="caption"
            >
              {"Game Platforms"}
            </Typography>
            <Box display="flex" alignItems="center" gridColumnGap="5px">
              {currentSubscriber.gamePlatforms.split(",").map((speciality) => (
                <ChipSelected text={speciality} variant="round" />
              ))}
            </Box>
          </Box>
        )}

        <Box
          display="grid"
          gridTemplateColumns="110px 1fr"
          gridColumnGap="30px"
        >
          <Typography
            style={{ fontSize: "14px", color: "gray" }}
            variant="caption"
          >
            {"Salary Range"}
          </Typography>
          <Box display="flex" alignItems="center" gridColumnGap="5px">
            <ChipSelected text={"5000 - 6000"} variant="round" />
          </Box>
        </Box>
      </Box>

      <Box margin="50px 0">
        <CommonBtn
          variant="big"
          topic={`${currentSubscriber.jobTitle} ${currentSubscriber.companyName}`}
          recipient={currentSubscriber.emailAddress}
        />
      </Box>

      <Box position="absolute" top="20px" right="10px" maxWidth="250px">
        <Typography variant="subtitle2">{`Job ID: ${currentSubscriber.jobTitle} ${currentSubscriber.companyName}`}</Typography>
        <Typography variant="subtitle2">{`Job Posted: ${new Date(
          currentSubscriber.created_at
        ).getUTCFullYear()}-${(
          new Date(currentSubscriber.created_at).getUTCMonth() + 1
        )
          .toString()
          .padStart(2, "0")}-${new Date(currentSubscriber.created_at)
          .getUTCDate()
          .toString()
          .padStart(2, "0")}`}</Typography>
        <Typography variant="subtitle2">{`Category: ${currentSubscriber.category}`}</Typography>
        <CommonBtn
          variant="small"
          topic={`${currentSubscriber.jobTitle} ${currentSubscriber.companyName}`}
          recipient={currentSubscriber.emailAddress}
        />
      </Box>
    </Box>
  );
};

export default SingleSubscription;
