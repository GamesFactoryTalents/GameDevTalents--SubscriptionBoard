import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import { zohoMultiStringToArray } from "./Utils";
import { Box } from "@material-ui/core";

function CandidateCellRenderer(params) {
  const jobTitleLine = params.data.jobTitle ? (
    <span>{params.data.jobTitle}</span>
  ) : (
    <span>&nbsp;</span>
  );
  const specialitiesArray = params.data.specialities
    ? zohoMultiStringToArray(params.data.specialities)
    : [];

  const gameGenres = params.data.gameGenres
    ? params.data.gameGenres.split(",")
    : [];
  const filteredGameGenres = gameGenres.filter((s) => s.length > 0);
  const gameGenresLine = filteredGameGenres.map((spec, idx) => (
    <Chip key={`sp-${idx}-${spec}`} label={spec} />
  ));

  const gameEngines = params.data.gameEngines
    ? params.data.gameEngines.split(",")
    : [];
  const filteredGameEngines = gameEngines.filter((s) => s.length > 0);
  const gameEnginesLine = filteredGameEngines.map((spec, idx) => (
    <Chip key={`sp-${idx}-${spec}`} label={spec} />
  ));

  const gamePlatforms = params.data.gamePlatforms
    ? params.data.gamePlatforms.split(",")
    : [];
  const filteredGamePlatforms = gamePlatforms.filter((s) => s.length > 0);
  const gamePlatformsLine = filteredGamePlatforms.map((spec, idx) => (
    <Chip key={`sp-${idx}-${spec}`} label={spec} />
  ));

  const employmentOptions = params.data.employmentOptions;
  const linkJob = params.data.linkJob;
  const firstName = params.data.firstName;
  const lastName = params.data.lastName;
  const fullName = firstName + " " + lastName;
  const companyName = params.data.companyName;
  const linkCompany = params.data.linkCompany;

  const filteredSpecialitiesArray = specialitiesArray.filter(
    (s) => s.length > 0
  );
  const specialitiesLine = filteredSpecialitiesArray.map((spec, idx) => (
    <Chip key={`sp-${idx}-${spec}`} label={spec} />
  ));
  const skillsArray = params.data.skills
    ? zohoMultiStringToArray(params.data.skills)
    : [];
  const platformsArray = params.data.platforms
    ? zohoMultiStringToArray(params.data.platforms)
    : [];
  const filteredSkillsArray = skillsArray.filter((s) => s.length > 0);
  const filteredPlatformsArray = platformsArray.filter((p) => p.length > 0);
  const skillsLine = filteredSkillsArray.map((spec, idx) => (
    <Chip
      key={`sk-${idx}-${spec}`}
      className="value-chip"
      color="primary"
      label={spec}
    />
  ));
  const platformsLine = filteredPlatformsArray.map((pl, idx) => (
    <Chip
      key={`sk-${idx}-${pl}`}
      className="value-chip"
      color="primary"
      label={pl}
    />
  ));

  const seniorityString = params.data.seniorityLevel ? (
    <span>{params.data.seniorityLevel}</span>
  ) : (
    <span>&nbsp;</span>
  );
  const countryString = params.data.country ? (
    <span>{params.data.country}</span>
  ) : (
    <span>&nbsp;</span>
  );

  return (
    <div className="candidateRowCell">
      <div className="cand-detail-row">
        <div className="cand-detail-block">
          <div className="elem top">
            <div className="country light">{countryString}</div>
            <Box style={{ display: "flex", flexDirection: "column" }}>
              <a href={linkCompany}>
                <div style={{ fontWeight: "600" }} className="id light">
                  {companyName}
                </div>
              </a>
              <div class="id light">{fullName}</div>
            </Box>
          </div>

          <div className="elem">
            <div className="title">{jobTitleLine}</div>
            <div class="seniority light">{seniorityString}</div>
          </div>

          <div className="elem info">
            <div className="relocate light">{employmentOptions}</div>
          </div>
          {specialitiesLine.length > 0 && (
            <div className="elem">
              <div className="sm-title light">Specialities:</div>
              <div className="elem-values">{specialitiesLine}</div>
            </div>
          )}
          {gameGenresLine.length > 0 && (
            <div className="elem">
              <div className="sm-title light">Ganres:</div>
              <div className="elem-values">{gameGenresLine}</div>
            </div>
          )}
          {gameEnginesLine.length > 0 && (
            <div className="elem">
              <div className="sm-title light">Engines:</div>
              <div className="elem-values">{gameEnginesLine}</div>
            </div>
          )}
          {gamePlatformsLine.length > 0 && (
            <div className="elem">
              <div className="sm-title light">Platforms:</div>
              <div className="elem-values">{gamePlatformsLine}</div>
            </div>
          )}
          {skillsLine.length > 0 && (
            <div className="elem">
              <div className="sm-title light">Skills:</div>
              <div className="elem-values">{skillsLine}</div>
            </div>
          )}

          {platformsLine.length > 0 && (
            <div className="elem">
              <div className="sm-title light">Platforms:</div>
              <div className="elem-values">{platformsLine}</div>
            </div>
          )}

          {
            <div className="elem buttons">
              <Button variant="contained" href={linkJob}>
                Link to Job
              </Button>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default CandidateCellRenderer;
